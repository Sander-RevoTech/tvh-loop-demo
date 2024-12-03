import { Injectable } from '@angular/core';
import { IPlcInterfaceState } from '@hmi-src/app/hmi';
import { AppState } from '@hmi-src/app/store';
import { Store } from '@ngrx/store';
import { Cylinder_DB_DB16, Cylinder_UDT } from 'plc/PLC_Main';
import { ICylinderLabel } from '@revotechiscool/revo-tech-hmi-lib';

@Injectable({
	providedIn: 'root'
})
export class CylinderLabelService {
	cylinders: Cylinder_DB_DB16;

	constructor(private store: Store<AppState>) {
		this.store.select('plcInterface').subscribe((state: IPlcInterfaceState) => {
			this.cylinders = state.PLCs.plcMain.Dbs.Cylinder_DB_DB16;
		});
	}

	getLabel(candidate: Cylinder_UDT): ICylinderLabel {
		switch (candidate.Name) {
			// case this.cylinders._VLV_002.Name:
			// case this.cylinders._VLV_005.Name:
			// case this.cylinders._VLV_009.Name:
			// case this.cylinders._VLV_012.Name:
			// case this.cylinders._VLV_018.Name:
			// return {
			// 	in: 'GATE CLOSED',
			// 	out: 'GATE OPEN',
			// 	travel: 'GATE OPEN'
			// };

			default:
				return { in: 'IN', out: 'OUT', travel: 'TRAVELING' };
		}
	}
}
