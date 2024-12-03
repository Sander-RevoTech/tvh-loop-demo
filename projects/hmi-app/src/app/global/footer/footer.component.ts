import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { AppState } from '@hmi-app/app-store';
import { IPlcInterfaceState } from '@hmi-app/hmi';

import { BoolPlcTag } from 'plc/PLC_Main';
import { INavigationLink } from '@revotechiscool/revo-tech-hmi-lib';
import { FooterService } from './footer.service';

@Component({
	selector: 'app-footer',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit, OnDestroy {
	footerSubscription: Subscription;
	plcDbSuscription: Subscription;
	resetTag: BoolPlcTag;
	initialized = false;
	footer: INavigationLink[] = [];

	constructor(
		private store: Store<AppState>,
		private footerService: FooterService,
		private router: Router
	) {
		this.footerSubscription = this.footerService.links$.subscribe(
			(links: INavigationLink[]) => {
				this.footer = links;
			}
		);

		this.plcDbSuscription = this.store
			.select('plcInterface')
			.subscribe((state: IPlcInterfaceState) => {
				this.initialized = state.initialized;
				this.resetTag = state.PLCs.plcMain.Dbs.HMI_DB_DB46._ResetFromHMI;
			});
	}

	ngOnInit() {}

	onFooterNavigate(foot: INavigationLink) {
		this.router.navigate([foot.route], {
			replaceUrl: false,
			queryParams: foot.queryParams
		});
	}

	ngOnDestroy() {
		this.footerSubscription.unsubscribe();
		this.plcDbSuscription.unsubscribe();
	}
}
