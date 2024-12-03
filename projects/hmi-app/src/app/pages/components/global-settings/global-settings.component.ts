import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import {
	ComponentIdService,
	PlcTagPollingService,
	PlcTagWriteService,
	ComponentIdBase
} from '@revotechiscool/revo-tech-hmi-lib';

import * as AppStore from '@hmi-app/app-store';
import * as HmiStore from '@hmi-app/hmi';
import {
	Button,
	ButtonsSize,
	ButtonStates
} from '@revotechiscool/revo-tech-core-lib';

import { RealPlcTag } from 'plc/PLC_Main';
import { BoolPlcTag } from '@revotechiscool/revo-tech-automation-types';

@Component({
	selector: 'app-global-settings',
	templateUrl: './global-settings.component.html',
	styleUrls: ['./global-settings.component.scss']
})
export class GlobalSettingsComponent extends ComponentIdBase
	implements OnInit, OnDestroy {
	//#region  Buttons

	//#endregion

	private subscription: Subscription;
	constructor(
		private store: Store<AppStore.AppState>,
		private router: Router,
		private idService: ComponentIdService,
		private poller: PlcTagPollingService,
		private writer: PlcTagWriteService
	) {
		super(idService);
		this.subscription = this.store
			.select('plcInterface')
			.subscribe((state: HmiStore.IPlcInterfaceState) => {
				this.register();
				this.updateSliders();
			});
	}

	ngOnInit() {}

	register() {
		if (!this.tagsregisterd) {
			this.tagsregisterd = true;
		}
	}

	updateSliders() {}

	onAsDeaxChange() {}

	ngOnDestroy() {
		this.subscription.unsubscribe();
	}
}
