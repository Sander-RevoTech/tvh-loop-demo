import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@hmi-src/app/store';
import { IPlcInterfaceState } from '@hmi-src/app/hmi';
import { Subscription } from 'rxjs';
import { marker as $ } from '@biesbjerg/ngx-translate-extract-marker';

import { ApplicationState_UDT } from 'plc/PLC_MAIN';
import { IControllSettings } from './installation-control-buttons/installation-control-buttons.component';

@Component({
	selector: 'app-installation-control',
	templateUrl: './installation-control.component.html',
	styleUrls: ['./installation-control.component.scss']
})
export class InstallationControlComponent implements OnInit, OnDestroy {
	zone0State: ApplicationState_UDT;

	zone0Settings: IControllSettings = {
		name: $('GLOBAL ZONE CONTROL'),
		showAuto: true,
		showEmpty: false,
		showManual: true,
		showReset: true,
		showStandby: true
	};

	zoneStates: ApplicationState_UDT[] = [];
	zoneSettings: IControllSettings[] = [];

	subscription: Subscription;
	constructor(private store: Store<AppState>) {
		this.subscription = this.store
			.select('plcInterface')
			.subscribe((state: IPlcInterfaceState) => {});
	}

	ngOnInit() {}

	ngOnDestroy() {
		this.subscription.unsubscribe();
	}
}
