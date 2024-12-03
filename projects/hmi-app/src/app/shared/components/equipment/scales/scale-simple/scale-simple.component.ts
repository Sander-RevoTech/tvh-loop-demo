import { Component, OnInit, Input, OnDestroy } from '@angular/core';

import { Router } from '@angular/router';

import {
	ComponentIdBase,
	ComponentIdService,
	ISimpleScale,
	PlcTagPollingService
} from '@revotechiscool/revo-tech-hmi-lib';

import { Scale_UDT } from 'plc/PLC_Main';
import { controlPages } from '@hmi-src/app/pages';

@Component({
	selector: 'app-scale-simple',
	templateUrl: './scale-simple.component.html',
	styleUrls: ['./scale-simple.component.scss']
})
export class ScaleSimpleComponent extends ComponentIdBase
	implements OnInit, OnDestroy {
	_scale: Scale_UDT;
	_scaleSimple: ISimpleScale;

	@Input() set scale(value: Scale_UDT) {
		if (value) {
			this._scale = value;
			this.registerTag();

			this._scaleSimple = {
				alarmActive: this._scale._alarms._Status.Value > 0,
				name: this._scale.Name.substr(1),
				stableWeight: this._scale._ReadResult._Stable.Value as boolean,
				weightResult: this._scale._ReadResult._netWeightGrams.Value as number
			};
		}
	}

	constructor(
		protected router: Router,
		protected idService: ComponentIdService,
		protected poller: PlcTagPollingService
	) {
		super(idService);
	}

	ngOnInit() {}

	registerTag() {
		if (!this.tagsregisterd) {
			this.tagsregisterd = true;
			this.poller.addTag(this._scale._alarms._Status, this);
			this.poller.addTag(this._scale._ReadResult._Stable, this);
			this.poller.addTag(this._scale._ReadResult._netWeightGrams, this);
		}
	}

	removeTags() {
		this.poller.removeTag(this._scale._alarms._Status, this);
		this.poller.removeTag(this._scale._ReadResult._Stable, this);
		this.poller.removeTag(this._scale._ReadResult._netWeightGrams, this);
	}

	onClick() {
		this.router.navigate([controlPages.scaleDetail], {
			queryParams: { id: this._scale.Id },
			replaceUrl: false
		});
	}

	ngOnDestroy() {
		this.removeTags();
	}
}
