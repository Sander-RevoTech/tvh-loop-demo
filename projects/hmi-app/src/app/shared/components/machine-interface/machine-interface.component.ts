import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { marker as $ } from '@biesbjerg/ngx-translate-extract-marker';

import { Conveyor_UDT } from 'plc/PLC_MAIN';
import {
	ERROR_LED,
	INFO_LED,
	LabelLed
} from '@revotechiscool/revo-tech-core-lib';
import {
	ComponentIdBase,
	ComponentIdService,
	PlcTagPollingService
} from '@revotechiscool/revo-tech-hmi-lib';

@Component({
	selector: 'app-machine-interface',
	templateUrl: './machine-interface.component.html',
	styleUrls: ['./machine-interface.component.scss']
})
export class MachineInterfaceComponent extends ComponentIdBase
	implements OnInit, OnDestroy {
	led: LabelLed;

	status = {
		warning: false
	};

	_settings: Conveyor_UDT;
	@Input() set settings(value: Conveyor_UDT) {
		this._settings = value;
		this.update();
	}

	constructor(
		private idService: ComponentIdService,
		private poller: PlcTagPollingService
	) {
		super(idService);
	}

	ngOnInit(): void {
		if (!this.tagsregisterd) {
			this.tagsregisterd = true;
			this.poller.addTag(this._settings, this);
		}
	}

	update() {
		this.name = this._settings.Name;

		if (!this.tagsregisterd) {
			this.tagsregisterd = true;
			this.poller.addTag(this._settings, this);
		}

		let color = INFO_LED;
		if (!this._settings._Cmd._ReadyToReceive.Value) {
			color = ERROR_LED;
		}

		this.led = new LabelLed({
			ledOnCmd: true,
			disableAnimation: true,
			color: color,
			label: $('READY')
		});

		this.status.warning = this._settings._Alarms._Status.Value > 0;
	}

	ngOnDestroy() {
		this.poller.removeTag(this._settings, this);
	}
}
