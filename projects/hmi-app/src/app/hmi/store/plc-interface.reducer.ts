import {
	IAsyncOperationState,
	ToggleAsynchronousOperation,
	TOGGLE_ASYNCHRONOUS_OPERATION,
	ToggleAsynchronousOperations
} from '@revotechiscool/revo-tech-core-lib';
import { IPlcCollection, PlcMain } from 'plc/plc-collection';
import {} from 'plc/PLC_MAIN';

import {
	INavigationLink,
	ISidenavLinks
} from '@revotechiscool/revo-tech-hmi-lib';

import {
	IConnectionsStatusses as IConnectionsStatussesLib,
	IApiGetAlarms
} from '@revotechiscool/revo-tech-automation-types';

import {
	initializeDBsObjects,
	setTagValues,
	ConnectionStatus
} from '@revotechiscool/revo-tech-automation-functions';

import { environment } from '@hmi-src/environments/environment';

import * as Actions from './actions';
import { GetAlamrsFail } from './actions';

export interface IConnectionsStatusses extends IConnectionsStatussesLib {
	clientConnections: {
		readhub: ConnectionStatus;
		writehub: ConnectionStatus;
		tagserver: ConnectionStatus;
		dataCollector: ConnectionStatus;
	};
}

export interface IPlcInterfaceState extends IAsyncOperationState {
	PLCs: IPlcCollection;
	initialized: boolean;
	compiled: Date;
	connectionsStatus: IConnectionsStatusses;
	activeAlarms: IApiGetAlarms[];

	asyncOperations: {
		fetchingPlcInterfaceValues: boolean;
		fetchingPlcInfo: boolean;
		fetchingAlarms: boolean;
	};

	footerSettings: INavigationLink[];
	sidenavSettings: ISidenavLinks;
}

const readWritehub = { ...environment.tagServer };
readWritehub.Name = readWritehub.Name + ':' + readWritehub.Port + '/plcHub';

const initialState: IPlcInterfaceState = {
	compiled: null,
	initialized: environment.initialized,
	PLCs: {
		plcMain: new PlcMain()
	},
	connectionsStatus: {
		allOnline: false,
		clientConnections: {
			dataCollector: new ConnectionStatus(environment.dataCollector),
			tagserver: new ConnectionStatus(environment.tagServer),
			readhub: new ConnectionStatus(readWritehub),
			writehub: new ConnectionStatus(readWritehub)
		},
		dataCollectorConnections: []
	},
	activeAlarms: [],
	asyncOperations: {
		fetchingPlcInterfaceValues: false,
		fetchingPlcInfo: false,
		fetchingAlarms: false
	},
	footerSettings: [],
	sidenavSettings: {
		auth: null,
		default: [],
		zones: []
	}
};

export function plcInterfaceReducer(
	state = initialState,
	action:
		| Actions.PlcInterfaceActions
		| Actions.FooterActions
		| Actions.SidenavActions
		| Actions.EquipmentActions
		| ToggleAsynchronousOperation
): IPlcInterfaceState {
	switch (action.type) {
		default:
			return state;

		case TOGGLE_ASYNCHRONOUS_OPERATION:
			return ToggleAsynchronousOperations(state, action.payload);

		case Actions.GET_PLC_INTERFACE_VALUES_SUCCESS: {
			const res = initializeDBsObjects(action.payload, state.PLCs);
			const newState = {
				...state,
				PLCs: res.PLCs,
				initialized: res.initialized
			};
			return newState;
		}

		case Actions.SET_PLC_COLLECTION_FROM_INDEXDDB: {
			return { ...state, PLCs: action.payload, initialized: true };
		}

		case Actions.GET_PLC_INFO_SUCCESS: {
			const res = Actions.updateTagServerConnectionsSuccess(
				state.PLCs,
				state.connectionsStatus,
				action.payload
			);
			return { ...state, connectionsStatus: res.connections, PLCs: res.plcs };
		}

		case Actions.GET_PLC_INFO_FAIL: {
			const res = Actions.updateTagServerConnectionsFail(
				state.PLCs,
				state.connectionsStatus
			);
			return { ...state, connectionsStatus: res.connections, PLCs: res.plcs };
		}

		case Actions.GET_EQUIPMENT_STATUS_SUCCES: {
			const res = Actions.updateDataCollectorConnectionsSucces(
				state.PLCs,
				state.connectionsStatus,
				action.payload
			);
			return { ...state, connectionsStatus: res.connections, PLCs: res.plcs };
		}

		case Actions.GET_EQUIPMENT_STATUS_FAIL: {
			return {
				...state,
				connectionsStatus: Actions.updateDataCollectorConnectionsFail(
					state.connectionsStatus
				)
			};
		}

		case Actions.UPDATE_LOCAL_CONNECTION_STATUS: {
			const res = Actions.UpdateLocalConnection(
				state.PLCs,
				state.connectionsStatus,
				action.payload
			);
			return { ...state, connectionsStatus: res.connections, PLCs: res.plcs };
		}

		case Actions.PLC_READ_RESULT: {
			const res = setTagValues(action.payload, state.PLCs);
			return { ...state, PLCs: res.PLCs };
		}

		case Actions.GET_ACTIVE_ALARMS_SUCCES: {
			return { ...state, activeAlarms: action.payload };
		}

		case Actions.GET_ACTIVE_ALARMS_FAIL: {
			return { ...state, activeAlarms: GetAlamrsFail(state.activeAlarms) };
		}

		case Actions.UPDATE_FOOTER: {
			return { ...state, footerSettings: action.payload };
		}
		case Actions.UPDATE_SIDENAV: {
			return { ...state, sidenavSettings: action.payload };
		}
	}
}
