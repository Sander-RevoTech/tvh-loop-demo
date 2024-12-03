import {
	Component,
	OnInit,
	OnDestroy,
	Input,
	ChangeDetectorRef
} from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

import { marker as $ } from '@biesbjerg/ngx-translate-extract-marker';

import {
	IButton,
	SuccesButton,
	ButtonStates,
	errorButton,
	resetButton,
	objectChanged
} from '@revotechiscool/revo-tech-core-lib';
import {
	ComponentIdService,
	PlcTagPollingService,
	PlcTagWriteService,
	ComponentIdBase
} from '@revotechiscool/revo-tech-hmi-lib';

import * as AppStore from '@hmi-app/app-store';
import * as HmiStore from '@hmi-app/hmi';

import { ApplicationState_UDT } from 'plc/PLC_MAIN';
import { cloneDeep } from 'lodash';

export interface IControllSettings {
	showAuto?: boolean;
	showEmpty?: boolean;
	showManual?: boolean;
	showReset?: boolean;
	showStandby?: boolean;
	name: string;
}

@Component({
	selector: 'app-installation-control-buttons',
	templateUrl: './installation-control-buttons.component.html',
	styleUrls: ['./installation-control-buttons.component.scss']
})
export class InstallationControlButtonsComponent extends ComponentIdBase
	implements OnInit, OnDestroy {
	//#region Buttons
	startAutoBttn: IButton = {
		value: $('START AUTO MODE'),
		color: SuccesButton,
		onActionMouseDown: this.startAutoMode.bind(this),
		state: ButtonStates.start,
		icon: 'play_arrow'
	};

	stopAutoBttn: IButton = {
		value: $('STOP AUTO MODE'),
		color: errorButton,
		onActionMouseDown: this.stopAutoMode.bind(this),
		state: ButtonStates.stop,
		icon: 'stop'
	};

	startManualBttn: IButton = {
		value: $('START MANUAL MODE'),
		color: SuccesButton,
		onActionMouseDown: this.startManualMode.bind(this),
		state: ButtonStates.start,
		icon: 'play_arrow'
	};

	stopManualBttn: IButton = {
		value: $('STOP MANUAL MODE'),
		color: errorButton,
		onActionMouseDown: this.stopManualMode.bind(this),
		state: ButtonStates.stop,
		icon: 'stop'
	};

	standbyBttn: IButton = {
		value: $('ACTIVATE STANDBY'),
		color: errorButton,
		onActionMouseDown: this.standbyMode.bind(this),
		state: ButtonStates.warning,
		icon: 'power_settings_new'
	};

	startEmptyModeBttn: IButton = {
		value: $('START EMPTY MODE'),
		color: SuccesButton,
		onActionMouseDown: this.startEmptyMode.bind(this),
		state: ButtonStates.start,
		icon: 'play_arrow'
	};

	stopEmptyModeBttn: IButton = {
		value: $('STOP EMPTY MODE'),
		color: errorButton,
		onActionMouseDown: this.stopEmptyMode.bind(this),
		state: ButtonStates.stop,
		icon: 'stop'
	};

	resetBttn: IButton = {
		value: $('RESET'),
		color: resetButton,
		onActionMouseDown: this.reset.bind(this),
		state: ButtonStates.reset,
		icon: 'sync'
	};

	//#endregion

	_settings: IControllSettings = {
		showAuto: true,
		showEmpty: true,
		showManual: true,
		showReset: true,
		showStandby: true,
		name: 'Control'
	};
	@Input() set settings(value: IControllSettings) {
		if (value) {
			this._settings = value;
		}
	}

	_state: ApplicationState_UDT;
	@Input() set state(value: ApplicationState_UDT) {
		if (objectChanged(this._state, value) && value) {
			this._state = cloneDeep(value);
		}
		if (!this.tagsregisterd) {
			this.poller.addTag(this._state._States._AutoModeActivated._State, this);
			this.poller.addTag(this._state._States._ManualModeActivated._State, this);
			this.poller.addTag(this._state._States._Standby._State, this);
			this.poller.addTag(
				this._state._States._EmptyApplicatoinMode._State,
				this
			);
			this.poller.addTag(this._state._States._EmergencyOk._State, this);
			this.poller.addTag(this._state._Alarms._AlarmsActiveForHmi, this);

			this.poller.addTag(
				this._state._Hmi_Buttons._ActivateManualMode._SignalFromHMI,
				this
			);
			this.poller.addTag(
				this._state._Hmi_Buttons._ActivateStandby._SignalFromHMI,
				this
			);
			this.poller.addTag(
				this._state._Hmi_Buttons._DeactivateManualMode._SignalFromHMI,
				this
			);
			this.poller.addTag(
				this._state._Hmi_Buttons._StartAutoMode._SignalFromHMI,
				this
			);
			this.poller.addTag(
				this._state._Hmi_Buttons._StartEmptyMode._SignalFromHMI,
				this
			);
			this.poller.addTag(
				this._state._Hmi_Buttons._StopAutoMode._SignalFromHMI,
				this
			);
			this.poller.addTag(
				this._state._Hmi_Buttons._StopEmptyMode._SignalFromHMI,
				this
			);
			this.poller.addTag(this._state._Hmi_Buttons._reset._SignalFromHMI, this);

			this.tagsregisterd = true;
		}

		this.updateButtons();
		this.crf.detectChanges();
	}

	constructor(
		private store: Store<AppStore.AppState>,
		private router: Router,
		private idService: ComponentIdService,
		private poller: PlcTagPollingService,
		private writer: PlcTagWriteService,
		private crf: ChangeDetectorRef
	) {
		super(idService);
	}

	ngOnInit() {}

	//#region  enable buttons

	updateButtons() {
		this.enableStartAuto();
		this.enableStopAuto();
		this.enableStartManual();
		this.enableStopManual();
		this.enableStartEmptyMode();
		this.enableStopEmptyMode();
		this.enableStandbyMode();
	}

	enableStartAuto() {
		this.startAutoBttn.disabled =
			(this._state._States._AutoModeActivated._State.Value &&
				!this._state._States._Standby._State.Value) ||
			this._state._States._ManualModeActivated._State.Value ||
			!this._state._States._EmergencyOk._State.Value;
		this.startAutoBttn = { ...this.startAutoBttn };
	}

	enableStopAuto() {
		this.stopAutoBttn.disabled =
			!this._state._States._AutoModeActivated._State.Value ||
			!this._state._States._EmergencyOk._State.Value;
		this.stopAutoBttn = { ...this.stopAutoBttn };
	}

	enableStartManual() {
		this.startManualBttn.disabled =
			this._state._States._AutoModeActivated._State.Value ||
			this._state._States._ManualModeActivated._State.Value ||
			!this._state._States._EmergencyOk._State.Value;
		this.startManualBttn = { ...this.startManualBttn };
	}

	enableStopManual() {
		this.stopManualBttn.disabled =
			!this._state._States._ManualModeActivated._State.Value ||
			!this._state._States._EmergencyOk._State.Value;
		this.stopManualBttn = { ...this.stopManualBttn };
	}

	enableStartEmptyMode() {
		this.startEmptyModeBttn.disabled =
			!this._state._States._AutoModeActivated._State.Value ||
			this._state._States._EmptyApplicatoinMode._State.Value;
		this.startEmptyModeBttn = { ...this.startEmptyModeBttn };
	}

	enableStopEmptyMode() {
		this.stopEmptyModeBttn.disabled =
			!this._state._States._AutoModeActivated._State.Value ||
			!this._state._States._EmptyApplicatoinMode._State.Value;
		this.stopEmptyModeBttn = { ...this.stopEmptyModeBttn };
	}

	enableStandbyMode() {
		this.standbyBttn.disabled =
			!this._state._States._AutoModeActivated._State.Value ||
			this._state._States._Standby._State.Value;
		this.standbyBttn = { ...this.standbyBttn };
	}

	//#endregion

	//#region  Click events

	startAutoMode() {
		this.writer.writeTag(
			this._state._Hmi_Buttons._StartAutoMode._SignalFromHMI,
			true
		);
	}

	stopAutoMode() {
		this.writer.writeTag(
			this._state._Hmi_Buttons._StopAutoMode._SignalFromHMI,
			true
		);
	}

	startManualMode() {
		this.writer.writeTag(
			this._state._Hmi_Buttons._ActivateManualMode._SignalFromHMI,
			true
		);
	}

	stopManualMode() {
		this.writer.writeTag(
			this._state._Hmi_Buttons._DeactivateManualMode._SignalFromHMI,
			true
		);
	}

	standbyMode() {
		this.writer.writeTag(
			this._state._Hmi_Buttons._ActivateStandby._SignalFromHMI,
			true
		);
	}

	startEmptyMode() {
		this.writer.writeTag(
			this._state._Hmi_Buttons._StartEmptyMode._SignalFromHMI,
			true
		);
	}

	stopEmptyMode() {
		this.writer.writeTag(
			this._state._Hmi_Buttons._StopEmptyMode._SignalFromHMI,
			true
		);
	}

	reset() {
		this.writer.writeTag(this._state._Hmi_Buttons._reset._SignalFromHMI, true);
	}
	//#endregion

	ngOnDestroy() {
		this.poller.removeTag(this._state._States._AutoModeActivated._State, this);
		this.poller.removeTag(
			this._state._States._ManualModeActivated._State,
			this
		);
		this.poller.removeTag(this._state._States._Standby._State, this);
		this.poller.removeTag(
			this._state._States._EmptyApplicatoinMode._State,
			this
		);
		this.poller.removeTag(this._state._States._EmergencyOk._State, this);
		this.poller.removeTag(this._state._Alarms._AlarmsActiveForHmi, this);
		this.poller.removeTag(
			this._state._Hmi_Buttons._ActivateManualMode._SignalFromHMI,
			this
		);
		this.poller.removeTag(
			this._state._Hmi_Buttons._ActivateStandby._SignalFromHMI,
			this
		);
		this.poller.removeTag(
			this._state._Hmi_Buttons._DeactivateManualMode._SignalFromHMI,
			this
		);
		this.poller.removeTag(
			this._state._Hmi_Buttons._StartAutoMode._SignalFromHMI,
			this
		);
		this.poller.removeTag(
			this._state._Hmi_Buttons._StartEmptyMode._SignalFromHMI,
			this
		);
		this.poller.removeTag(
			this._state._Hmi_Buttons._StopAutoMode._SignalFromHMI,
			this
		);
		this.poller.removeTag(
			this._state._Hmi_Buttons._StopEmptyMode._SignalFromHMI,
			this
		);
		this.poller.removeTag(this._state._Hmi_Buttons._reset._SignalFromHMI, this);
	}
}
