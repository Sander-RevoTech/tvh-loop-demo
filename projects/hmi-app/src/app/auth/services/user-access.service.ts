import { Injectable } from '@angular/core';
import { IUser } from '../models';
import { Store } from '@ngrx/store';
import { AppState } from '@hmi-src/app/store';
import { IAuthState } from '../store';

@Injectable({
	providedIn: 'root'
})
export class UserAccessService {
	private user: IUser;

	constructor(private store: Store<AppState>) {
		this.store.select('authInterface').subscribe((state: IAuthState) => {
			this.user = state.user;
		});
	}

	public hasAccess(level: number): boolean {
		for (const group of this.user.accessUserGroup) {
			for (const accessLevel of group.levels) {
				if (accessLevel.level === level) {
					return true;
				}
			}
		}
		return false;
	}
}
