import {
	Component,
	OnInit,
	OnDestroy,
	ChangeDetectorRef,
	ChangeDetectionStrategy
} from '@angular/core';
import { Store } from '@ngrx/store';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { marker as $ } from '@biesbjerg/ngx-translate-extract-marker';

import * as AppStore from '@hmi-app/app-store';

import { PLC_IPC_ROUTING_DATA_UDT } from 'plc/PLC_MAIN';
import { ControlComponentBase } from '@hmi-app/hmi/classes/control-component-base';
import {
	ComponentIdService,
	PlcTagPollingService,
	PlcTagWriteService,
	BoxSettings,
	GridBoxWrappers,
	CommandsSettings
} from '@revotechiscool/revo-tech-hmi-lib';
import {
	ILabelLed,
	ERROR_LED,
	WARNING_LED,
	INFO_LED,
	ILabelText,
	IButton,
	ButtonStates,
	Button,
	LabelLed,
	LabelText,
	ButtonsSize,
	Unit
} from '@revotechiscool/revo-tech-core-lib';

@Component({
	selector: 'app-ipc-detail',
	templateUrl: './ipc-detail.component.html',
	styleUrls: ['./ipc-detail.component.scss']
})
export class IpcComponent extends ControlComponentBase
	implements OnInit, OnDestroy {
	_tag: PLC_IPC_ROUTING_DATA_UDT;

	bttnResetCounters: Button;

	boxes: GridBoxWrappers = new GridBoxWrappers([]);
	StatusBox: BoxSettings;
	RequestResultBox: BoxSettings;
	DiagnosticsBox: BoxSettings;

	constructor(
		protected router: Router,
		protected idService: ComponentIdService,
		protected poller: PlcTagPollingService,
		protected writer: PlcTagWriteService,
		protected location: Location,
		private crf: ChangeDetectorRef,
		protected activatedRoute: ActivatedRoute,
		protected store: Store<AppStore.AppState>
	) {
		super(router, idService, poller, writer, location, activatedRoute, store);
		this.initCoreComponents();
		this.init();
	}

	ngOnInit() {}

	initCoreComponents() {
		this.bttnResetCounters = new Button({
			value: $('RESET DIAGNOSTICS'),
			onActionMouseDown: this.bttnResetDiagnosticsClick.bind(this),
			state: ButtonStates.reset,
			icon: 'sync'
		});
	}

	checkTagIsValid() {
		// if (this._tag._IPC_STATUS._Diagnostics._Successes.Value !== null) {
		// 	this.objectInitialized = true;
		// }
	}

	updateProperties() {
		this.name = this._tag.Name;
		this.updateStatus();

		this.boxes = new GridBoxWrappers([
			this.StatusBox,
			this.DiagnosticsBox,
			this.RequestResultBox
		]);

		this.showControl = true;
	}

	updateStatus() {
		this.StatusBox = new BoxSettings({
			title: $('Status'),
			row: 2,
			column: 2,
			content: [
				// new LabelLed({
				// 	label: $('Success request'),
				// 	ledOnCmd: this._tag._IPC_STATUS._ResultStatus._static._Success.Value,
				// 	color: INFO_LED
				// }),
				// new LabelLed({
				// 	label: $('Timed out request'),
				// 	ledOnCmd: this._tag._IPC_STATUS._ResultStatus._static._TimeOut.Value,
				// 	color: INFO_LED
				// })
			]
		});

		this.DiagnosticsBox = new BoxSettings({
			title: $('Diagnostics'),
			buttonSize: null,
			row: 2,
			column: 1,
			content: [
				// new LabelText({
				// 	label: $('Good requests'),
				// 	text: this._tag._IPC_STATUS._Diagnostics._Successes.Value
				// }),
				// new LabelText({
				// 	label: $('Timed out requests'),
				// 	text: this._tag._IPC_STATUS._Diagnostics._TimeOuts.Value
				// }),
				// new LabelText({
				// 	label: $('Out of sync request'),
				// 	text: this._tag._IPC_STATUS._Diagnostics._OutOfSync.Value
				// }),
				// new LabelText({
				// 	label: $('Communication time'),
				// 	text: this._tag._IPC_STATUS._Diagnostics._LastCommunicationTime.Value
				// }),
				// this.bttnResetCounters
			]
		});

		this.RequestResultBox = new BoxSettings({
			row: 1,
			column: 1,
			title: $('Request-Result'),
			content: [
				new LabelText({
					label: $('Requested barcode'),
					text: 'TO DO'
				}),
				new LabelText({
					label: $('Result destination'),
					text: 'TO DO'
				})
			]
		});
	}

	bttnResetClick() {
		this.writer.writeTag(this.resetTag, true);
	}

	bttnResetDiagnosticsClick() {
		// this.writer.writeTag(this._tag._IPC_STATUS._Diagnostics._Successes, 0);
		// this.writer.writeTag(this._tag._IPC_STATUS._Diagnostics._TimeOuts, 0);
		// this.writer.writeTag(this._tag._IPC_STATUS._Diagnostics._OutOfSync, 0);
	}

	ngOnDestroy() {
		super.ngOnDestroy();
	}
}
