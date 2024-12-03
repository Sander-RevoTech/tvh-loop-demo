import { Action } from '@ngrx/store';

import {
	IPlcDb,
	IApiGetAlarms
} from '@revotechiscool/revo-tech-automation-types';
import { IPlcCollection } from 'plc/plc-collection';

//#region plc DB INIT

export const GET_PLC_INTERFACE_VALUES_SUCCESS =
	'GET_PLC_INTERFACE_VALUES_SUCCESS';
export const GET_PLC_INTERFACE_VALUES_FAIL = 'GET_PLC_INTERFACE_VALUES_FAIL';

export class GetPlcInterfaceValuesSucessAction implements Action {
	readonly type = GET_PLC_INTERFACE_VALUES_SUCCESS;
	constructor(public payload: IPlcDb) {}
}

export class GetPlcInterfaceValuesFailAction implements Action {
	readonly type = GET_PLC_INTERFACE_VALUES_FAIL;
}

export const SET_PLC_COLLECTION_FROM_INDEXDDB =
	'SET_PLC_COLLECTION_FROM_INDEXDDB';
export class SetPLCCollectionFromIndexDB implements Action {
	readonly type = SET_PLC_COLLECTION_FROM_INDEXDDB;
	constructor(public payload: IPlcCollection) {}
}

//#endregion

//#region plc read result

export const PLC_READ_RESULT = 'PLC_READ_RESULT';

export class PlcReadResultAction implements Action {
	readonly type = PLC_READ_RESULT;
	constructor(public payload: any) {}
}

//#endregion

//#region plc Info

export const GET_ACTIVE_ALARMS_SUCCES = 'GET_ACTIVE_ALARMS_SUCCES';
export const GET_ACTIVE_ALARMS_FAIL = 'GET_ACTIVE_ALARMS_FAIL';

export class GetActiveAlarmsSucces implements Action {
	readonly type = GET_ACTIVE_ALARMS_SUCCES;
	constructor(public payload: IApiGetAlarms[]) {}
}

export class GetActiveAlarmsFail implements Action {
	readonly type = GET_ACTIVE_ALARMS_FAIL;
}

export function GetAlamrsFail(alarmsStatus: IApiGetAlarms[]) {
	for (const system of alarmsStatus) {
		system.connectionStatus.Connected = false;
		system.connectionStatus.DisconnectedTime = new Date();
	}
	return alarmsStatus;
}

//#endregion

export type PlcInterfaceActions =
	| GetPlcInterfaceValuesSucessAction
	| SetPLCCollectionFromIndexDB
	| GetPlcInterfaceValuesFailAction
	| PlcReadResultAction
	| GetActiveAlarmsSucces
	| GetActiveAlarmsFail;
