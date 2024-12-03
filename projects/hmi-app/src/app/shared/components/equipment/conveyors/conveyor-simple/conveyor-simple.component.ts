import {
	Component,
	OnInit,
	ChangeDetectionStrategy,
	Input,
	ChangeDetectorRef
} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import {
	ComponentIdService,
	PlcTagPollingService,
	PlcTagWriteService,
	ComponentIdBase,
	IConveyorSettings,
	IMotorSimple,
	IConveyorSimple,
	ConveyorMenuService,
	EConveyorEquipment
} from '@revotechiscool/revo-tech-hmi-lib';

import { IMotor, IMotorStatus, MotorBase } from '@hmi-app/hmi/classes';
import { Conveyor_UDT } from 'plc/PLC_MAIN';

import { MotorControlNavigatorService } from '@hmi-src/app/hmi/services';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-conveyor-simple',
	templateUrl: './conveyor-simple.component.html',
	styleUrls: ['./conveyor-simple.component.scss'],
	providers: [ConveyorMenuService]
})
export class ConveyorSimpleComponent extends ComponentIdBase implements OnInit {
	_settings: IConveyorSettings;
	_conveyor: Conveyor_UDT;
	conveyorpolling = false;
	motorPolling = false;

	_motor: IMotor;
	motorStatus: IMotorStatus;

	motorSimple: IMotorSimple;
	conveyorSimple: IConveyorSimple;

	subs: Subscription[] = [];
	sub: Subscription;

	@Input() set motor(value: IMotor) {
		//console.log(value);
		if (value) {
			this._motor = value;
			this.motorStatus = MotorBase.getStatus(this._motor);
			this.motorSimple = {
				alarmActive: this.motorStatus.alarmActive,
				name: this.motorStatus.name,
				running: this.motorStatus.running as boolean,
				enableManualCommands: this.motorStatus.enableManualCommands as boolean
			};

			if (!this.motorPolling && this._motor) {
				const ids = MotorBase.getStatusIds(this._motor, this);
				this.poller.addTags(ids);
				this.motorPolling = true;
			}
		}
	}

	@Input() set settings(value: IConveyorSettings) {
		this._settings = { ...value };
	}

	@Input() set conveyor(value: Conveyor_UDT) {
		this._conveyor = value;

		this.conveyorSimple = {
			name: this._conveyor.Name.substr(1),
			alarmActive: this._conveyor._Alarms._AlarmActive._Active.Value as boolean,
			empty: this._conveyor._Status._Empty.Value as boolean,
			runningFb: this._conveyor._Input._Running_FB.Value as boolean,
			sensorEnd: this._conveyor._Input._SensorEndHMI.Value as boolean,
			sensorStart: this._conveyor._Input._SensorStartHMI.Value as boolean
		};

		if (!this.conveyorpolling) {
			this.poller.addTag(this._conveyor._Input._SensorStartHMI, this);
			this.poller.addTag(this._conveyor._Input._SensorEndHMI, this);
			this.poller.addTag(this._conveyor._Input._Running_FB, this);
			this.poller.addTag(this._conveyor._Status._Empty, this);
			this.poller.addTag(this._conveyor._Alarms._AlarmActive._Active, this);
			this.conveyorpolling = true;
		}
	}

	constructor(
		private idService: ComponentIdService,
		private crf: ChangeDetectorRef,
		private poller: PlcTagPollingService,
		private writer: PlcTagWriteService,
		private router: Router,
		private activatedRoute: ActivatedRoute,
		private motorNavigator: MotorControlNavigatorService,
		private ConveyorMenuService: ConveyorMenuService
	) {
		super(idService);

		this.sub = this.ConveyorMenuService.onActionClick.subscribe(data => {
			if (data.id === EConveyorEquipment.START_MOTOR) {
				const tag = MotorBase.getStartStopTag(this._motor);
				if (tag) {
					this.writer.writeTag(tag, true);
				}
			}
			if (data.id === EConveyorEquipment.STOP_MOTOR) {
				const tag = MotorBase.getStartStopTag(this._motor);
				if (tag) {
					this.writer.writeTag(tag, false);
				}
			}
		});

		this.subs.push(this.sub);

		this.sub = this.ConveyorMenuService.onLinkClick.subscribe(link => {
			if (link.id === EConveyorEquipment.CONVEYOR) {
				this.router.navigate(['conveyor'], {
					queryParams: { id: this._conveyor.Id },
					replaceUrl: false
				});
			}

			if (link.id === EConveyorEquipment.MOTOR) {
				this.motorNavigator.navigate(this._motor);
			}
		});

		this.subs.push(this.sub);

		this.sub = this.ConveyorMenuService.onReset.subscribe(ids => {
			for (const id of ids) {
				if (id === EConveyorEquipment.CONVEYOR) {
					this.writer.writeTag(this._conveyor._Cmd._ReInitialize, true);
				}

				if (id === EConveyorEquipment.MOTOR) {
					const reset = MotorBase.getResetTag(this._motor);
					if (reset) {
						this.writer.writeTag(reset, true);
						console.log('reset tag sent');
					}
				}
			}
		});

		this.subs.push(this.sub);
	}

	ngOnInit() {}

	ngOnDestroy() {
		this.poller.removeTag(this._conveyor._Input._SensorStartHMI, this);
		this.poller.removeTag(this._conveyor._Input._SensorEndHMI, this);
		this.poller.removeTag(this._conveyor._Input._Running_FB, this);
		this.poller.removeTag(this._conveyor._Status._Empty, this);
		this.poller.removeTag(this._conveyor._Alarms._Status, this);

		if (this._motor) {
			this.poller.removeTags(MotorBase.getStatusIds(this._motor, this));
		}

		for (const sub of this.subs) {
			sub.unsubscribe();
		}
	}
}
