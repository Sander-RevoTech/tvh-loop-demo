import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { marker as $ } from '@biesbjerg/ngx-translate-extract-marker';

import * as AppStore from '@hmi-app/app-store';

import { Scale_UDT } from 'plc/PLC_Main';

import {
	ComponentIdService,
	PlcTagPollingService,
	PlcTagWriteService,
	GridBoxWrappers,
	BoxSettings,
	CommandsSettings
} from '@revotechiscool/revo-tech-hmi-lib';
import {
	ILabelLed,
	ERROR_LED,
	INFO_LED,
	ILabelText,
	IButton,
	ButtonStates,
	Button,
	LabelLed,
	LabelText
} from '@revotechiscool/revo-tech-core-lib';

import { ControlComponentBase } from '@hmi-app/hmi/classes/control-component-base';

@Component({
	selector: ' app-scale-detail',
	templateUrl: './scale-detail.component.html',
	styleUrls: ['./scale-detail.component.scss']
})
export class ScaleDetailComponent extends ControlComponentBase
	implements OnInit, OnDestroy {
	_tag: Scale_UDT;

	bttnZero: Button;
	bttnTare: Button;
	bttnResetTare: Button;
	bttnWeighObject: Button;
	bttnResetDiagnostics: Button;
	bttnReset: Button;

	boxes: GridBoxWrappers = new GridBoxWrappers([]);
	commandsBox: BoxSettings;
	StatusBox: BoxSettings;
	AlarmsBox: BoxSettings;
	DiagnosticsBox: BoxSettings;
	ResultBox: BoxSettings;

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
		this.bttnZero = new Button({
			value: $('ZERO'),
			onActionMouseDown: this.zeroCmd.bind(this),
			state: ButtonStates.warning,
			icon: 'exposure_zero'
		});
		this.bttnTare = new Button({
			value: $('TARE'),
			onActionMouseDown: this.tareCmd.bind(this),
			state: ButtonStates.success,
			icon: 'title'
		});
		this.bttnWeighObject = new Button({
			value: $('WEIGH'),
			onActionMouseDown: this.weighCmd.bind(this),
			state: ButtonStates.success,
			icon: 'power_input'
		});

		this.bttnResetTare = new Button({
			value: $('RESET TARE'),
			onActionMouseDown: this.resetTareCmd.bind(this),
			state: ButtonStates.reset,
			icon: 'sync'
		});

		this.bttnReset = new Button({
			value: $('RESET'),
			onActionMouseDown: this.resetTareCmd.bind(this),
			state: ButtonStates.reset,
			icon: 'sync'
		});

		this.bttnResetDiagnostics = new Button({
			value: $('RESET DIAGNOSTICS'),
			onActionMouseDown: this.bttnResetDiagnosticsClick.bind(this),
			state: ButtonStates.reset,
			icon: 'sync'
		});
	}

	checkTagIsValid() {
		if (this._tag._Cmd._ResetDiagnostics.Value !== null) {
			this.objectInitialized = true;
		}
	}

	updateProperties() {
		this.name = this._tag.Name;
		this.updateStatus();
		this.updateAlarms();

		this.manualMode = this._tag._status._ManualModeActive.Value;

		this.bttnZero.disabled = !this.manualMode;
		this.bttnTare.disabled = !this.manualMode;
		this.bttnResetTare.disabled = !this.manualMode;
		this.bttnResetDiagnostics.disabled = false;
		this.bttnWeighObject.disabled = !this.manualMode;

		this.commandsBox = new BoxSettings({
			row: 0,
			column: 0,
			title: $('Commands'),
			content: []
		});

		if (this.manualMode) {
			// this.commandsBox.content.push(this.bttnZero);
			this.commandsBox.content.push(this.bttnTare);
			this.commandsBox.content.push(this.bttnWeighObject);
			// this.commandsBox.content.push(this.bttnResetTare);
		}
		this.commandsBox.content.push(this.bttnReset);

		this.boxes = new GridBoxWrappers([
			this.commandsBox as any,
			this.StatusBox,
			this.AlarmsBox,
			this.DiagnosticsBox,
			this.ResultBox
		]);

		this.showControl = true;
	}

	updateStatus() {
		this.StatusBox = new BoxSettings({
			title: $('Status'),
			column: 1,
			row: 1,
			content: [
				new LabelLed({
					label: $('Weighing'),
					ledOnCmd: this._tag._Cmd._Manual._WeighObject.Value,
					color: INFO_LED
				}),
				new LabelLed({
					label: $('Ready for new command'),
					ledOnCmd: this._tag._status._ReadyForNewCommand.Value,
					color: INFO_LED
				}),
				new LabelLed({
					label: $('Executing command'),
					ledOnCmd: this._tag._status._ExecutingCommand.Value,
					color: INFO_LED
				}),
				new LabelText({
					label: $('Gross Weight'),
					text: this._tag._status._GrossWeight.Value
				}),
				new LabelText({
					label: $('Net Weight'),
					text: this._tag._status._NetWeight.Value
				})
			]
		});

		this.DiagnosticsBox = new BoxSettings({
			title: $('Diagnostics'),
			row: 1,
			column: 2,
			content: [
				new LabelText({
					label: $('Stable measurements'),
					text: this._tag._diagnostics._stableMeasurements.Value
				}),
				new LabelText({
					label: $('Unstable measurements'),
					text: this._tag._diagnostics._unstableMeasurements.Value
				}),
				new LabelText({
					label: $('Total measurements'),
					text: this._tag._diagnostics._totalMeasurements.Value
				}),
				this.bttnResetDiagnostics
			]
		});

		this.ResultBox = new BoxSettings({
			title: $('Result'),
			row: 0,
			column: 2,
			content: [
				new LabelLed({
					label: $('New result'),
					ledOnCmd: this._tag._ReadResult._NewResult.Value,
					color: INFO_LED
				}),
				new LabelLed({
					label: $('Stable result'),
					ledOnCmd: this._tag._ReadResult._Stable.Value,
					color: INFO_LED
				}),
				new LabelText({
					label: $('Weigh Result'),
					text: this._tag._ReadResult._netWeightGrams.Value
				})
			]
		});
	}

	updateAlarms() {
		this.AlarmsBox = new BoxSettings({
			title: $('Alarms'),
			row: 1,
			column: 3,
			content: [
				new LabelLed({
					label: $('Scale not connected'),
					ledOnCmd: this._tag._alarms._notConnected._Active.Value,
					color: ERROR_LED
				}),
				new LabelLed({
					label: $('Error from scale'),
					ledOnCmd: this._tag._alarms._Error._Active.Value,
					color: ERROR_LED
				})
			]
		});
	}

	zeroCmd() {
		this.writer.writeTag(this._tag._Cmd._Manual._Zero, true);
	}
	tareCmd() {
		this.writer.writeTag(this._tag._Cmd._Manual._Tare, true);
	}
	weighCmd() {
		this.writer.writeTag(this._tag._Cmd._Manual._WeighObject, true);
	}
	resetTareCmd() {
		this.writer.writeTag(this._tag._Cmd._Manual._ResetTare, true);
	}
	resetCmd() {
		this.writer.writeTag(this._tag._Cmd._Reset, true);
	}

	bttnResetDiagnosticsClick() {
		this.writer.writeTag(this._tag._diagnostics._stableMeasurements, 0);
		this.writer.writeTag(this._tag._diagnostics._totalMeasurements, 0);
		this.writer.writeTag(this._tag._diagnostics._unstableMeasurements, 0);
	}

	ngOnDestroy() {
		super.ngOnDestroy();
	}
}
