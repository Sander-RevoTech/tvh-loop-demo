import { Actions, Effect, ofType, act } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';

import { sleep } from '@revotechiscool/revo-tech-core-lib';

import * as AppStore from '@hmi-app/app-store';
import * as StoreActions from './actions';
import { IPlcInterfaceState } from './plc-interface.reducer';
import { PlcInterfaceApiService } from '../services/plc-interface-api.sevice';
import { GetPlcDbToInit } from '@revotechiscool/revo-tech-automation-functions';

@Injectable()
export class PlcDbEffects {
	state$: Observable<IPlcInterfaceState> = new Observable<IPlcInterfaceState>();
	PlcDbStore: IPlcInterfaceState;

	constructor(
		private actions$: Actions,
		private store: Store<AppStore.AppState>,
		private plcDbApi: PlcInterfaceApiService
	) {
		this.state$ = this.store.select('plcInterface');
		this.state$.subscribe((state: IPlcInterfaceState) => {
			this.PlcDbStore = state;
		});
	}

	@Effect({ dispatch: false })
	plcDbInitEffect = this.actions$.pipe(
		ofType(
			StoreActions.GET_PLC_INTERFACE_VALUES_SUCCESS,
			StoreActions.GET_PLC_INTERFACE_VALUES_FAIL
		),
		map(async (action: StoreActions.GetPlcInterfaceValuesSucessAction) => {
			let actionKeyName = '';
			if (action.payload && action.payload.KeyName) {
				actionKeyName = action.payload.KeyName;
			}
			//await this.plcDbService.initDb(action.payload);
			if (this.PlcDbStore) {
				const res = GetPlcDbToInit(actionKeyName, this.PlcDbStore.PLCs);
				if (res !== null) {
					if (action.type === StoreActions.GET_PLC_INTERFACE_VALUES_SUCCESS) {
						await sleep(50);
					} else {
						await sleep(7500);
					}
					this.plcDbApi.GetPlcDbInitValues(res.plcId, res.dbName);
				}
				return;
			}
		})
	);
}
