import { Injectable, NgZone } from '@angular/core';
import { IPlcCollection } from 'plc/plc-collection';
import Dexie from 'dexie';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import {
	HttpMethodeExecuterService,
	httpMethode,
	IHttpActionResult,
	IHttpActionPayload,
	sleep
} from '@revotechiscool/revo-tech-core-lib';

import { environment } from '@hmi-src/environments/environment';
import { AppState } from '@hmi-src/app/store';
import { IPlcInterfaceState, SetPLCCollectionFromIndexDB } from '../store';

interface IBplcs {
	plcs: IPlcCollection;
	key: string;
}

interface ICompiled {
	key: string;
	compiled: Date;
}

@Injectable({
	providedIn: 'root'
})
export class PlcDbService {
	db: Dexie = new Dexie('plc-db');
	plcs: IBplcs;
	compiled: ICompiled;
	initRequired = true;
	subscription: Subscription = null;

	constructor(
		private store: Store<AppState>,
		private httpExecute: HttpMethodeExecuterService,
		private zone: NgZone
	) {
		this.subscription = this.store
			.select('plcInterface')
			.subscribe((state: IPlcInterfaceState) => {
				this.plcs = {
					key: 'PLCs',
					plcs: state.PLCs
				};
				if (state.initialized && this.initRequired) {
					this.updateIndexdDb();
					this.subscription.unsubscribe();
				}
			});
	}

	async setupIndexdDb() {
		const store = {
			hmi: 'key'
		};
		this.db.version(1).stores(store);
	}

	async checkReloadRequired() {
		const res = await this.zone.runOutsideAngular(async () => {
			const compiledDb = await this.getCompiledTimeFromIndexdDb();

			if (compiledDb === undefined) {
				this.initRequired = true;
				return true;
			}
			const compiledBe = await this.getCompiledTimeFromBe();
			if (
				!compiledDb ||
				!compiledBe ||
				compiledDb.compiled.getTime() !== compiledBe.getTime()
			) {
				this.initRequired = true;
				return true;
			}

			const plcsStoreKeys = this.getObjectKeys(this.plcs.plcs);
			const indexDbData = await this.getPLCsIndexdDb();
			if (!indexDbData) {
				return true;
			}
			const plcIndexDb = indexDbData.plcs;
			const plcIndexDbKeys = this.getObjectKeys(plcIndexDb);

			if (!plcsStoreKeys || !plcIndexDb) {
				return true;
			}

			if (JSON.stringify(plcsStoreKeys) !== JSON.stringify(plcIndexDbKeys)) {
				return true;
			}

			this.store.dispatch(new SetPLCCollectionFromIndexDB(plcIndexDb));
			this.subscription.unsubscribe();

			return false;
		});
		return res;
	}

	async getCompiledTimeFromBe(): Promise<Date> {
		let success = false;
		let res: IHttpActionResult = null;
		while (!success) {
			const settings: IHttpActionPayload = {
				actionSuccess: 'succes',
				actionError: null,
				body: '',
				queryParameters: '',
				httpMethode: httpMethode.GET,
				url:
					environment.tagServer.Ip +
					':' +
					environment.tagServer.Port +
					'/api/version'
			};
			res = await this.httpExecute.executeHttpMethode(settings);
			if (res.type !== null) {
				success = true;
			} else {
				await sleep(5000);
			}
		}
		return new Date(res.payload);
	}

	async getCompiledTimeFromIndexdDb(): Promise<ICompiled> {
		const compiled = (await this.db.table('hmi').get('compiled')) as ICompiled;
		if (!compiled) {
			return null;
		}
		compiled.compiled = new Date(compiled.compiled);
		return compiled;
	}

	async checkConfiguredStoreDbs() {}

	async updateIndexdDb() {
		let res = await this.db.table('hmi').put(this.plcs, 'PLCs');
		const compiledBe = await this.getCompiledTimeFromBe();

		this.compiled = {
			compiled: compiledBe,
			key: 'compiled'
		};

		res = await this.db.table('hmi').put(this.compiled, 'compiled');
	}

	async getPLCsIndexdDb(): Promise<IBplcs> {
		const plcs = (await this.db.table('hmi').get('PLCs')) as IBplcs;
		return plcs;
	}

	getObjectKeys(collection: IPlcCollection): {} {
		const keys = {};
		const plcKeys = Object.keys(collection);
		for (const plcKey of plcKeys) {
			keys[plcKey] = [];
			for (const dbKey in collection[plcKey].Dbs) {
				if (collection[plcKey].Dbs.hasOwnProperty(dbKey)) {
					keys[plcKey].push(dbKey);
				}
			}
		}
		return keys;
	}
}
