import {
	ActivatedRouteSnapshot,
	CanActivate,
	Router,
	RouterStateSnapshot
} from '@angular/router';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AppState } from '@hmi-src/app/store';
import { IAuthState, IUser } from '..';
import { UserAccessService } from './user-access.service';

@Injectable()
export class AuthGuard implements CanActivate {
	constructor(
		private store: Store<AppState>,
		private userService: UserAccessService,
		private router: Router
	) {}

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
		let result = false;
		this.store
			.select('authInterface')
			.subscribe((authState: IAuthState) => {
				const jwtService = new JwtHelperService();
				const expired = jwtService.isTokenExpired(authState.token as string);
				if (expired) {
					result = false;
				}

				if (authState.authenticated) {
					result = this.checkUserPermission(route, authState.user);
				}
			})
			.unsubscribe();
		if (!result) {
			this.router.navigate(['login']);
		}
		return result;
	}

	checkUserPermission(route: ActivatedRouteSnapshot, user: IUser): boolean {
		const level = route.data.accessLevel;
		if (level === null) {
			return false;
		} else {
			return this.userService.hasAccess(level);
		}
	}
}
