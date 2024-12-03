import {
	Component,
	OnInit,
	Input,
	ChangeDetectorRef,
	OnDestroy,
	AfterViewInit,
	ChangeDetectionStrategy
} from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import * as AppStore from '@hmi-app/app-store';

import { ApplicationState_UDT } from 'plc/PLC_MAIN';
import {
	ComponentIdBase,
	ComponentIdService,
	PlcTagPollingService,
	PlcTagWriteService
} from '@revotechiscool/revo-tech-hmi-lib';
import { IScrollRoute } from '@revotechiscool/revo-tech-core-lib';

export interface IZoneSettings {
	label: string;
	route: string;
	appState?: ApplicationState_UDT;
	routeScroll?: IScrollRoute;
}

@Component({
	selector: 'app-simple-zone',
	templateUrl: './simple-zone.component.html',
	styleUrls: ['./simple-zone.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class SimpleZoneComponent extends ComponentIdBase
	implements OnInit, AfterViewInit, OnDestroy {
	polling = false;
	_settings: IZoneSettings;
	@Input('settings') set settings(value: IZoneSettings) {
		this._settings = value;

		if (this._settings) {
			this.updateState();
			if (!this.polling) {
				this.polling = true;
				this.poller.addTag(
					this._settings.appState._States._AutoModeActivated._State,
					this
				);
				this.poller.addTag(
					this._settings.appState._States._ManualModeActivated._State,
					this
				);
				this.poller.addTag(
					this._settings.appState._States._Standby._State,
					this
				);
				this.poller.addTag(
					this._settings.appState._States._EmptyApplicatoinMode._State,
					this
				);
				this.poller.addTag(
					this._settings.appState._Alarms._AlarmsActiveForHmi,
					this
				);
			}
		}
		this.crf.detectChanges();
	}

	state = {
		success: false,
		warning: false,
		error: false
	};
	statusText = '';
	infoText = '';

	private subScription: Subscription;
	constructor(
		protected router: Router,
		private crf: ChangeDetectorRef,
		protected idService: ComponentIdService,
		protected poller: PlcTagPollingService,
		protected writer: PlcTagWriteService,
		protected store: Store<AppStore.AppState>
	) {
		super(idService);
	}

	ngOnInit() {}

	ngAfterViewInit(): void {}

	updateState() {
		if (this._settings) {
			this.state.success = this._settings.appState._States._AutoModeActivated
				._State.Value as boolean;
			this.state.warning =
				(this._settings.appState._States._Standby._State.Value as boolean) ||
				(this._settings.appState._States._ManualModeActivated._State
					.Value as boolean);
			this.state.error = this._settings.appState._Alarms._AlarmsActiveForHmi
				.Value as boolean;
		}
		this.getStatusText();
		this.getInfoText();
	}

	getStatusText() {
		if (this._settings) {
			this.statusText = 'IDLE';
			if (this._settings.appState._Alarms._AlarmsActiveForHmi.Value) {
				this.statusText = 'ALARM';
			}
			if (this._settings.appState._States._ManualModeActivated._State.Value) {
				this.statusText = 'MANUAL';
			}
			if (this._settings.appState._States._Standby._State.Value) {
				this.statusText = 'STANDBY';
			}
			if (this._settings.appState._States._AutoModeActivated._State.Value) {
				this.statusText = 'AUTO';
			}
		}
	}

	onClick() {
		if (this._settings) {
			this.router.navigate([this._settings.route], {
				queryParams: this._settings.routeScroll
			});
		}
	}

	getInfoText() {
		this.infoText = '';
		if (this._settings.appState._States._EmptyApplicatoinMode._State.Value) {
			this.infoText = 'EMPTY';
		}
	}

	ngOnDestroy() {
		this.poller.removeTag(
			this._settings.appState._States._AutoModeActivated._State,
			this
		);
		this.poller.removeTag(
			this._settings.appState._States._ManualModeActivated._State,
			this
		);
		this.poller.removeTag(
			this._settings.appState._States._Standby._State,
			this
		);
		this.poller.removeTag(
			this._settings.appState._States._EmptyApplicatoinMode._State,
			this
		);
		this.poller.removeTag(
			this._settings.appState._Alarms._AlarmsActiveForHmi,
			this
		);
	}
}
