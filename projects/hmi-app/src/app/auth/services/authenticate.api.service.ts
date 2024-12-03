import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import * as AppStore from '@hmi-app/store';
import * as AuthActions from '../store/auth.actions';
import { environment } from '@hmi-src/environments/environment';
import {
	httpMethode,
	IHttpActionPayload
} from '../models/http-action-interface';
import { IUserAuthenticateBody } from '../models/model';
import { HttpAction } from '@revotechiscool/revo-tech-core-lib';

@Injectable({
	providedIn: 'root'
})
export class AuthenticateApiService {
	constructor(private store: Store<AppStore.AppState>) {}

	authenticate(clientdata: IUserAuthenticateBody) {
		const httpActionSettings: IHttpActionPayload = {
			body: clientdata,
			httpMethode: httpMethode.POST,
			queryParameters: '',
			url:
				environment.authenticate.Ip +
				':' +
				environment.authenticate.Port +
				'/user/login',
			actionSuccess: AuthActions.AUTHENTICATE_SUCCESS,
			actionError: AuthActions.AUTHENTICATE_FAIL,
			asyncOperationsState: [{ name: 'requestingAuthentication', active: true }]
		};
		this.store.dispatch(new HttpAction(httpActionSettings));
	}
}
