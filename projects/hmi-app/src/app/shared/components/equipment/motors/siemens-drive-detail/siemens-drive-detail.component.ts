import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Location } from '@angular/common';
import { marker as $ } from '@biesbjerg/ngx-translate-extract-marker';

import * as AppStore from '@hmi-app/app-store';

import { G115D_DRIVE_UDT } from 'plc/PLC_MAIN';

import {
	ComponentIdService,
	PlcTagPollingService,
	PlcTagWriteService,
	IBoxSettings,
	GridBoxWrappers,
	BoxSettings
} from '@revotechiscool/revo-tech-hmi-lib';
import {
	ILabelLed,
	ERROR_LED,
	WARNING_LED,
	INFO_LED,
	ILabelText,
	Button,
	LabelLed,
	LabelText,
	ButtonsSize,
	LabelInput,
	InputTypes,
	Unit
} from '@revotechiscool/revo-tech-core-lib';

import { MotorBaseControl } from '@hmi-app/hmi/classes/control-component-motor-base';

@Component({
	selector: 'app-siemens-drive-detail',
	templateUrl: './siemens-drive-detail.component.html',
	styleUrls: ['./siemens-drive-detail.component.scss']
})
export class SiemensDriveDetailComponent extends MotorBaseControl
	implements OnInit, OnDestroy {
	_tag: G115D_DRIVE_UDT;

	boxes: GridBoxWrappers = {
		boxes: []
	};
	statusBox: BoxSettings;
	alarmsBox: BoxSettings;
	faultsBox: BoxSettings;

	constructor(
		protected router: Router,
		protected idService: ComponentIdService,
		protected poller: PlcTagPollingService,
		protected writer: PlcTagWriteService,
		protected location: Location,
		protected activatedRoute: ActivatedRoute,
		protected store: Store<AppStore.AppState>
	) {
		super(router, idService, poller, writer, location, activatedRoute, store);
		this.initCoreComponents();
		this.init();
	}

	ngOnInit() {}

	checkTagIsValid() {
		if (this._tag._Cmd._OnAuto.Value !== null) {
			this.objectInitialized = true;
		}
	}

	updateProperties() {
		this.name = this._tag.Name;
		this.updateStatus();
		this.updateAlarms();
		this.updateFaults();

		this.startButton = new Button({
			...this.startButton,
			disabled: this._tag._Cmd._OnManual.Value as boolean
		});
		this.stopButton = new Button({
			...this.stopButton,
			disabled: !this._tag._Cmd._OnManual.Value as boolean
		});

		this.showDirectionButtons = this._tag._Settings._AllowManualDirection
			.Value as boolean;
		this.leftBttn = new Button({
			...this.leftBttn,
			disabled: this._tag._Cmd._DirectionManual.Value as boolean
		});
		this.rightBttn = new Button({
			...this.rightBttn,
			disabled: !this._tag._Cmd._DirectionManual.Value as boolean
		});

		this.speedManual = new LabelInput({
			...this.speedManual,
			inputValue: this._tag._Cmd._SpeedManual.Value as number
		});

		this.speedAuto = new LabelText({
			...this.speedAuto,
			text: this._tag._Cmd._SpeedAuto.Value
		});

		super.updateProperties();
		this.resetTag = this._tag._Cmd._Reset;
		this.commands.buttonsSize = ButtonsSize.medium;
		this.commands.row = 1;
		this.commands.column = 1;
		this.boxes = new GridBoxWrappers([
			(this.commands as any) as BoxSettings,
			this.statusBox,
			this.alarmsBox,
			this.faultsBox
		]);
	}

	updateStatus() {
		this.statusBox = new BoxSettings({
			title: $('Status'),
			row: 2,
			column: 1,
			content: [
				new LabelLed({
					label: $('Run auto command'),
					ledOnCmd: this._tag._Cmd._OnAuto.Value,
					color: INFO_LED
				}),
				new LabelLed({
					label: $('Run manual command'),
					ledOnCmd: this._tag._Cmd._OnManual.Value,
					color: INFO_LED
				}),
				new LabelLed({
					label: $('Interlocked'),
					ledOnCmd: this._tag._Status._Interlocked.Value,
					color: WARNING_LED
				}),
				new LabelLed({
					label: $('Running feedback'),
					ledOnCmd: this._tag._Status._Running.Value,
					color: INFO_LED
				}),
				new LabelLed({
					label: $('Ready to start'),
					ledOnCmd: this._tag._Status._Ready.Value,
					color: INFO_LED
				}),
				new LabelText({
					label: $('Actual direction'),
					text: this._tag._Status._ActualDirection.Value
				}),
				new LabelText({
					label: $('SPEED'),
					text: this._tag._Status._ActualSpeed.Value,
					unit: ' rpm' as Unit
				}),
				new LabelText({
					label: $('CURRENT'),
					text: this._tag._Status._Current.Value,
					unit: ' Amp' as Unit
				}),
				new LabelText({
					label: $('TORQUE'),
					text: this._tag._Status._Torque.Value,
					unit: ' Nm' as Unit
				})
			]
		});
	}

	updateAlarms() {
		this.alarmsBox = new BoxSettings({
			title: $('ALARMS'),
			row: 1,
			column: 2,
			content: [
				new LabelLed({
					label: $('ALARM ACTIVE'),
					ledOnCmd: this._tag._Alarms._AlarmFromDrive.Value,
					color: ERROR_LED
				}),
				new LabelText({
					label: $('ALARM CODE'),
					text: this._tag._Alarms._AlarmCode.Value
				})
			]
		});
	}

	updateFaults() {
		this.faultsBox = new BoxSettings({
			title: $('FAUTLS'),
			row: 2,
			column: 2,
			content: [
				new LabelText({
					label: $('FAULT CODE'),
					text: this._tag._Faults._FaultCode.Value
				}),
				new LabelLed({
					label: $('FAULT ACTIVE ON DRIVE'),
					ledOnCmd: this._tag._Faults._FaultActive.Value,
					color: ERROR_LED
				}),
				new LabelLed({
					label: $('FAULT ACTIVE ON DRIVE'),
					ledOnCmd: this._tag._Faults._FaultActive.Value,
					color: ERROR_LED
				}),
				new LabelLed({
					label: $('DISCONNECTED'),
					ledOnCmd: this._tag._Faults._Disconnected.Value,
					color: ERROR_LED
				}),
				new LabelLed({
					label: $('TORQUE NOK'),
					ledOnCmd: this._tag._Faults._TorqueNOK.Value,
					color: ERROR_LED
				}),
				new LabelLed({
					label: $('TEMPERATURE NOK'),
					ledOnCmd: this._tag._Faults._TemperatureNOK.Value,
					color: ERROR_LED
				}),
				new LabelLed({
					label: $('CURRENT NOK'),
					ledOnCmd: this._tag._Faults._CurrentNOK.Value,
					color: ERROR_LED
				}),
				new LabelLed({
					label: $('NOT ON TIMED OUT'),
					ledOnCmd: this._tag._Faults._NotOnTImedOut.Value,
					color: ERROR_LED
				}),
				new LabelLed({
					label: $('NOT READY'),
					ledOnCmd: this._tag._Faults._NotReady.Value,
					color: ERROR_LED
				})
			]
		});
	}

	startPressed() {
		this.writer.writeTag(this._tag._Cmd._OnManual, true);
	}
	stopPressed() {
		this.writer.writeTag(this._tag._Cmd._OnManual, false);
	}
	directionLefPressed() {
		this.writer.writeTag(this._tag._Cmd._DirectionManual, true);
	}
	directionRightPressed() {
		this.writer.writeTag(this._tag._Cmd._DirectionManual, false);
	}
	updateSpeedManaul(value: number) {
		const numb = Number(value);
		this.writer.writeTag(this._tag._Cmd._SpeedManual, numb);
	}

	ngOnDestroy() {
		super.ngOnDestroy();
	}
}
