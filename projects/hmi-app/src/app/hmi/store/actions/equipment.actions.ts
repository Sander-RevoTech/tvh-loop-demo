import { Action } from '@ngrx/store';

import { IPlcCollection } from 'plc/plc-collection';
import {
	IPlc,
	IConnections,
	IConnectionStatusPLC
} from '@revotechiscool/revo-tech-automation-types';
import { IConnectionsStatusses } from '../plc-interface.reducer';
import { ConnectionStatus } from '@revotechiscool/revo-tech-automation-functions';

//#region  PLC

export const GET_PLC_INFO_SUCCESS = 'GET_PLC_INFO_SUCCESS';
export const GET_PLC_INFO_FAIL = 'GET_PLC_INFO_FAIL';

export class GetPlcInfoSuccesAction implements Action {
	readonly type = GET_PLC_INFO_SUCCESS;
	constructor(public payload: IConnectionStatusPLC[]) {}
}

export class GetPlcInfoFailAction implements Action {
	readonly type = GET_PLC_INFO_FAIL;
}

export function updateTagServerConnectionsSuccess(
	plcs: IPlcCollection,
	currentStatus: IConnectionsStatusses,
	updatedStaus: IConnectionStatusPLC[]
) {
	for (const plcStatus of updatedStaus) {
		for (const key of Object.keys(plcs)) {
			const plc = plcs[key] as IPlc;
			const newStatus = plcStatus as IConnectionStatusPLC;
			if (plc.NAME === newStatus.Name) {
				plc.connected = plcStatus.Connected;
			}
		}
	}
	currentStatus.clientConnections.tagserver.Connected = true;

	return checkAllConnectionsOnline(plcs, currentStatus);
}

export function updateTagServerConnectionsFail(
	plcs: IPlcCollection,
	currentStatus: IConnectionsStatusses
) {
	for (const key of Object.keys(plcs)) {
		const plc = plcs[key] as IPlc;
		plc.connected = false;
	}

	currentStatus.allOnline = false;
	currentStatus.clientConnections.tagserver.Connected = false;

	return { plcs: plcs, connections: currentStatus };
}

//#endregion

//#region  DATA COLLECTOR

export const GET_EQUIPMENT_STATUS_SUCCES = 'GET_EQUIPMENT_STATUS_SUCCES';
export const GET_EQUIPMENT_STATUS_FAIL = 'GET_EQUIPMENT_STATUS_FAIL';

export class GetEquipmentStatusSuccesAction implements Action {
	readonly type = GET_EQUIPMENT_STATUS_SUCCES;
	constructor(public payload: IConnections) {}
}

export class GetEuipmentStatusFailAction implements Action {
	readonly type = GET_EQUIPMENT_STATUS_FAIL;
}

export function updateDataCollectorConnectionsSucces(
	plcs: IPlcCollection,
	currentStatus: IConnectionsStatusses,
	updatedStaus: IConnections
) {
	currentStatus.dataCollectorConnections = [];
	currentStatus.dataCollectorConnections = currentStatus.dataCollectorConnections.concat(
		updatedStaus.tcpIp
	);
	currentStatus.dataCollectorConnections = currentStatus.dataCollectorConnections.concat(
		updatedStaus.s7
	);
	currentStatus.clientConnections.dataCollector.Connected = true;

	return checkAllConnectionsOnline(plcs, currentStatus);
}

export function updateDataCollectorConnectionsFail(
	connections: IConnectionsStatusses
) {
	for (const connection of connections.dataCollectorConnections) {
		connection.Connected = false;
		connection.DisconnectedTime = new Date();
	}

	connections.clientConnections.dataCollector.Connected = false;

	connections.allOnline = false;

	return connections;
}

export function checkAllConnectionsOnline(
	plcs: IPlcCollection,
	connectionsStatus: IConnectionsStatusses
) {
	connectionsStatus.allOnline = true;

	for (const plcKey of Object.keys(plcs)) {
		const plc = plcs[plcKey] as IPlc;
		if (!plc.connected) {
			connectionsStatus.allOnline = false;
		}
	}

	for (const key of Object.keys(connectionsStatus.clientConnections)) {
		const status = connectionsStatus.clientConnections[key] as ConnectionStatus;
		if (!status.Connected) {
			connectionsStatus.allOnline = false;
		}
	}

	for (const status of connectionsStatus.dataCollectorConnections as ConnectionStatus[]) {
		if (status && !status.Connected) {
			connectionsStatus.allOnline = false;
		}
	}

	return { plcs: plcs, connections: connectionsStatus };
}

//#endregion

//#region  LOCAL CONNECTIONS
export const UPDATE_LOCAL_CONNECTION_STATUS = 'UPDATE_LOCAL_CONNECTION_STATUS';

export class UpdateLocalConnectionStatus implements Action {
	readonly type = UPDATE_LOCAL_CONNECTION_STATUS;
	constructor(public payload: { key: string; value: boolean }) {}
}

export function UpdateLocalConnection(
	plcs: IPlcCollection,
	connections: IConnectionsStatusses,
	payload: { key: string; value: boolean }
) {
	(connections.clientConnections[payload.key] as ConnectionStatus).Connected =
		payload.value;
	return checkAllConnectionsOnline(plcs, connections);
}

//#endregion

export type EquipmentActions =
	| GetPlcInfoSuccesAction
	| GetPlcInfoFailAction
	| GetEquipmentStatusSuccesAction
	| GetEuipmentStatusFailAction
	| UpdateLocalConnectionStatus;
