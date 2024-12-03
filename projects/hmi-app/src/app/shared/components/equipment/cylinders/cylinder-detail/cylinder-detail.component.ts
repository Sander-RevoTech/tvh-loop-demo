import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Location } from '@angular/common';
import { marker as $ } from '@biesbjerg/ngx-translate-extract-marker';

import * as AppStore from '@hmi-app/app-store';
import {
	ComponentIdService,
	PlcTagPollingService,
	PlcTagWriteService,
	ICommandsButtons,
	BoxSettings,
	GridBoxWrappers,
	CommandsSettings
} from '@revotechiscool/revo-tech-hmi-lib';

import { Cylinder_UDT } from 'plc/PLC_Main';
import { ControlComponentBase } from '@hmi-app/hmi/classes/control-component-base';

import {
	ILabelLed,
	ERROR_LED,
	WARNING_LED,
	INFO_LED,
	IButton,
	ButtonStates,
	LabelLed
} from '@revotechiscool/revo-tech-core-lib';

@Component({
	selector: 'app-cylinder-detail',
	templateUrl: './cylinder-detail.component.html',
	styleUrls: ['./cylinder-detail.component.scss']
})
export class CylinderDetailComponent extends ControlComponentBase
	implements OnInit, OnDestroy {
	_tag: Cylinder_UDT;

	statusBox: BoxSettings;
	alarmBox: BoxSettings;

	_gridBoxSettings: GridBoxWrappers = {
		boxes: []
	};

	bttnIn: IButton;
	bttnOut: IButton;
	bttnReset: IButton;

	commands: CommandsSettings;

	constructor(
		protected router: Router,
		protected idService: ComponentIdService,
		protected poller: PlcTagPollingService,
		protected writer: PlcTagWriteService,
		protected location: Location,
		protected activatedRoute: ActivatedRoute,
		private crf: ChangeDetectorRef,
		protected store: Store<AppStore.AppState>
	) {
		super(router, idService, poller, writer, location, activatedRoute, store);
		this.initCoreComponents();
		this.init();
	}

	ngOnInit() {}

	initCoreComponents() {
		this.bttnIn = {
			value: $('MOVE IN'),
			flash: false,
			state: ButtonStates.success,
			onActionMouseDown: this.sentCylinderIn.bind(this)
		};
		this.bttnOut = {
			value: $('MOVE OUT'),
			flash: false,
			state: ButtonStates.success,
			onActionMouseDown: this.sentCylinderOut.bind(this)
		};
		this.bttnReset = {
			value: $('RESET'),
			flash: false,
			state: ButtonStates.reset,
			onActionMouseDown: this.resetbttn.bind(this)
		};
	}

	checkTagIsValid() {
		if (this._tag._Cmd._OutAuto.Value !== null) {
			this.objectInitialized = true;
		}
	}

	updateProperties() {
		this.name = this._tag.Name;
		this.updateStatus();
		this.updateAlarms();

		this.manualMode = this._tag._Status._ManualModeActive.Value as boolean;

		this.bttnIn.disabled = this._tag._Cmd._InManualHMI.Value as boolean;
		this.bttnOut.disabled = this._tag._Cmd._OutManualHMI.Value as boolean;

		this.commands = new CommandsSettings({
			row: 0,
			column: 0,
			startStop: {
				startbttn: { ...this.bttnIn },
				stopbttn: { ...this.bttnOut }
			},
			bttnReset: this.bttnReset,
			manualModeActive: this.manualMode,
			direction: null,
			speedControl: null
		});

		this._gridBoxSettings = new GridBoxWrappers([
			(this.commands as any) as BoxSettings,
			this.statusBox,
			this.alarmBox
		]);

		this.showControl = true;
		this.crf.detectChanges();
	}

	updateStatus() {
		this.statusBox = new BoxSettings({
			row: 0,
			column: 1,
			title: $('STATUS'),
			content: [
				new LabelLed({
					label: $('In Position'),
					ledOnCmd: this._tag._Status._Position.Value === -1,
					color: INFO_LED
				}),
				new LabelLed({
					label: $('Out position'),
					ledOnCmd: this._tag._Status._Position.Value === 1,
					color: INFO_LED
				}),
				new LabelLed({
					label: $('Interlocked'),
					ledOnCmd: this._tag._Status._Interlocked.Value,
					color: WARNING_LED
				}),
				new LabelLed({
					label: $('Out command auto'),
					ledOnCmd: this._tag._Cmd._OutAuto.Value,
					color: INFO_LED
				}),
				new LabelLed({
					label: $('In command auto'),
					ledOnCmd: this._tag._Cmd._InAuto.Value,
					color: INFO_LED
				}),
				new LabelLed({
					label: $('Out command manual'),
					ledOnCmd: this._tag._Cmd._OutManual.Value,
					color: INFO_LED
				}),
				new LabelLed({
					label: $('In command manual'),
					ledOnCmd: this._tag._Cmd._InManual.Value,
					color: INFO_LED
				})
			]
		});
	}

	updateAlarms() {
		this.alarmBox = new BoxSettings({
			row: 1,
			column: 1,
			title: $('ALARMS'),
			content: [
				new LabelLed({
					label: $('In position feedback not received'),
					ledOnCmd: this._tag._Alarms._NotIn._Active.Value,
					color: ERROR_LED
				}),
				new LabelLed({
					label: $('Out position feedback not received'),
					ledOnCmd: this._tag._Alarms._NotOut._Active.Value,
					color: ERROR_LED
				})
			]
		});
	}

	sentCylinderIn() {
		this.writer.writeTag(this._tag._Cmd._InManualHMI, true);
		this.writer.writeTag(this._tag._Cmd._OutManualHMI, false);
	}

	sentCylinderOut() {
		this.writer.writeTag(this._tag._Cmd._InManualHMI, false);
		this.writer.writeTag(this._tag._Cmd._OutManualHMI, true);
	}

	resetbttn() {
		this.writer.writeTag(this.resetTag, true);
	}

	ngOnDestroy() {
		super.ngOnDestroy();
	}
}
