import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Location } from '@angular/common';

import * as AppStore from '@hmi-app/app-store';

import { Nord_Drive_UDT } from 'plc/PLC_Main';

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
	InputTypes
} from '@revotechiscool/revo-tech-core-lib';

import { MotorBaseControl } from '@hmi-app/hmi/classes/control-component-motor-base';

@Component({
	selector: 'app-nord-drive-detail',
	templateUrl: './nord-drive-detail.component.html',
	styleUrls: ['./nord-drive-detail.component.scss']
})
export class NordDriveDetailComponent extends MotorBaseControl
	implements OnInit, OnDestroy {
	_tag: Nord_Drive_UDT;

	boxes: GridBoxWrappers = {
		boxes: []
	};
	statusBox: BoxSettings;
	alarmsBox: BoxSettings;

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

	ngOnInit() { }

	checkTagIsValid() {
		if (this._tag._Cmd._OnAuto.Value !== null) {
			this.objectInitialized = true;
		}
	}

	updateProperties() {
		this.name = this._tag.Name;
		this.updateStatus();
		this.updateAlarms();

		this.startButton = new Button({
			...this.startButton,
			disabled: this._tag._Cmd._OnManual.Value as boolean
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
			this.alarmsBox
		]);
	}

	updateStatus() {
		this.statusBox = new BoxSettings({
			title: 'Status',
			row: 2,
			column: 1,
			content: [
				new LabelLed({
					label: ' Run auto command',
					ledOnCmd: this._tag._Cmd._OnAuto.Value,
					color: INFO_LED
				}),
				new LabelLed({
					label: ' Run manual command',
					ledOnCmd: this._tag._Cmd._OnManual.Value,
					color: INFO_LED
				}),
				new LabelLed({
					label: ' Interlocked',
					ledOnCmd: this._tag._Status._Interlocked.Value,
					color: WARNING_LED
				}),
				new LabelLed({
					label: ' Running feedback',
					ledOnCmd: this._tag._Status._Running.Value,
					color: INFO_LED
				}),
				new LabelLed({
					label: ' Ready to start',
					ledOnCmd: this._tag._Status._ReadyToStart.Value,
					color: INFO_LED
				}),
				new LabelLed({
					label: ' Ready for operation',
					ledOnCmd: this._tag._Status._ReadyForOperaiton.Value,
					color: INFO_LED
				}),
				new LabelLed({
					label: ' Power on',
					ledOnCmd: this._tag._Status._PowerOn.Value,
					color: INFO_LED
				}),
				new LabelText({
					label: ' Actual direction',
					text: this._tag._Status._ActualSpeed.Value
				})
			]
		});
	}

	updateAlarms() {
		this.alarmsBox = new BoxSettings({
			title: 'Alarms',
			row: 1,
			column: 2,
			content: [
				new LabelLed({
					label: ' Not on timed out',
					ledOnCmd: this._tag._Alarms._NotOnTImedOut._Active.Value,
					color: ERROR_LED
				}),
				new LabelLed({
					label: ' Not off timed out',
					ledOnCmd: this._tag._Alarms._NotOffTimedOut._Active.Value,
					color: ERROR_LED
				}),
				new LabelLed({
					label: ' Error from drive',
					ledOnCmd: this._tag._Alarms._ErrorFromDrive._Active.Value,
					color: ERROR_LED
				}),
				new LabelLed({
					label: ' Cannot start error',
					ledOnCmd: this._tag._Alarms._CannotStartError._Active.Value,
					color: ERROR_LED
				}),
				new LabelLed({
					label: ' Emergency stop active',
					ledOnCmd: this._tag._Alarms._EmergencyStopActive._Active.Value,
					color: ERROR_LED
				}),
				new LabelLed({
					label: ' Disconnected',
					ledOnCmd: this._tag._Alarms._Disconnected._Active.Value,
					color: ERROR_LED
				}),
				new LabelLed({
					label: ' Warning on drive active',
					ledOnCmd: this._tag._Alarms._WarningFromDrive._Active.Value,
					color: WARNING_LED
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
