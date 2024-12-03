import { Action } from '@ngrx/store';
import { IApiAuthResult } from '../models/model';
import { IUser } from '../models';

//#region Authentication

export const AUTHENTICATE = 'AUTHENTICATE';
export const AUTHENTICATE_SUCCESS = 'AUTHENTICATE_SUCCESS';
export const AUTHENTICATE_FAIL = 'AUTHENTICATE_FAIL';

export const LOGOUT = 'LOGOUT';

export class Authenticate implements Action {
	readonly type = AUTHENTICATE;
	constructor(public payload: IUser) {}
}

export class AuthenticateSuccess implements Action {
	readonly type = AUTHENTICATE_SUCCESS;
	constructor(public payload: IUser) {}
}

export class AuthenticateFail implements Action {
	readonly type = AUTHENTICATE_FAIL;
	constructor(public payload: IApiAuthResult) {}
}

export class Logout implements Action {
	readonly type = LOGOUT;
	constructor() {}
}
//#endregion

export type AuthActions =
	| Authenticate
	| AuthenticateSuccess
	| AuthenticateFail
	| Logout;
