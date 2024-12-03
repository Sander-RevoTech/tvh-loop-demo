import { Component, OnInit, OnDestroy } from "@angular/core";
import { Store } from "@ngrx/store";
import { Subscription } from "rxjs";

import * as AppStore from "@hmi-app/app-store";
import * as PlcDbStore from "../../store";

interface IDbInfo {
	name: string;
	loaded: boolean;
}

@Component({
	selector: "app-plc-interface-info-db",
	templateUrl: "./plc-interface-info-db.component.html",
	styleUrls: ["./plc-interface-info-db.component.scss"]
})
export class PlcInterfaceInfoDbComponent implements OnInit, OnDestroy {
	state$$: Subscription;
	dbInfo: IDbInfo[] = [];

	constructor(private store: Store<AppStore.AppState>) {
		this.state$$ = this.store
			.select("plcInterface")
			.subscribe((state: PlcDbStore.IPlcInterfaceState) => {
				this.createDbInfo(state);
			});
	}

	ngOnInit() {}

	createDbInfo(state: PlcDbStore.IPlcInterfaceState) {
		this.dbInfo = [];
		Object.keys(state.PLCs).map(key => {
			Object.keys(state.PLCs[key].Dbs).map(dbName => {
				const info: IDbInfo = {
					name: key,
					loaded: state.PLCs[key].Dbs[dbName].Name ? true : false
				};
				this.dbInfo.push(info);
			});
		});
	}

	ngOnDestroy(): void {
		this.state$$.unsubscribe();
	}
}
