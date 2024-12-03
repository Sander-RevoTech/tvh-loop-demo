import { Component, OnInit } from '@angular/core';
import { AuthenticateApiService } from '../../services';
import { IUserAuthenticateBody } from '../../models/model';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';

import * as AppStore from '@hmi-app/app-store';
import * as AuthStore from '@hmi-app/auth/store';

@Component({
	selector: 'app-authenticate',
	templateUrl: './authenticate.component.html',
	styleUrls: ['./authenticate.component.scss']
})
export class AuthenticateComponent implements OnInit {
	private authSubscription: Subscription;
	spinner: Boolean = false;
	constructor(
		private api: AuthenticateApiService,
		private store: Store<AppStore.AppState>
	) {
		this.authSubscription = this.store
			.select('authInterface')
			.subscribe((state: AuthStore.IAuthState) => {
				this.spinner = state.asyncOperations.requestingAuthentication;
			});
	}

	ngOnInit() {}

	onSignInClicked(event) {
		console.log(event.data);
		const user: IUserAuthenticateBody = {
			name: event.value.username,
			password: event.value.password
		};
		this.api.authenticate(user);
	}
}
