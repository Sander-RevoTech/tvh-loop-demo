import { ActionReducerMap } from '@ngrx/store';

import * as fromPlcInterface from '@hmi-app/hmi';
import * as fromAuthentication from '@hmi-app/auth/store';

export interface AppState {
	plcInterface: fromPlcInterface.IPlcInterfaceState;
	authInterface: fromAuthentication.IAuthState;
}

export const reducers: ActionReducerMap<AppState> = {
	plcInterface: fromPlcInterface.plcInterfaceReducer,
	authInterface: fromAuthentication.authReducer
};
