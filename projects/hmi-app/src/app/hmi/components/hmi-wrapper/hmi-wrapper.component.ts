import { Component, OnInit, OnDestroy } from "@angular/core";
import { Store } from "@ngrx/store";
import { Subscription } from "rxjs";

import * as AppStore from "@hmi-app/app-store";
import * as PlcDbStore from "../../store";

@Component({
	selector: "app-hmi-wrapper",
	templateUrl: "./hmi-wrapper.component.html",
	styleUrls: ["./hmi-wrapper.component.scss"]
})
export class HmiWrapperComponent implements OnInit, OnDestroy {
	state$$: Subscription;

	constructor(private store: Store<AppStore.AppState>) {
		this.state$$ = this.store
			.select("plcInterface")
			.subscribe((state: PlcDbStore.IPlcInterfaceState) => {});
	}

	ngOnInit() {}

	ngOnDestroy() {
		this.state$$.unsubscribe();
	}
}
