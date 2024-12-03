import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Store } from '@ngrx/store';

import * as AppStore from '@hmi-app/app-store';

import {
	EasySystems_LineairMotor_ConveyLinx_FullPLC_Single,
	ConveyLinxAlarms
} from 'plc/PLC_Main';
import {
	ComponentIdService,
	PlcTagPollingService,
	PlcTagWriteService,
	ICommandsButtons,
	BoxSettings,
	GridBoxWrappers,
	CommandsSettings
} from '@revotechiscool/revo-tech-hmi-lib';
import {
	ILabelLed,
	ERROR_LED,
	WARNING_LED,
	INFO_LED,
	IButton,
	ButtonStates,
	ILabelText,
	Unit,
	ButtonsSize,
	LabelLed,
	LabelText,
	Button
} from '@revotechiscool/revo-tech-core-lib';
import { marker as $ } from '@biesbjerg/ngx-translate-extract-marker';
import { ControlComponentBase } from '@hmi-app/hmi/classes/control-component-base';

@Component({
	selector: 'app-easysystems-transferunit-detail',
	templateUrl: './easysystems-transferunit-detail.component.html',
	styleUrls: ['./easysystems-transferunit-detail.component.scss']
})
export class EasySystemsTransferUnitDetailComponent extends ControlComponentBase
	implements OnInit, OnDestroy {
	_tag: EasySystems_LineairMotor_ConveyLinx_FullPLC_Single;

	statusBox: BoxSettings;
	alarmsBox: BoxSettings;
	boxes: GridBoxWrappers;

	bttnUp: IButton;
	bttnDown: IButton;
	bttnInit: IButton;
	bttnReset: IButton;

	mdrAlarms: ConveyLinxAlarms;
	commands: ICommandsButtons;

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

	initCoreComponents() {
		this.bttnUp = new Button({
			value: $('MOVE UP'),
			flash: false,
			state: ButtonStates.success,
			onActionMouseDown: this.moveUp.bind(this),
			icon: 'arrow_drop_up'
		});
		this.bttnDown = new Button({
			value: $('MOVE DOWN'),
			flash: false,
			state: ButtonStates.success,
			onActionMouseDown: this.moveDown.bind(this),
			icon: 'arrow_drop_down'
		});
		this.bttnInit = new Button({
			value: $('INITIALIZE'),
			flash: false,
			state: ButtonStates.warning,
			onActionMouseDown: this.initialize.bind(this),
			icon: 'refresh'
		});
		this.bttnReset = new Button({
			value: $('RESET'),
			flash: false,
			state: ButtonStates.reset,
			onActionMouseDown: this.resetbttn.bind(this),
			icon: 'sync'
		});
	}

	checkTagIsValid() {
		if (this._tag._Cmd._UpAuto.Value !== null) {
			this.objectInitialized = true;
		}
	}

	updateProperties() {
		this.name = this._tag.Name;
		this.updateStatus();
		this.updateAlarms();

		this.manualMode = this._tag._Status._ManualModeActive.Value as boolean;

		this.bttnUp.disabled = this._tag._Cmd._UpManual.Value as boolean;
		this.bttnDown.disabled = this._tag._Cmd._DownManual.Value as boolean;

		this.commands = new CommandsSettings({
			row: 1,
			column: 1,
			startStop: { startbttn: this.bttnUp, stopbttn: this.bttnDown },
			bttnReset: this.bttnReset,
			bttnInit: this.bttnInit,
			manualModeActive: this.manualMode,
			direction: null,
			speedControl: null,
			buttonsSize: ButtonsSize.large
		});
		this.resetTag = this._tag._Cmd._Reset;
		this.showControl = true;

		this.boxes = new GridBoxWrappers([
			this.statusBox,
			this.alarmsBox,
			(this.commands as any) as BoxSettings
		]);
	}

	updateStatus() {
		this.statusBox = new BoxSettings({
			title: 'Status',
			row: 2,
			column: 1,
			lines: true,
			content: [
				new LabelLed({
					label: $('Up Position'),
					ledOnCmd: this._tag._Status._PositionLineair.Value === 1,
					color: INFO_LED
				}),
				new LabelLed({
					label: $('Traveling'),
					ledOnCmd: this._tag._Status._PositionLineair.Value === 0,
					color: INFO_LED
				}),
				new LabelLed({
					label: $('Down position'),
					ledOnCmd: this._tag._Status._PositionLineair.Value === -1,
					color: INFO_LED
				}),
				new LabelLed({
					label: $('Interlocked'),
					ledOnCmd: this._tag._Status._Interlocked.Value,
					color: WARNING_LED
				}),
				new LabelLed({
					label: $('Up Auto command'),
					ledOnCmd: this._tag._Cmd._UpAuto.Value,
					color: INFO_LED
				}),
				new LabelLed({
					label: $('Down Auto command'),
					ledOnCmd: this._tag._Cmd._DownAuto.Value,
					color: INFO_LED
				}),
				new LabelLed({
					label: $('Up Manual command'),
					ledOnCmd: this._tag._Cmd._UpManual.Value,
					color: INFO_LED
				}),
				new LabelLed({
					label: $('Down Manual command'),
					ledOnCmd: this._tag._Cmd._DownManual.Value,
					color: INFO_LED
				}),
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
			title: 'Alarms',
			row: 2,
			column: 2,
			lines: true,
			content: [
				new LabelLed({
					label: $('Homing timed out'),
					ledOnCmd: this._tag._Alarms._HomingTimedOut._Active.Value,
					color: ERROR_LED
				}),
				new LabelLed({
					label: $('Down position feedback not received'),
					ledOnCmd: this._tag._Alarms._NotDown._Active.Value,
					color: ERROR_LED
				}),
				new LabelLed({
					label: $('Up position feedback not received'),
					ledOnCmd: this._tag._Alarms._NotUp._Active.Value,
					color: ERROR_LED
				}),
				new LabelLed({
					label: $('Error active'),
					ledOnCmd: this._tag._Alarms._MdrAlarms._AnyErrorActive._Active.Value,
					color: ERROR_LED
				}),
				new LabelLed({
					label: $('Overheated'),
					ledOnCmd: this._tag._Alarms._MdrAlarms._Overheat._Active.Value,
					color: ERROR_LED
				}),
				new LabelLed({
					label: $('Short circuit'),
					ledOnCmd: this._tag._Alarms._MdrAlarms._ShortCircuit._Active.Value,
					color: ERROR_LED
				}),
				new LabelLed({
					label: $('MDR not connected'),
					ledOnCmd: this._tag._Alarms._MdrAlarms._MDRNotConnected._Active.Value,
					color: ERROR_LED
				}),
				new LabelLed({
					label: $('MDR bad hall senosor'),
					ledOnCmd: this._tag._Alarms._MdrAlarms._MDRBadHall._Active.Value,
					color: ERROR_LED
				}),
				new LabelLed({
					label: $('Overload'),
					ledOnCmd: this._tag._Alarms._MdrAlarms._Overload._Active.Value,
					color: ERROR_LED
				}),
				new LabelLed({
					label: $('Stalled'),
					ledOnCmd: this._tag._Alarms._MdrAlarms._Stalled._Active.Value,
					color: ERROR_LED
				}),
				new LabelLed({
					label: $('Over voltage'),
					ledOnCmd: this._tag._Alarms._MdrAlarms._OverVoltage._Active.Value,
					color: ERROR_LED
				}),
				new LabelLed({
					label: $('Low voltage'),
					ledOnCmd: this._tag._Alarms._MdrAlarms._LowVoltage._Active.Value,
					color: ERROR_LED
				}),
				new LabelLed({
					label: $('Not connected'),
					ledOnCmd: this._tag._Alarms._MdrAlarms._NotConnected._Active.Value,
					color: ERROR_LED
				}),
				new LabelLed({
					label: $('Connection NOK'),
					ledOnCmd: this._tag._Alarms._MdrAlarms._ConnectionNotOK._Active.Value,
					color: ERROR_LED
				}),
				new LabelLed({
					label: $('Jam error'),
					ledOnCmd: this._tag._Alarms._MdrAlarms._JamError._Active.Value,
					color: ERROR_LED
				}),
				new LabelLed({
					label: $('Sensor low gain'),
					ledOnCmd: this._tag._Alarms._MdrAlarms._SensorLowGain._Active.Value,
					color: ERROR_LED
				})
			]
		});
	}

	moveUp() {
		this.writer.writeTag(this._tag._Cmd._UpManual, true);
		this.writer.writeTag(this._tag._Cmd._DownManual, false);
	}

	moveDown() {
		this.writer.writeTag(this._tag._Cmd._UpManual, false);
		this.writer.writeTag(this._tag._Cmd._DownManual, true);
	}

	initialize() {
		this.writer.writeTag(this._tag._Cmd._InitPosition, true);
	}

	resetbttn() {
		this.writer.writeTag(this.resetTag, true);
	}

	ngOnDestroy() {
		super.ngOnDestroy();
	}
}
