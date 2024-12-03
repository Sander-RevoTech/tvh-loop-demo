import {
	Component,
	OnInit,
	OnDestroy,
	ChangeDetectionStrategy,
	ChangeDetectorRef
} from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { marker as $ } from '@biesbjerg/ngx-translate-extract-marker';

import { AppState } from '@hmi-app/app-store';
import {
	Button,
	ButtonStates,
	ILabelLed,
	INFO_LED
} from '@revotechiscool/revo-tech-core-lib';
import {
	ComponentIdBase,
	ComponentIdService,
	PlcTagPollingService,
	PlcTagWriteService
} from '@revotechiscool/revo-tech-hmi-lib';
import { IPlcDb } from '@revotechiscool/revo-tech-automation-types';

import { BoolPlcTag, PlcTagBase, SmartBooldt } from 'plc/PLC_Main';
import { IPlcInterfaceState } from '../../store';
import { MotorControlNavigatorService } from '../../services';
import { cloneDeep, sortBy } from 'lodash';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { stat } from 'fs';
import { exTractTagsOnly } from '@revotechiscool/revo-tech-automation-functions';

interface ISensor {
	led: ILabelLed;
	sensor: SmartBooldt;
}

@Component({
	selector: 'app-sensor-list',
	templateUrl: './sensor-list.component.html',
	styleUrls: ['./sensor-list.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class SensorListComponent extends ComponentIdBase
	implements OnInit, OnDestroy {
	leds: ISensor[] = [];
	sensors: SmartBooldt[] = [];
	polling = false;
	timeout;

	counterSort = false;

	resetTag: BoolPlcTag;
	resetCounterButton: Button = new Button({
		value: $('RESET SENSOR COUNTERS'),
		onActionMouseUp: this.resetCounters.bind(this),
		state: ButtonStates.reset
	});

	subscription: Subscription;
	constructor(
		private store: Store<AppState>,
		private poller: PlcTagPollingService,
		private writer: PlcTagWriteService,
		private crf: ChangeDetectorRef,
		protected idService: ComponentIdService,
		private motorRouter: MotorControlNavigatorService
	) {
		super(idService);
		this.fetchSensors();
	}

	ngOnInit() {}

	fetchSensors() {
		this.timeout = setInterval(() => {
			this.store
				.select('plcInterface')
				.subscribe((state: IPlcInterfaceState) => {
					this.resetTag =
						state.PLCs.plcMain.Dbs.HMI_DB_DB46._ResetSensorCounters._signal;

					const tags = exTractTagsOnly(
						(state.PLCs.plcMain.Dbs.Inputs_DB_DB1 as any) as IPlcDb
					) as SmartBooldt[];
					this.sensors = [];
					this.extractSensors(tags, '');
					this.sortSensors();
					this.buildSensors();
					this.crf.detectChanges();
					this.polling = true;
				})
				.unsubscribe();
		}, 250);
	}

	extractSensors(tags: PlcTagBase[] | SmartBooldt[], parentName: string) {
		tags.forEach(tag => {
			if (tag._State) {
				if (!this.polling) {
					this.poller.addTag(tag._State, this);
					this.poller.addTag((tag as SmartBooldt)._Counter, this);
				}

				const copyTag = cloneDeep(tag);
				copyTag.Name = parentName + tag.Name;
				// if (copyTag.Comment.length) {
				// 	copyTag.Name += ' (' + copyTag.Comment + ')';
				// }

				this.sensors.push(copyTag);
			} else if (tag.Type === 'Struct') {
				const childTags = exTractTagsOnly((tag as any) as IPlcDb);
				this.extractSensors(childTags, tag.Name);
			}
		});
	}

	buildSensors() {
		this.leds = [];
		this.sensors.forEach(sens => {
			if (sens._State) {
				const led: ILabelLed = {
					label: sens.Name.substring(1),
					ledOnCmd: sens._State.Value,
					disableAnimation: true,
					color: INFO_LED
				};
				this.leds.push({ led: led, sensor: sens });
			}
		});
	}

	sortSensors() {
		if (!this.counterSort) {
			this.sensors = sortBy(
				this.sensors,
				[sensor => sensor.Name.toUpperCase()],
				['asc']
			);
		} else {
			this.sensors = sortBy(this.sensors, s => Number(s._Counter.Value) * -1);
		}
	}

	onSlideChange(event: MatSlideToggleChange) {
		this.counterSort = event.checked;
	}

	resetCounters() {
		this.writer.writeTag(this.resetTag, true);
	}

	ngOnDestroy() {
		clearInterval(this.timeout);
		this.sensors.forEach(sens => {
			if (sens._State) {
				this.poller.removeTag(sens._State, this);
				this.poller.addTag(sens._Counter, this);
			}
		});
		// this.subscription.unsubscribe();
	}
}
