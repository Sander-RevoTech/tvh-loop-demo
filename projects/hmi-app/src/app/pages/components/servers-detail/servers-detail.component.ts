import {
	Component,
	OnInit,
	OnDestroy,
	ChangeDetectorRef,
	ChangeDetectionStrategy
} from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import * as AppStore from '@hmi-app/app-store';
import * as HmiStore from '@hmi-app/hmi';

import {
	IPlc,
	IConnectionStatusPLC,
	IConnectionStatus
} from '@revotechiscool/revo-tech-automation-types';

import { ConnectionStatus } from '@revotechiscool/revo-tech-automation-functions';

@Component({
	selector: 'app-servers-detail',
	templateUrl: './servers-detail.component.html',
	styleUrls: ['./servers-detail.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ServersDetailComponent implements OnInit, OnDestroy {
	dataCollectorConnections: IConnectionStatusPLC[] | IConnectionStatus[] = [];
	clientConnections: IConnectionStatusPLC[] | IConnectionStatus[] = [];
	plcConnections: IConnectionStatusPLC[] = [];

	subscription: Subscription;
	constructor(
		private crf: ChangeDetectorRef,
		private store: Store<AppStore.AppState>
	) {
		this.subscription = this.store
			.select('plcInterface')
			.subscribe((state: HmiStore.IPlcInterfaceState) => {
				this.dataCollectorConnections = [];
				for (const connection of state.connectionsStatus
					.dataCollectorConnections) {
					this.dataCollectorConnections.push({ ...connection });
				}

				this.clientConnections = [];
				for (const key of Object.keys(
					state.connectionsStatus.clientConnections
				)) {
					const connection = state.connectionsStatus.clientConnections[
						key
					] as ConnectionStatus;
					this.clientConnections.push(connection.Status);
				}

				this.plcConnections = [];
				for (const plcKey of Object.keys(state.PLCs)) {
					const plc = state.PLCs[plcKey] as IPlc;
					this.plcConnections.push({
						Connected: plc.connected,
						Ip: plc.IP,
						Name: plc.NAME
					});
				}
				this.crf.markForCheck();
			});
	}

	ngOnInit() {}

	ngOnDestroy() {
		this.subscription.unsubscribe();
	}
}
