import { Action } from '@ngrx/store';

import { INavigationLink } from '@revotechiscool/revo-tech-hmi-lib';

export const UPDATE_FOOTER = 'UPDATE_FOOTER';

export class UpdateFooterAction implements Action {
	readonly type = UPDATE_FOOTER;
	constructor(public payload: INavigationLink[]) {}
}

export type FooterActions = UpdateFooterAction;
