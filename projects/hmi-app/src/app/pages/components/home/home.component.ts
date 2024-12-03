import { Component, OnInit, OnDestroy } from '@angular/core';

import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { marker as $ } from '@biesbjerg/ngx-translate-extract-marker';

import {
	ComponentIdBase,
	ComponentIdService,
	PlcTagPollingService,
	SidenavService,
	PlcTagWriteService
} from '@revotechiscool/revo-tech-hmi-lib';

import * as AppStore from '@hmi-app/app-store';
import { FooterService } from '@hmi-app/global';

import { IPlcInterfaceState } from '@hmi-app/hmi';
import { IZoneSettings } from '../../../shared';
import { pages } from '../../route-names';
import { ApplicationState_UDT, System_Counters_UDT } from 'plc/PLC_Main';
import { IControllSettings } from '../installation-control';
import { BoolPlcTag } from '@revotechiscool/revo-tech-automation-types';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent extends ComponentIdBase
	implements OnInit, OnDestroy {

	controlState: ApplicationState_UDT;
	controlSettings: IControllSettings = {
		name: $('CONVEYOR CONTROL'),
		showAuto: true,
		showEmpty: false,
		showManual: true,
		showReset: true,
		showStandby: false
	};

	zone1: IZoneSettings = {
		label: $('ZONE 1'),
		routeScroll: { scrollToElement: 'zone_1' },
		route: pages.zone100.name
	};

	zone2: IZoneSettings = {
		label: $('ZONE 2'),
		routeScroll: { scrollToElement: 'zone_2' },
		route: pages.zone200.name
	};

	zone3: IZoneSettings = {
		label: $('ZONE 3'),
		routeScroll: { scrollToElement: 'zone_3' },
		route: pages.zone200.name
	};

	zone4: IZoneSettings = {
		label: $('ZONE 4'),
		routeScroll: { scrollToElement: 'zone_4' },
		route: pages.zone200.name
	};

	zone5: IZoneSettings = {
		label: $('ZONE 5'),
		routeScroll: { scrollToElement: 'zone_5' },
		route: pages.zone200.name
	};

	constructor(
		private store: Store<AppStore.AppState>,
		private pollService: PlcTagPollingService,
		private router: Router,
		private footer: FooterService,
		private sidenav: SidenavService,
		private writeService: PlcTagWriteService,
		private idGenerator: ComponentIdService
	) {
		super(idGenerator);

		this.store.select('plcInterface').subscribe((state: IPlcInterfaceState) => {

			this.controlState = {
				...state.PLCs.plcMain.Dbs.ApplicationState_DB_DB13._Appstate[
				'__Appstate_1'
				]
			};

			this.zone1 = {
				...this.zone1,
				appState:
					state.PLCs.plcMain.Dbs.ApplicationState_DB_DB13._Appstate[
					'__Appstate_11'
					]
			};

			this.zone2 = {
				...this.zone2,
				appState:
					state.PLCs.plcMain.Dbs.ApplicationState_DB_DB13._Appstate[
					'__Appstate_12'
					]
			};

			this.zone3 = {
				...this.zone3,
				appState:
					state.PLCs.plcMain.Dbs.ApplicationState_DB_DB13._Appstate[
					'__Appstate_13'
					]
			};

			this.zone4 = {
				...this.zone4,
				appState:
					state.PLCs.plcMain.Dbs.ApplicationState_DB_DB13._Appstate[
					'__Appstate_14'
					]
			};

			this.zone5 = {
				...this.zone5,
				appState:
					state.PLCs.plcMain.Dbs.ApplicationState_DB_DB13._Appstate[
					'__Appstate_15'
					]
			};

		});

		if (!this.tagsregisterd) {
			this.tagsregisterd = true;
		}
	}

	ngOnInit() { }

	ngOnDestroy() {

	}
}
