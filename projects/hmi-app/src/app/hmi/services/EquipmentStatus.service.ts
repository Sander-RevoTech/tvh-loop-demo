import { Injectable } from '@angular/core';
import { PlcInterfaceApiService } from './plc-interface-api.sevice';
import { Store } from '@ngrx/store';

import {
	HttpMethodeExecuterService,
	IHttpActionPayload,
	httpMethode,
	sleep
} from '@revotechiscool/revo-tech-core-lib';

import * as AppStore from '@hmi-app/app-store';
import * as Actions from '../store/actions';

import { environment } from '@hmi-src/environments/environment';
import { IPlcInterfaceState } from '../store/plc-interface.reducer';

@Injectable({
	providedIn: 'root'
})
export class EquipmentStatusService {
	private EquipMentRequest: IHttpActionPayload = {
		body: {},
		httpMethode: httpMethode.GET,
		url:
			environment.dataCollector.Ip +
			':' +
			environment.dataCollector.Port +
			'/state/status',
		queryParameters: '',
		actionSuccess: Actions.GET_EQUIPMENT_STATUS_SUCCES,
		actionError: Actions.GET_EQUIPMENT_STATUS_FAIL,
		asyncOperationsState: [{ name: 'fetchingPlcInfo', active: true }]
	};

	private PlcInfoRequest: IHttpActionPayload = {
		body: {},
		httpMethode: httpMethode.GET,
		url:
			environment.tagServer.Ip +
			':' +
			environment.tagServer.Port +
			'/api/PlcInfo',
		queryParameters: '',
		actionSuccess: Actions.GET_PLC_INFO_SUCCESS,
		actionError: Actions.GET_PLC_INFO_FAIL,
		asyncOperationsState: [{ name: 'fetchingPlcInfo', active: true }]
	};

	PlcAlarmsRequest: IHttpActionPayload = {
		body: {},
		httpMethode: httpMethode.GET,
		url:
			environment.dataCollector.Ip +
			':' +
			environment.dataCollector.Port +
			'/alarms/active',
		queryParameters: '',
		actionSuccess: Actions.GET_ACTIVE_ALARMS_SUCCES,
		actionError: Actions.GET_ACTIVE_ALARMS_FAIL,
		asyncOperationsState: [{ name: 'fetchingAlarms', active: true }]
	};

	fetchingInfo = false;

	constructor(
		private store: Store<AppStore.AppState>,
		private httpmethode: HttpMethodeExecuterService,
		private PlcApi: PlcInterfaceApiService
	) {
		const sub = this.store
			.select('plcInterface')
			.subscribe((state: IPlcInterfaceState) => {
				if (state.initialized) {
					this.fetchEquipmentStatus();
					this.fetchPlcInfo();
					this.fetchPlcAlarms();
					sub.unsubscribe();
				}
			});
	}

	async fetchEquipmentStatus() {
		const result = await this.httpmethode.executeHttpMethode(
			this.EquipMentRequest
		);
		if (result.type === Actions.GET_EQUIPMENT_STATUS_SUCCES) {
			this.store.dispatch(
				new Actions.GetEquipmentStatusSuccesAction(result.payload)
			);
		} else {
			this.store.dispatch(new Actions.GetEuipmentStatusFailAction());
			await sleep(10000);
		}
		setTimeout(() => {
			this.fetchEquipmentStatus();
		}, 10000);
	}

	async fetchPlcInfo() {
		const result = await this.httpmethode.executeHttpMethode(
			this.PlcInfoRequest
		);
		if (result.type === Actions.GET_PLC_INFO_SUCCESS) {
			this.store.dispatch(new Actions.GetPlcInfoSuccesAction(result.payload));
		} else {
			this.store.dispatch(new Actions.GetPlcInfoFailAction());
			await sleep(10000);
		}
		setTimeout(async () => {
			await this.fetchPlcInfo();
		}, 10000);
	}

	async fetchPlcAlarms() {
		const result = await this.httpmethode.executeHttpMethode(
			this.PlcAlarmsRequest
		);
		if (result.type === Actions.GET_ACTIVE_ALARMS_SUCCES) {
			this.store.dispatch(new Actions.GetActiveAlarmsSucces(result.payload));
		} else {
			this.store.dispatch(new Actions.GetActiveAlarmsFail());
			await sleep(10000);
		}
		setTimeout(async () => {
			await this.fetchPlcAlarms();
		}, 2500);
	}
}
