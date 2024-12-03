import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import {
	HttpEvent,
	HttpHandler,
	HttpInterceptor,
	HttpRequest
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { take, switchMap } from 'rxjs/operators';

import { AppState } from '../../store';
import * as fromAuth from '../store';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
	constructor(private store: Store<AppState>) {}

	intercept(
		req: HttpRequest<any>,
		next: HttpHandler
	): Observable<HttpEvent<any>> {
		return this.store.select('authInterface').pipe(
			take(1),
			switchMap((authState: fromAuth.IAuthState) => {
				let copiedReq = req.clone();
				if (authState.token != null) {
					copiedReq = req.clone({
						setHeaders: {
							Authorization: authState.token as string
						}
					});
				}
				return next.handle(copiedReq);
			})
		);
	}
}
