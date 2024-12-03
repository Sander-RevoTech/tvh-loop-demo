import * as AuthActions from './auth.actions';
import { IUser } from '../models/model';
import {
	IAsyncOperationState,
	ToggleAsynchronousOperation,
	TOGGLE_ASYNCHRONOUS_OPERATION,
	ToggleAsynchronousOperations
} from '@revotechiscool/revo-tech-core-lib';

export interface IAuthState extends IAsyncOperationState {
	token: String;
	authenticated: boolean;
	user: IUser;
	asyncOperations: {
		requestingAuthentication: Boolean;
	};
}

const initialState: IAuthState = {
	token: null,
	authenticated: false,
	user: {
		_ID: null,
		name: null,
		email: null,
		token: null,
		accessUserGroup: []
	},
	asyncOperations: {
		requestingAuthentication: false
	}
};

export function authReducer(
	state = initialState,
	action: AuthActions.AuthActions | ToggleAsynchronousOperation
) {
	switch (action.type) {
		case AuthActions.AUTHENTICATE:
			return authenticate(state, action.payload);

		case AuthActions.AUTHENTICATE_FAIL:
			return {
				...state,
				token: null,
				authenticated: false,
				user: {
					_ID: '',
					name: '',
					accessUserGroup: []
				}
			};
		case AuthActions.LOGOUT:
			return {
				...state,
				token: null,
				authenticated: false,
				user: {
					_ID: '',
					name: '',
					accessUserGroup: []
				}
			};
		case TOGGLE_ASYNCHRONOUS_OPERATION:
			return ToggleAsynchronousOperations(state, action.payload);

		default:
			return state;
	}
}

function authenticate(state: IAuthState, authResult: IUser): IAuthState {
	if (authResult && authResult.token) {
		return {
			...state,
			token: authResult.token,
			authenticated: true,
			user: {
				_ID: authResult._ID,
				name: authResult.name,
				accessUserGroup: authResult.accessUserGroup,
				email: authResult.email,
				token: authResult.token
			}
		};
	} else {
		return {
			...state,
			token: null,
			authenticated: false,
			user: {
				_ID: '',
				name: '',
				accessUserGroup: [],
				email: '',
				token: null
			}
		};
	}
}
