import {
	Component,
	OnInit,
	Input,
	AfterViewInit,
	OnDestroy,
	ChangeDetectorRef
} from '@angular/core';

import {
	ComponentIdBase,
	ComponentIdService,
	IMotorSettings,
	IMotorSimple,
	PlcTagPollingService
} from '@revotechiscool/revo-tech-hmi-lib';

import {
	IMotor,
	IMotorStatus,
	MotorBase
} from '@hmi-app/hmi/classes/motor.base';
import { MotorControlNavigatorService } from '@hmi-app/hmi/services/motor-control-navigator.service';

@Component({
	selector: 'app-motor-simple',
	templateUrl: './motor-simple.component.html',
	styleUrls: ['./motor-simple.component.scss']
})
export class MotorSimpleComponent extends ComponentIdBase
	implements OnInit, AfterViewInit, OnDestroy {
	_motor: IMotor;
	_motorSimple: IMotorSimple;

	motorStatus: IMotorStatus;
	motorpolling = false;

	motorRotationStyle;

	_cssClass: string = '';
	@Input() set cssClass(value: string) {
		this._cssClass = value;
	}

	_showName = true;
	@Input() set showName(value: boolean) {
		this._showName = value;
	}

	@Input() set motor(value: IMotor) {
		if (value) {
			this._motor = value;
			this.motorStatus = MotorBase.getStatus(this._motor);

			this._motorSimple = {
				alarmActive: this.motorStatus.alarmActive,
				name: this.motorStatus.name,
				running: this.motorStatus.running as boolean
			};

			if (!this.motorpolling && this._motor) {
				const ids = MotorBase.getStatusIds(this._motor, this);
				this.poller.addTags(ids);
				this.motorpolling = true;
			}
			this.updateTemplate();
		}
	}

	_settings: IMotorSettings;
	@Input() set settings(value: IMotorSettings) {
		this._settings = value;
		this.updateTemplate();
	}

	constructor(
		private idService: ComponentIdService,
		private poller: PlcTagPollingService,
		private crf: ChangeDetectorRef,
		private motorNavigator: MotorControlNavigatorService
	) {
		super(idService);
	}

	ngOnInit() {}

	ngAfterViewInit() {}

	updateTemplate() {
		if (this._settings && this._motorSimple) {
			this.crf.detectChanges();
		}
	}

	onClick() {
		this.motorNavigator.navigate(this._motor);
	}

	ngOnDestroy() {
		if (this._motor) {
			this.poller.removeTags(MotorBase.getStatusIds(this._motor, this));
		}
	}
}
