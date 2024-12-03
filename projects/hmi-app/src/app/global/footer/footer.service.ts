import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import * as AppStore from '@hmi-app/app-store';
import * as HmiStore from '@hmi-app/hmi/store/actions';
import { INavigationLink } from '@revotechiscool/revo-tech-hmi-lib';
import { BehaviorSubject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class FooterService {
	links: INavigationLink[] = [];
	links$: BehaviorSubject<INavigationLink[]> = new BehaviorSubject<
		INavigationLink[]
	>(this.links);

	constructor() {}

	setLinks(links: INavigationLink[]) {
		this.links = links;
		this.links$.next(this.links);
	}
}
