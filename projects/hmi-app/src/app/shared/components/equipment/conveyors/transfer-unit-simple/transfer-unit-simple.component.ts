import {
	Component,
	OnInit,
	OnDestroy,
	ChangeDetectionStrategy,
	AfterViewInit,
	Input,
	ChangeDetectorRef
} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { cloneDeep } from 'lodash';

import {
	ComponentIdService,
	PlcTagPollingService,
	PlcTagWriteService,
	ComponentIdBase,
	IMotorSimple,
	IUpDownMotorSimple,
	IConveyorSettingsTransfer,
	IConveyorSimple,
	ETransferEquipment,
	ConveyorMenuService
} from '@revotechiscool/revo-tech-hmi-lib';
import { objectChanged } from '@revotechiscool/revo-tech-core-lib';

import {
	IMotor,
	IMotorStatus,
	MotorBase
} from '@hmi-app/hmi/classes/motor.base';
import { Conveyor_UDT } from 'plc/PLC_Main';
import { MotorControlNavigatorService } from '@hmi-src/app/hmi/services/motor-control-navigator.service';
import { Subscription } from 'rxjs';
import { EasySystems_LineairMotor_ConveyLinx_FullPLC_Single } from 'plc/PLC_Main';

@Component({
	selector: 'app-transfer-unit-simple',
	templateUrl: './transfer-unit-simple.component.html',
	styleUrls: ['./transfer-unit-simple.component.scss'],
	providers: [ConveyorMenuService]
})
export class TransferUnitSimpleComponent extends ComponentIdBase
	implements OnInit, AfterViewInit, OnDestroy {
	_horMotor: IMotor;
	_verMotor: IMotor;
	_upDownMotor: EasySystems_LineairMotor_ConveyLinx_FullPLC_Single;

	_horMotStatus: IMotorStatus;
	_verMotStatus: IMotorStatus;
	_upDownMotStatus: IMotorStatus;

	_horMotSimple: IMotorSimple;
	_verMotSimple: IMotorSimple;
	_updownMotSimple: IUpDownMotorSimple;

	_horMotPolling = false;
	_verMotPolling = false;
	_upDownMotPolling = false;

	@Input() set horMotor(value: IMotor) {
		if (value) {
			this._horMotor = value;
			this._horMotStatus = MotorBase.getStatus(this._horMotor);

			this._horMotSimple = {
				alarmActive: this._horMotStatus.alarmActive,
				name: this._horMotStatus.name.substr(1),
				running: this._horMotStatus.running as boolean
			};

			if (!this._horMotPolling) {
				const ids = MotorBase.getStatusIds(this._horMotor, this);
				this.poller.addTags(ids);
				this._horMotPolling = true;
			}
		}
	}

	@Input() set verMotor(value: IMotor) {
		if (value) {
			this._verMotor = value;
			this._verMotStatus = MotorBase.getStatus(this._verMotor);

			this._verMotSimple = {
				alarmActive: this._verMotStatus.alarmActive,
				name: this._verMotStatus.name.substr(1),
				running: this._verMotStatus.running as boolean
			};

			if (!this._verMotPolling) {
				const ids = MotorBase.getStatusIds(this._verMotor, this);
				this.poller.addTags(ids);
				this._verMotPolling = true;
			}
		}
	}

	@Input() set upDownMotor(
		value: EasySystems_LineairMotor_ConveyLinx_FullPLC_Single
	) {
		if (value) {
			this._upDownMotor = value;
			this._upDownMotStatus = MotorBase.getStatus(this._upDownMotor);

			this._updownMotSimple = {
				alarmActive: this._upDownMotStatus.alarmActive,
				name: this._upDownMotStatus.name.substr(1),
				running: this._upDownMotStatus.running as boolean,
				isDown: this._upDownMotor._Status._Position.Value === -1,
				isUp: this._upDownMotor._Status._Position.Value === 1
			};

			if (!this._upDownMotPolling) {
				const ids = MotorBase.getStatusIds(this._upDownMotor, this);
				this.poller.addTags(ids);
				this.poller.addTag(this._upDownMotor._Status._Position, this);
				this._upDownMotPolling = true;
			}
		}
	}

	_horSettings: IConveyorSettingsTransfer;
	_pollingHorConv = false;
	_verSettings: IConveyorSettingsTransfer;
	_pollingVerConv = false;

	_horConveyorSimple: IConveyorSimple;
	_verConveyorSimple: IConveyorSimple;

	@Input() set horSettings(value: IConveyorSettingsTransfer) {
		if (objectChanged(value, this._horSettings) && value) {
			this._horSettings = value;
			this.crf.detectChanges();
		}
	}

	@Input() set verSettings(value: IConveyorSettingsTransfer) {
		if (objectChanged(value, this._verSettings) && value) {
			this._verSettings = value;
		}
	}

	_horConveyor: Conveyor_UDT;
	_verConveyor: Conveyor_UDT;
	@Input() set horConv(value: Conveyor_UDT) {
		if (value) {
			this._horConveyor = value;

			this._horConveyorSimple = {
				name: this._horConveyor.Name.substr(1),
				alarmActive: this._horConveyor._Alarms._Status.Value > 0,
				empty: this._horConveyor._Status._Empty.Value as boolean,
				runningFb: this._horConveyor._Input._Running_FB.Value as boolean,
				sensorEnd: this._horConveyor._Input._SensorEndHMI.Value as boolean,
				sensorStart: this._horConveyor._Input._SensorStartHMI.Value as boolean
			};

			if (!this._pollingHorConv) {
				this.poller.addTag(this._horConveyor._Input._SensorStartHMI, this);
				this.poller.addTag(this._horConveyor._Input._SensorEndHMI, this);
				this.poller.addTag(this._horConveyor._Input._Running_FB, this);
				this.poller.addTag(this._horConveyor._Status._Empty, this);
				this.poller.addTag(this._horConveyor._Alarms._Status, this);
				this._pollingHorConv = true;
			}
		}
	}

	@Input() set verConv(value: Conveyor_UDT) {
		if (value) {
			this._verConveyor = value;

			this._verConveyorSimple = {
				name: this._verConveyor.Name.substr(1),
				alarmActive: this._verConveyor._Alarms._Status.Value > 0,
				empty: this._verConveyor._Status._Empty.Value as boolean,
				runningFb: this._verConveyor._Input._Running_FB.Value as boolean,
				sensorEnd: this._verConveyor._Input._SensorEndHMI.Value as boolean,
				sensorStart: this._verConveyor._Input._SensorStartHMI.Value as boolean
			};

			if (!this._pollingVerConv) {
				this.poller.addTag(this._verConveyor._Input._SensorStartHMI, this);
				this.poller.addTag(this._verConveyor._Input._SensorEndHMI, this);
				this.poller.addTag(this._verConveyor._Input._Running_FB, this);
				this.poller.addTag(this._verConveyor._Status._Empty, this);
				this.poller.addTag(this._verConveyor._Alarms._Status, this);
				this._pollingVerConv = true;
			}
		}
	}

	link$: Subscription;
	reset$: Subscription;

	constructor(
		private idService: ComponentIdService,
		private crf: ChangeDetectorRef,
		private poller: PlcTagPollingService,
		private writer: PlcTagWriteService,
		private router: Router,
		private motorNavigator: MotorControlNavigatorService,
		private activatedRoute: ActivatedRoute,
		private conveyorMenuService: ConveyorMenuService
	) {
		super(idService);

		this.link$ = this.conveyorMenuService.onLinkClick.subscribe(link =>
			this.onItemClicked(link.id)
		);
		this.reset$ = this.conveyorMenuService.onReset.subscribe(ids =>
			this.onResetBttn(ids)
		);
	}

	ngOnInit() {}

	ngAfterViewInit(): void {}

	onItemClicked(item: ETransferEquipment) {
		if (item === ETransferEquipment.HOR_MOT) {
			this.motorNavigator.navigate(this._horMotor as IMotor);
		}

		if (item === ETransferEquipment.VER_MOT) {
			this.motorNavigator.navigate(this._verMotor as IMotor);
		}

		if (item === ETransferEquipment.UPDOWN_MOT) {
			this.motorNavigator.navigate(this._upDownMotor as IMotor);
		}

		if (item === ETransferEquipment.HOR_CONV) {
			this.router.navigate(['conveyor'], {
				queryParams: { id: this._horConveyor.Id },
				replaceUrl: false
			});
		}

		if (item === ETransferEquipment.VER_CONV) {
			this.router.navigate(['conveyor'], {
				queryParams: { id: this._verConveyor.Id },
				replaceUrl: false
			});
		}
	}

	onResetBttn(items: ETransferEquipment[]) {
		for (const item of items) {
			if (item === ETransferEquipment.HOR_MOT) {
				this.writer.writeTag(this._horMotor._Cmd._Reset, true);
			}
			if (item === ETransferEquipment.VER_MOT) {
				this.writer.writeTag(this._verMotor._Cmd._Reset, true);
			}
			if (item === ETransferEquipment.UPDOWN_MOT) {
				this.writer.writeTag(this._upDownMotor._Cmd._Reset, true);
			}
			if (item === ETransferEquipment.HOR_CONV) {
				this.writer.writeTag(this._horConveyor._Cmd._Reset, true);
				this.writer.writeTag(this._horConveyor._Cmd._ReInitialize, true);
			}
			if (item === ETransferEquipment.VER_CONV) {
				this.writer.writeTag(this._verConveyor._Cmd._Reset, true);
				this.writer.writeTag(this._verConveyor._Cmd._ReInitialize, true);
			}
		}
	}

	ngOnDestroy() {
		this.poller.removeTag(this._horConveyor._Input._SensorStartHMI, this);
		this.poller.removeTag(this._horConveyor._Input._SensorEndHMI, this);
		this.poller.removeTag(this._horConveyor._Input._Running_FB, this);
		this.poller.removeTag(this._horConveyor._Status._Empty, this);
		this.poller.removeTag(this._horConveyor._Alarms._Status, this);

		this.poller.removeTag(this._verConveyor._Input._SensorStartHMI, this);
		this.poller.removeTag(this._verConveyor._Input._SensorEndHMI, this);
		this.poller.removeTag(this._verConveyor._Input._Running_FB, this);
		this.poller.removeTag(this._verConveyor._Status._Empty, this);
		this.poller.removeTag(this._verConveyor._Alarms._Status, this);

		this.poller.removeTags(MotorBase.getStatusIds(this._horMotor, this));
		this.poller.removeTags(MotorBase.getStatusIds(this._verMotor, this));
		if (this._upDownMotor) {
			this.poller.removeTags(MotorBase.getStatusIds(this._upDownMotor, this));
		}

		this.link$.unsubscribe();
		this.reset$.unsubscribe();
	}
}
