import { Action } from '@ngrx/store';

import { ISidenavLinks } from '@revotechiscool/revo-tech-hmi-lib';

export const UPDATE_SIDENAV = 'UPDATE_SIDENAV';

export class UpdateSidenavAction implements Action {
	readonly type = UPDATE_SIDENAV;
	constructor(public payload: ISidenavLinks) {}
}

export type SidenavActions = UpdateSidenavAction;
