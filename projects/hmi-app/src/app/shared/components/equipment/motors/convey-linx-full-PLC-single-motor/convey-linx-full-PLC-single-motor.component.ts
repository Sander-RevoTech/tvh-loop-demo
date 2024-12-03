import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Location } from '@angular/common';

import * as AppStore from '@hmi-app/app-store';
import { marker as $ } from '@biesbjerg/ngx-translate-extract-marker';

import { ConveyLinx_FullPLC_Single } from 'plc/PLC_Main';
import {
	ComponentIdService,
	PlcTagPollingService,
	PlcTagWriteService,
	IButtonStartStop,
	BoxSettings,
	GridBoxWrappers
} from '@revotechiscool/revo-tech-hmi-lib';

import { MotorBaseControl } from '@hmi-app/hmi/classes/control-component-motor-base';
import {
	ButtonsSize,
	Button,
	LabelInput,
	LabelText,
	LabelLed,
	ERROR_LED,
	INFO_LED,
	Unit,
	WARNING_LED
} from '@revotechiscool/revo-tech-core-lib';

@Component({
	selector: 'app-convey-linx-full-PLC-single-motor',
	templateUrl: './convey-linx-full-PLC-single-motor.component.html',
	styleUrls: ['./convey-linx-full-PLC-single-motor.component.scss']
})
export class ConveyLinxFullPLCSingleMotorComponent extends MotorBaseControl
	implements OnInit, OnDestroy {
	_tag: ConveyLinx_FullPLC_Single;

	statusBox: BoxSettings;
	alarmsBox: BoxSettings;
	boxes: GridBoxWrappers;

	buttonStartStopGroupd: IButtonStartStop;

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
		if (this._tag._Cmd._RunAuto.Value !== null) {
			this.objectInitialized = true;
		}
	}

	updateProperties() {
		this.updateStatus();
		this.updateAlarms();
		this.manualMode = this._tag._Status._ManualModeActive.Value;

		this.startButton = new Button({
			...this.startButton,
			disabled: this._tag._Cmd._RunManual.Value as boolean
		});
		this.stopButton = new Button({
			...this.stopButton,
			disabled: !this._tag._Cmd._RunManual.Value as boolean
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
			title: $('Status'),
			row: 2,
			column: 1,
			lines: true,
			content: [
				new LabelLed({
					label: $('Running feedback'),
					ledOnCmd: this._tag._Status._Running.Value,
					color: INFO_LED
				}),
				new LabelText({
					label: $('Servo Position'),
					text: this._tag._Status._Position.Value,
					unit: 'pulses' as Unit
				}),
				new LabelLed({
					label: $('Interlocked'),
					ledOnCmd: this._tag._Status._Interlocked.Value,
					color: WARNING_LED
				}),
				new LabelLed({
					label: $('Manual mode active'),
					ledOnCmd: this._tag._Status._ManualModeActive.Value,
					color: INFO_LED
				}),
				new LabelLed({
					label: $('Manual mode active'),
					ledOnCmd: this._tag._Status._ManualModeActive.Value,
					color: INFO_LED
				}),
				new LabelText({
					label: $('Current'),
					text: this._tag._Status._Current.Value,
					unit: Unit.mA
				}),
				new LabelText({
					label: $('Minimum voltage'),
					text: this._tag._Status._MinVoltage.Value,
					unit: Unit.V
				}),
				new LabelText({
					label: $('Maximum voltage'),
					text: this._tag._Status._MaxVoltage.Value,
					unit: Unit.V
				}),
				new LabelText({
					label: $('Actual voltage'),
					text: this._tag._Status._Voltage.Value,
					unit: Unit.V
				}),
				new LabelText({
					label: $('Frequency'),
					text: this._tag._Status._Frequency.Value,
					unit: Unit.mHz
				}),
				new LabelText({
					label: $('Temperature MDR'),
					text: this._tag._Status._TemperatureModule.Value,
					unit: Unit.celsiusDegree
				}),
				new LabelText({
					label: $('Temperature Module'),
					text: this._tag._Status._TemperatureModule.Value,
					unit: Unit.celsiusDegree
				}),
				new LabelLed({
					label: $('Heartbeat'),
					ledOnCmd: this._tag._Heartbeat.Value,
					color: INFO_LED
				}),
				new LabelLed({
					label: $('Stop active from PLC'),
					ledOnCmd: this._tag._StopStatus._StopActiveCommandPLC.Value,
					color: ERROR_LED
				}),
				new LabelLed({
					label: $('Stop active other module'),
					ledOnCmd: this._tag._StopStatus._StopActiveOtherModule.Value,
					color: ERROR_LED
				}),
				new LabelLed({
					label: $('Stop active lost connection'),
					ledOnCmd: this._tag._StopStatus._StopActiveLostConn.Value,
					color: ERROR_LED
				}),
				new LabelLed({
					label: $('Stop active lost PLC'),
					ledOnCmd: this._tag._StopStatus._StopActiveLostPLC.Value,
					color: ERROR_LED
				})
			]
		});
	}

	updateAlarms() {
		this.alarmsBox = new BoxSettings({
			title: $('Alarms'),
			row: 2,
			column: 2,
			lines: true,
			content: [
				new LabelLed({
					label: $('Error active'),
					ledOnCmd: this._tag._Alarms._AnyErrorActive._Active.Value,
					color: ERROR_LED
				}),
				new LabelLed({
					label: $('Overheated'),
					ledOnCmd: this._tag._Alarms._Overheat._Active.Value,
					color: ERROR_LED
				}),
				new LabelLed({
					label: $('Short circuit'),
					ledOnCmd: this._tag._Alarms._ShortCircuit._Active.Value,
					color: ERROR_LED
				}),
				new LabelLed({
					label: $('MDR not connected'),
					ledOnCmd: this._tag._Alarms._MDRNotConnected._Active.Value,
					color: ERROR_LED
				}),
				new LabelLed({
					label: $('MDR bad hall senosor'),
					ledOnCmd: this._tag._Alarms._MDRBadHall._Active.Value,
					color: ERROR_LED
				}),
				new LabelLed({
					label: $('Overload'),
					ledOnCmd: this._tag._Alarms._Overload._Active.Value,
					color: ERROR_LED
				}),
				new LabelLed({
					label: $('Stalled'),
					ledOnCmd: this._tag._Alarms._Stalled._Active.Value,
					color: ERROR_LED
				}),
				new LabelLed({
					label: $('Over voltage'),
					ledOnCmd: this._tag._Alarms._OverVoltage._Active.Value,
					color: ERROR_LED
				}),
				new LabelLed({
					label: $('Low voltage'),
					ledOnCmd: this._tag._Alarms._LowVoltage._Active.Value,
					color: ERROR_LED
				}),
				new LabelLed({
					label: $('Not connected'),
					ledOnCmd: this._tag._Alarms._NotConnected._Active.Value,
					color: ERROR_LED
				}),
				new LabelLed({
					label: $('Connection NOK'),
					ledOnCmd: this._tag._Alarms._ConnectionNotOK._Active.Value,
					color: ERROR_LED
				}),
				new LabelLed({
					label: $('Jam error'),
					ledOnCmd: this._tag._Alarms._JamError._Active.Value,
					color: ERROR_LED
				}),
				new LabelLed({
					label: $('Sensor low gain'),
					ledOnCmd: this._tag._Alarms._SensorLowGain._Active.Value,
					color: ERROR_LED
				})
			]
		});
	}

	startPressed() {
		this.writer.writeTag(this._tag._Cmd._RunManual, true);
	}

	stopPressed() {
		this.writer.writeTag(this._tag._Cmd._RunManual, false);
	}

	directionLefPressed() {
		this.writer.writeTag(this._tag._Cmd._DirectionManual, true);
	}

	directionRightPressed() {
		this.writer.writeTag(this._tag._Cmd._DirectionManual, false);
	}

	resetPressed() {
		this.writer.writeTag(this.resetTag, true);
	}

	updateSpeedManaul(value: number) {
		this.writer.writeTag(this._tag._Cmd._SpeedManual, Number(value));
	}

	ngOnDestroy() {
		super.ngOnDestroy();
	}
}
