import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';

import { AppState } from '@hmi-app/app-store';
import { IPlcInterfaceState } from '@hmi-app/hmi';

@Component({
	selector: 'app-loading-control-component',
	templateUrl: './loading-control-component.component.html',
	styleUrls: ['./loading-control-component.component.scss']
})
export class LoadingControlComponentComponent implements OnInit {
	_notFound = true;
	@Input() set notFound(value: boolean) {
		this._notFound = value;
		this.updateState();
	}

	connected = false;
	subscription: Subscription;
	state = 0;

	constructor(private store: Store<AppState>) {
		this.subscription = this.store
			.select('plcInterface')
			.subscribe((state: IPlcInterfaceState) => {
				this.connected = state.PLCs.plcMain.connected;
				this.updateState();
			});
	}

	ngOnInit() {}

	updateState() {
		if (!this.connected) {
			this.state = 1;
			return;
		}
		if (this._notFound) {
			this.state = 2;
			return;
		}
		this.state = 3;
	}
}
