import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { marker as $ } from '@biesbjerg/ngx-translate-extract-marker';

import * as AppStore from '@hmi-app/app-store';
import * as PlcDbStore from '../store';

import { PlcInterfaceApiService } from './plc-interface-api.sevice';
import {
	INavigationLink,
	PlcTagPollingService,
	PlcTagWriteService,
	SidenavService
} from '@revotechiscool/revo-tech-hmi-lib';
import { environment } from '@hmi-src/environments/environment';
import { EquipmentStatusService } from './EquipmentStatus.service';
import { PlcReadResultAction, UpdateLocalConnectionStatus } from '../store';
import { PlcDbService } from '../indexddb/plc-db.service';
import { HttpMethodeExecuterService } from '@revotechiscool/revo-tech-core-lib';
import { Subscription } from 'rxjs';
import { pages } from '@hmi-src/app/pages/route-names';
import { FooterService } from '@hmi-src/app/global';
import {
	colNameCarriers,
	colNameRolls,
	colNameLogs
} from '@data-collector/config/collections';
import { IPlcReadResult } from '@revotechiscool/revo-tech-automation-types';
import { GetPlcDbToInit } from '@revotechiscool/revo-tech-automation-functions';

@Injectable({
	providedIn: 'root'
})
export class StartupService {
	private store: PlcDbStore.IPlcInterfaceState;
	private initializingDbs = false;
	private dbsInitalized = false;
	private subscription: Subscription;

	private readResults: IPlcReadResult[] = [];

	constructor(
		private store$: Store<AppStore.AppState>,
		private poller: PlcTagPollingService,
		private writer: PlcTagWriteService,
		private sidenavService: SidenavService,
		private footerService: FooterService,
		private equipMentStatus: EquipmentStatusService,
		private plcDbAPI: PlcInterfaceApiService,
		private plcDbService: PlcDbService,
		private httpExecute: HttpMethodeExecuterService
	) {
		this.hmiRefresh();
		this.plcDbService.setupIndexdDb();
		this.subscription = this.store$
			.select('plcInterface')
			.subscribe(async (state: PlcDbStore.IPlcInterfaceState) => {
				this.store = state;
				if (!this.dbsInitalized && state.initialized) {
					this.setSideNavRoutes();
				}
				this.dbsInitalized = state.initialized;

				if (!state.initialized && !this.initializingDbs) {
					this.initializingDbs = true;
					await this.plcDbService.setupIndexdDb();
					const reloadRequired = await this.plcDbService.checkReloadRequired();
					if (reloadRequired) {
						this.startInitializingDbs(state);
					}
					this.startPlcTagInterfaces();
				}
			});
	}

	startPlcTagInterfaces() {
		this.poller.SocketUrl =
			environment.tagServer.Ip + ':' + environment.tagServer.Port;
		this.poller.start();
		this.poller.pollingInterval = 750;

		this.poller.socketResult.subscribe((data: string) => {
			this.store$.dispatch(new PlcReadResultAction(data));
		});

		this.poller.onConnectionChanged.subscribe((state: boolean) => {
			for (const key of Object.keys(
				this.store.connectionsStatus.clientConnections
			)) {
				const connection = this.store.connectionsStatus.clientConnections[key];
				if (
					JSON.stringify(connection) ===
					JSON.stringify(this.store.connectionsStatus.clientConnections.readhub)
				) {
					this.store$.dispatch(
						new UpdateLocalConnectionStatus({ key: key, value: state })
					);
				}
			}
		});

		this.writer.SocketUrl =
			environment.tagServer.Ip + ':' + environment.tagServer.Port;
		this.writer.start();

		this.writer.socketResult.subscribe((data: string) => {
			this.store$.dispatch(new PlcReadResultAction(data));
		});

		this.writer.onConnectionChanged.subscribe((state: boolean) => {
			for (const key of Object.keys(
				this.store.connectionsStatus.clientConnections
			)) {
				const connection = this.store.connectionsStatus.clientConnections[key];
				if (
					JSON.stringify(connection) ===
					JSON.stringify(
						this.store.connectionsStatus.clientConnections.writehub
					)
				) {
					this.store$.dispatch(
						new UpdateLocalConnectionStatus({ key: key, value: state })
					);
				}
			}
		});
	}

	startInitializingDbs(state: PlcDbStore.IPlcInterfaceState) {
		const db = GetPlcDbToInit('', state.PLCs);
		this.plcDbAPI.GetPlcDbInitValues(db.plcId, db.dbName);
	}

	setSideNavRoutes() {
		this.sidenavService.setDefaultLinks([
			{ route: 'home', title: $('HOME'), class: ['home'] },
			// { route: 'dashboard', title: $('DASHBOARD'), class: ['home'] },
			// { route: 'installation-control', title: $('CONTROL') },
			{ route: 'global-settings', title: $('SETTINGS') },
			{ route: 'servers-detail', title: $('SERVERS') },
			// { route: colNameRolls, title: $('ROLLS') },
			// { route: colNameCarriers, title: $('CARRIERS') },
			// { route: colNameLogs, title: $('LOGS') },
			{ route: 'maintenance', title: $('MAINTENANCE') }
		]);

		const zones: INavigationLink[] = [
			{
				title: pages.zone100.title,
				route: pages.zone100.name,
				queryParams: { scrollToElement: null }
			},
			{
				title: pages.zone200.title,
				route: pages.zone200.name,
				queryParams: { scrollToElement: null }
			},
			{
				title: pages.zone300.title,
				route: pages.zone300.name,
				queryParams: { scrollToElement: null }
			},
			{
				title: pages.zone400.title,
				route: pages.zone400.name,
				queryParams: { scrollToElement: null }
			},
			{
				title: pages.zone500.title,
				route: pages.zone500.name,
				queryParams: { scrollToElement: null }
			},

		];

		this.footerService.setLinks(zones);

		this.sidenavService.setZoneLinks(zones);

		console.log('side nav routes sent');
	}

	hmiRefresh() {
		setInterval(() => {
			let date = new Date();

			if (date.getHours() == 1 && date.getMinutes() == 0 && date.getSeconds() > 0 && date.getSeconds() <= 1)
				location.reload();

			if (date.getHours() == 22 && date.getMinutes() == 0 && date.getSeconds() > 0 && date.getSeconds() <= 1)
				location.reload();

			if (date.getHours() == 5 && date.getMinutes() == 0 && date.getSeconds() > 0 && date.getSeconds() <= 1)
				location.reload();

		}, 250);
	}

}
