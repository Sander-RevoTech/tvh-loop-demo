import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '@hmi-app/app-store';

import { IPlcDbsMain } from 'plc/plc-collection';
import { IMotor } from '../../classes';
import { MotorControlNavigatorService } from '../../services';

@Component({
	selector: 'app-motor-list',
	templateUrl: './motor-list.component.html',
	styleUrls: ['./motor-list.component.scss']
})
export class MotorListComponent implements OnInit, OnDestroy {
	nordMotors: IMotor[];
	conveyLinx: IMotor[];

	subscription: Subscription;
	constructor(
		private store: Store<AppState>,
		private motorRouter: MotorControlNavigatorService
	) {
		this.subscription = this.store
			.select('plcInterface', 'PLCs', 'plcMain', 'Dbs')
			.subscribe((state: IPlcDbsMain) => {
				// this.nordMotors = exTractTagsOnly(
				// 	(state.MOT_NORD_ASI_DRIVES_DB_DB22 as any) as IPlcDb
				// ) as IMotor[];
				// this.conveyLinx = exTractTagsOnly(
				// 	(state.MOT_CLX_DB_DB6 as any) as IPlcDb
				// ) as IMotor[];
			});
	}

	ngOnInit() {}

	onMotorClick(motor: IMotor, event: Event) {
		event.stopImmediatePropagation();
		this.motorRouter.navigate(motor);
	}

	ngOnDestroy() {
		this.subscription.unsubscribe();
	}
}
