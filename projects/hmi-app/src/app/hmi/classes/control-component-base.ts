import { Directive, Input, OnDestroy, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import {
	ComponentIdService,
	PlcTagPollingService,
	PlcTagWriteService,
	ComponentIdBase
} from '@revotechiscool/revo-tech-hmi-lib';
import { PlcTagBase } from 'plc/PLC_MAIN';

import * as AppStore from '@hmi-app/app-store';
import * as HmiStore from '../store';
import { environment } from '@hmi-src/environments/environment';
import { getTagFromPlcDb } from '@revotechiscool/revo-tech-automation-functions';

@Directive()
export class ControlComponentBase extends ComponentIdBase implements OnDestroy {
	objectFound = true;
	routeSubscription: Subscription;
	manualMode: Boolean | boolean;
	storeSubscription: Subscription;
	tagRegisterd = false;
	tagId: Number[];
	objectInitialized = false;
	showControl = false;
	_tag: PlcTagBase = null;
	resetTag: PlcTagBase;

	constructor(
		protected router: Router,
		protected idService: ComponentIdService,
		protected poller: PlcTagPollingService,
		protected writer: PlcTagWriteService,
		protected location: Location,
		protected activatedRoute: ActivatedRoute,
		protected store: Store<AppStore.AppState>
	) {
		super(idService);
	}

	init() {
		this.getTagIdFromRoute();
		this.registerToStore();
	}

	getTagIdFromRoute() {
		this.activatedRoute.queryParams
			.subscribe((params: Params) => {
				if (params['id']) {
					this.tagId = params['id'].map(Number);
				} else {
					this.tagId = null;
				}
			})
			.unsubscribe();
	}

	registerToStore() {
		this.storeSubscription = this.store
			.select('plcInterface')
			.subscribe((state: HmiStore.IPlcInterfaceState) => {
				this.resetTag = state.PLCs.plcMain.Dbs.HMI_DB_DB46._ResetFromHMI;
				if (this.tagId) {
					this._tag = getTagFromPlcDb(this.tagId, state.PLCs);
					if (this._tag) {
						this.registerTag();
						this.checkTagIsValid();
						if (this.objectInitialized) {
							this.updateProperties();
						}
					} else {
						this.objectFound = false;
					}
				}

				if (!state.PLCs.plcMain.connected) {
					this.showControl = false;
				}

				if (environment.plcConnected) {
					this.showControl = true;
					this.objectInitialized = true;
				}
			});

		if (!this.tagId) {
			this.router.navigate(['home'], { replaceUrl: false });
		}
	}

	registerTag() {
		if (!this.tagRegisterd) {
			this.poller.addTag(this._tag, this);
			this.tagRegisterd = true;
		}
	}

	checkTagIsValid() {
		this.objectInitialized = true;
	}

	updateProperties() {
		this.showControl = true;
	}

	ngOnDestroy() {
		this.storeSubscription.unsubscribe();
		if (this._tag) {
			this.poller.removeTag(this._tag, this);
		}
	}
}
