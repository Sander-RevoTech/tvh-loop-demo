import { Injectable } from '@angular/core';
import { map } from 'rxjs/internal/operators';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Router } from '@angular/router';

import * as AuthActions from './auth.actions';
import { IUser } from '../models/model';

@Injectable()
export class AuthEffects {
	constructor(private actions$: Actions, private router: Router) {}

	@Effect()
	RouterLogin = this.actions$.pipe(
		ofType(AuthActions.AUTHENTICATE_SUCCESS),
		map((action: AuthActions.AuthenticateSuccess) => action.payload),
		map((payload: IUser) => {
			if (payload.token) {
				this.router.navigate(['home']);
			} else {
				this.router.navigate(['login']);
			}
			return {
				type: AuthActions.AUTHENTICATE,
				payload: payload
			};
		})
	);
}
