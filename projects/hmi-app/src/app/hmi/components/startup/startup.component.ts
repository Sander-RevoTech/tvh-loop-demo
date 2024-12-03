import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router, RouterEvent } from '@angular/router';
import { Subscription } from 'rxjs';
import { marker as $ } from '@biesbjerg/ngx-translate-extract-marker';

import * as AppStore from '@hmi-app/app-store';
import { FooterService } from '@hmi-app/global/footer/footer.service';

import * as PlcDbStore from '../../store';

interface IPLC {
	Dbs: object;
	initialized: boolean;
}

@Component({
	selector: 'app-startup',
	templateUrl: './startup.component.html',
	styleUrls: ['./startup.component.scss']
})
export class StartupComponent implements OnInit, OnDestroy {
	state$$: Subscription;
	state: PlcDbStore.IPlcInterfaceState = null;
	message1: string;
	message2: string;
	message3: string;

	constructor(
		private store: Store<AppStore.AppState>,
		private footer: FooterService,
		private router: Router
	) {
		this.state$$ = this.store
			.select('plcInterface')
			.subscribe((Newstate: PlcDbStore.IPlcInterfaceState) => {
				this.state = Newstate;
				this.buildMessage();
				if (this.state.initialized) {
					this.router.navigate(['home'], { replaceUrl: false });
				}
			});
	}

	buildMessage() {
		this.message1 = '';
		this.message2 = '';
		this.message3 = '';

		let plc = 0;
		let plcInitialized = 0;
		let db = 0;
		let dbInitialized = 0;

		const plcNames = Object.keys(this.state.PLCs);
		plc = plcNames.length;
		plcNames.forEach(key => {
			const plcObject = this.state.PLCs[key] as IPLC;
			if (plcObject.initialized) {
				plcInitialized += 1;
			}

			const dbs = Object.keys(plcObject.Dbs);
			db += dbs.length;

			dbs.forEach(dbName => {
				const dbObject = plcObject.Dbs[dbName];
				if (dbObject.KeyName) {
					dbInitialized += 1;
				}
			});
		});

		this.message1 = $("Initializing PLC's") + '\n';
		this.message1 +=
			$('Initialized ') + plcInitialized + ' / ' + plc + " Plc's \n";
		this.message2 += $("Initialized DB's ") + dbInitialized + ' / ' + db + '\n';
		this.message3 += $('we are done soon');

		if (this.state.initialized) {
			this.message1 = $('Finished loading');
			this.message2 = '';
			this.message3 = '';
		}
	}

	ngOnInit() {
		this.listenToRoute();
	}

	listenToRoute() {
		this.router.events.subscribe((e: RouterEvent) => {
			// if (e instanceof NavigationEnd) {
			if (!this.state.initialized) {
				this.router.navigate(['loading'], { replaceUrl: false });
			}
			// }
		});
	}

	ngOnDestroy() {
		this.state$$.unsubscribe();
	}
}
