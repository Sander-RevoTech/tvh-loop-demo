import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Location } from '@angular/common';

import * as AppStore from '@hmi-app/app-store';

import { Motor_DOL_UDT } from 'plc/PLC_Main';
import {
	ComponentIdService,
	PlcTagPollingService,
	PlcTagWriteService,
	BoxSettings,
	GridBoxWrappers
} from '@revotechiscool/revo-tech-hmi-lib';
import {
	ILabelLed,
	ERROR_LED,
	WARNING_LED,
	INFO_LED,
	ILabelText,
	LabelLed,
	Button,
	LabelInput,
	LabelText
} from '@revotechiscool/revo-tech-core-lib';

import { marker as $ } from '@biesbjerg/ngx-translate-extract-marker';
import { MotorBaseControl } from '@hmi-app/hmi/classes/control-component-motor-base';

@Component({
	selector: 'app-motor-dol-detail',
	templateUrl: './motor-dol-detail.component.html',
	styleUrls: ['./motor-dol-detail.component.scss']
})
export class MotorDolDetailComponent extends MotorBaseControl
	implements OnInit, OnDestroy {
	_tag: Motor_DOL_UDT;

	boxes: GridBoxWrappers;
	statusBox: BoxSettings;
	alarmsBox: BoxSettings;

	constructor(
		protected router: Router,
		protected idService: ComponentIdService,
		protected poller: PlcTagPollingService,
		protected writer: PlcTagWriteService,
		protected location: Location,
		protected activatedRoute: ActivatedRoute,
		protected store: Store<AppStore.AppState>
	) {
		super(router, idService, poller, writer, location, activatedRoute, store);
		this.initCoreComponents();
		this.speedManual = null;
		this.speedAuto = null;
		this.init();
	}

	ngOnInit() {}

	checkTagIsValid() {
		if (this._tag._Cmd._OnAuto.Value !== null) {
			this.objectInitialized = true;
		}
	}

	updateProperties() {
		this.name = this._tag.Name;
		this.updateStatus();
		this.updateAlarms();

		this.manualMode = this._tag._Status._ManualModeActive.Value;

		this.startButton = new Button({
			...this.startButton,
			disabled: this._tag._Cmd._OnManual.Value as boolean
		});
		this.stopButton = new Button({
			...this.stopButton,
			disabled: !this._tag._Cmd._OnManual.Value as boolean
		});

		this.showDirectionButtons = false;
		this.leftBttn = new Button({
			...this.leftBttn,
			disabled: this._tag._Cmd._DirectionManual.Value as boolean
		});
		this.rightBttn = new Button({
			...this.rightBttn,
			disabled: !this._tag._Cmd._DirectionManual.Value as boolean
		});

		this.speedManual = null;
		this.speedAuto = null;

		this.resetTag = this._tag._Cmd._Reset;
		super.updateProperties();

		this.commands.row = 1;
		this.commands.column = 1;
		this.commands.speedControl = null;

		this.boxes = new GridBoxWrappers([
			(this.commands as any) as BoxSettings,
			this.statusBox,
			this.alarmsBox
		]);
	}

	updateStatus() {
		this.statusBox = new BoxSettings({
			title: 'Status',
			row: 2,
			column: 1,
			content: [
				new LabelLed({
					label: $('Run auto command'),
					ledOnCmd: this._tag._Cmd._OnAuto.Value,
					color: INFO_LED
				}),
				new LabelLed({
					label: $('Run manual command'),
					ledOnCmd: this._tag._Cmd._OnManual.Value,
					color: INFO_LED
				}),
				new LabelLed({
					label: $('Interlocked'),
					ledOnCmd: this._tag._Status._Interlocked.Value,
					color: WARNING_LED
				}),
				new LabelLed({
					label: $('Running cmd from PLC'),
					ledOnCmd: this._tag._Status._Running.Value,
					color: INFO_LED
				})
			]
		});
	}

	updateAlarms() {
		this.alarmsBox = new BoxSettings({
			title: 'Alarms',
			row: 2,
			column: 2,
			content: [
				new LabelLed({
					label: $('Not on timed out'),
					ledOnCmd: this._tag._Alarms._NotOnTImedOut._Active.Value,
					color: ERROR_LED
				}),
				new LabelLed({
					label: $('Not off timed out'),
					ledOnCmd: this._tag._Alarms._NotOffTimedOut._Active.Value,
					color: ERROR_LED
				}),
				new LabelLed({
					label: $('Thermal protection NOK'),
					ledOnCmd: this._tag._Alarms._ThermalProtection._Active.Value,
					color: ERROR_LED
				})
			]
		});
	}

	startPressed() {
		this.writer.writeTag(this._tag._Cmd._OnManual, true);
	}
	stopPressed() {
		this.writer.writeTag(this._tag._Cmd._OnManual, false);
	}
	directinLefPressed() {
		this.writer.writeTag(this._tag._Cmd._DirectionManual, true);
	}
	directionRightPressed() {
		this.writer.writeTag(this._tag._Cmd._DirectionManual, false);
	}

	ngOnDestroy() {
		super.ngOnDestroy();
	}
}
