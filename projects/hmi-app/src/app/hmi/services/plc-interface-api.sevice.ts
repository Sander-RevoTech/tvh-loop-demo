import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import {
	IHttpActionPayload,
	httpMethode,
	HttpAction
} from '@revotechiscool/revo-tech-core-lib';
import { environment } from '@hmi-src/environments/environment';

import * as AppStore from '@hmi-app/app-store';
import * as Actions from '../store/actions';

@Injectable({
	providedIn: 'root'
})
export class PlcInterfaceApiService {
	constructor(private store: Store<AppStore.AppState>) {}

	GetPlcDbInitValues(plcId: number, keyName: string) {
		const httpActionSettings: IHttpActionPayload = {
			body: {},
			httpMethode: httpMethode.GET,
			url:
				environment.tagServer.Ip +
				':' +
				environment.tagServer.Port +
				'/api/PlcDb',
			queryParameters: '/' + plcId + '/' + keyName,
			actionSuccess: Actions.GET_PLC_INTERFACE_VALUES_SUCCESS,
			actionError: Actions.GET_PLC_INTERFACE_VALUES_FAIL,
			asyncOperationsState: [
				{ name: 'fetchingPlcInterfaceValues', active: true }
			]
		};
		this.store.dispatch(new HttpAction(httpActionSettings));
	}
}
