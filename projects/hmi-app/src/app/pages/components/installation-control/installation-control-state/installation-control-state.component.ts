import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { marker as $ } from '@biesbjerg/ngx-translate-extract-marker';

import {
	ILabelLed,
	INFO_LED,
	ERROR_LED,
	WARNING_LED
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
import { IControllSettings } from '../installation-control-buttons/installation-control-buttons.component';

@Component({
	selector: 'app-installation-control-state',
	templateUrl: './installation-control-state.component.html',
	styleUrls: ['./installation-control-state.component.scss']
})
export class InstallationControlStateComponent extends ComponentIdBase
	implements OnInit, OnDestroy {
	//#region  LEDs

	ledAutoModeOn: ILabelLed = {
		label: $('Auto mode on'),
		ledOnCmd: false,
		color: INFO_LED
	};

	ledEmptyModeOn: ILabelLed = {
		label: $('Empty mode on'),
		ledOnCmd: false,
		color: INFO_LED
	};

	ledStandyModeOn: ILabelLed = {
		label: $('Standby mode on'),
		ledOnCmd: false,
		color: WARNING_LED
	};

	ledManualModeOn: ILabelLed = {
		label: $('Manual mode on'),
		ledOnCmd: false,
		color: INFO_LED
	};

	ledEmergencyOk: ILabelLed = {
		label: $('Emergency Ok'),
		ledOnCmd: true,
		color: INFO_LED
	};

	ledAlarmActive: ILabelLed = {
		label: $('Alarm active'),
		ledOnCmd: true,
		flash: true,
		color: ERROR_LED
	};

	//#endregion

	_state: ApplicationState_UDT;
	@Input() set state(value: ApplicationState_UDT) {
		if (value) {
			this._state = value;
			if (!this.tagsregisterd) {
				this.poller.addTag(this._state._States._AutoModeActivated._State, this);
				this.poller.addTag(
					this._state._States._ManualModeActivated._State,
					this
				);
				this.poller.addTag(this._state._States._Standby._State, this);
				this.poller.addTag(
					this._state._States._EmptyApplicatoinMode._State,
					this
				);
				this.poller.addTag(this._state._States._EmergencyOk._State, this);
				this.poller.addTag(this._state._Alarms._AlarmsActiveForHmi, this);

				this.tagsregisterd = true;
			}
			this.updateView();
		}
	}

	_settings: IControllSettings = {
		name: 'Control',
		showAuto: true,
		showEmpty: true,
		showManual: true,
		showReset: true,
		showStandby: true
	};
	@Input() set settings(value: IControllSettings) {
		if (value) {
			this._settings = value;
		}
	}

	constructor(
		private store: Store<AppStore.AppState>,
		private router: Router,
		private idService: ComponentIdService,
		private poller: PlcTagPollingService,
		private writer: PlcTagWriteService
	) {
		super(idService);
	}

	updateView() {
		this.ledAutoModeOn = {
			...this.ledAutoModeOn,
			ledOnCmd: this._state._States._AutoModeActivated._State.Value
		};
		this.ledStandyModeOn = {
			...this.ledStandyModeOn,
			ledOnCmd: this._state._States._Standby._State.Value
		};
		this.ledEmptyModeOn = {
			...this.ledEmptyModeOn,
			ledOnCmd: this._state._States._EmptyApplicatoinMode._State.Value
		};
		this.ledManualModeOn = {
			...this.ledManualModeOn,
			ledOnCmd: this._state._States._ManualModeActivated._State.Value
		};
		this.ledAlarmActive = {
			...this.ledAlarmActive,
			ledOnCmd: this._state._Alarms._AlarmsActiveForHmi.Value
		};
		this.ledEmergencyOk = {
			...this.ledEmergencyOk,
			color: this._state._States._EmergencyOk._State.Value
				? INFO_LED
				: ERROR_LED,
			flash: !this._state._States._EmergencyOk._State.Value
		};
	}

	ngOnInit() {}

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
	}
}
