import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { AppState } from '@hmi-src/app/store';
import { IPlcInterfaceState } from '@hmi-src/app/hmi';
import { IPlcCollection } from 'plc/plc-collection';

@Component({
	selector: 'app-playground',
	templateUrl: './playground.component.html',
	styleUrls: ['./playground.component.scss']
})
export class PlaygroundComponent implements OnInit {
	private plcs: IPlcCollection;
	myControl = new FormControl();
	options: string[] = [];
	filteredOptions: Observable<string[]>;

	constructor(private store: Store<AppState>) {
		this.store
			.select('plcInterface')
			.subscribe((state: IPlcInterfaceState) => {
				this.plcs = state.PLCs;
				this.options = Object.keys(this.plcs);
			})
			.unsubscribe();
	}

	ngOnInit() {
		this.filteredOptions = this.myControl.valueChanges.pipe(
			startWith(''),
			map(value => this._filter(value))
		);
	}

	private _filter(value: string): string[] {
		const values = value.split('.');
		const plcKeys = Object.keys(this.plcs);
		if (!values.length) {
			return plcKeys;
		}

		if (values.length) {
			const plcs = plcKeys.filter(
				o => o.toLocaleLowerCase().indexOf(values[0].toLocaleLowerCase()) === 0
			);
			if (values.length === 1) {
				return plcs;
			} else {
				const dbs = Object.keys(this.plcs[plcs[0]]);
			}
		}
	}
}
