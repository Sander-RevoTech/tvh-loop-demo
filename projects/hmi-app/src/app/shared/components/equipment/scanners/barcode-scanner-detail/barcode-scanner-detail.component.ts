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

import { COGNEX_DATAMAN_LOGIC_UDT } from 'plc/PLC_MAIN';
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
	selector: 'app-barcode-scanner-detail',
	templateUrl: './barcode-scanner-detail.component.html',
	styleUrls: ['./barcode-scanner-detail.component.scss']
})
export class BarcodeScannerDetailComponent extends ControlComponentBase
	implements OnInit, OnDestroy {
	_tag: COGNEX_DATAMAN_LOGIC_UDT;

	bttnScanOn: Button;
	bttnScanOff: Button;
	bttnResetCounters: Button;
	bttnReset: Button;

	commands: CommandsSettings;

	boxes: GridBoxWrappers = new GridBoxWrappers([]);
	StatusBox: BoxSettings;
	AlarmsBox: BoxSettings;
	DiagnosticsBox: BoxSettings;
	ResultBox: BoxSettings;

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
		this.resetTag = null;
	}

	ngOnInit() {}

	initCoreComponents() {
		this.bttnScanOn = new Button({
			value: $('SCANNER ON'),
			onActionMouseDown: this.scannerOn.bind(this),
			state: ButtonStates.success,
			icon: 'play_arrow'
		});
		this.bttnScanOff = new Button({
			value: $('SCANNER OFF'),
			onActionMouseDown: this.scannerOff.bind(this),
			state: ButtonStates.success,
			icon: 'stop'
		});
		this.bttnReset = new Button({
			value: $('RESET'),
			onActionMouseDown: this.bttnResetClick.bind(this),
			state: ButtonStates.reset,
			icon: 'sync'
		});
		this.bttnResetCounters = new Button({
			value: $('RESET DIAGNOSTICS'),
			onActionMouseDown: this.bttnResetDiagnosticsClick.bind(this),
			state: ButtonStates.reset,
			icon: 'sync'
		});
	}

	checkTagIsValid() {
		if (this._tag._Cmd !== null) {
			this.objectInitialized = true;
		}
	}

	updateProperties() {
		this.name = this._tag.Name;
		this.updateStatus();
		this.updateAlarms();

		if (this._tag.Type === COGNEX_DATAMAN_LOGIC_UDT.Design) {
			const x: COGNEX_DATAMAN_LOGIC_UDT = this._tag as any;
			this.manualMode = true; //x._Status..Value;

			this.bttnScanOn.disabled = x._Cmd._ScanManual.Value as boolean;
			this.bttnScanOff.disabled = !x._Cmd._ScanManual.Value as boolean;
		}

		this.commands = new CommandsSettings({
			row: 1,
			column: 1,
			manualModeActive: this.manualMode,
			startStop: { startbttn: this.bttnScanOn, stopbttn: this.bttnScanOff },
			bttnReset: this.bttnReset,
			direction: null,
			speedControl: null,
			buttonsSize: ButtonsSize.large
		});

		this.boxes = new GridBoxWrappers([
			(this.commands as unknown) as BoxSettings,
			this.StatusBox,
			this.AlarmsBox,
			this.DiagnosticsBox,
			this.ResultBox
		]);

		this.showControl = true;
	}

	updateStatus() {
		this.StatusBox = new BoxSettings({
			title: $('Status'),
			row: 2,
			column: 1,
			content: []
		});

		this.DiagnosticsBox = new BoxSettings({
			title: $('Diagnostics'),
			buttonSize: null,
			row: 1,
			column: 3,
			content: []
		});

		this.ResultBox = new BoxSettings({
			row: 1,
			column: 2,
			title: $('Result'),
			content: []
		});

		//Status
		if (this._tag.Type === COGNEX_DATAMAN_LOGIC_UDT.Design) {
			const x: COGNEX_DATAMAN_LOGIC_UDT = this._tag as any;

			this.StatusBox.content = [
				new LabelLed({
					label: $('Scanning on auto'),
					ledOnCmd: x._Cmd._ScanAuto.Value,
					color: INFO_LED
				}),
				new LabelLed({
					label: $('Scanning on manual'),
					ledOnCmd: x._Cmd._ScanManual.Value,
					color: INFO_LED
				}),
				new LabelLed({
					label: $('Ready for new scan'),
					ledOnCmd: x._Status._ReadyForNewScan.Value,
					color: INFO_LED
				})
			];
		}

		//Diagnostics
		if (this._tag.Type === COGNEX_DATAMAN_LOGIC_UDT.Design) {
			const x: COGNEX_DATAMAN_LOGIC_UDT = this._tag as any;

			this.DiagnosticsBox.content = [
				new LabelText({
					label: $('Good reads'),
					text: x._DiagNostic._GoodReads.Value
				}),
				new LabelText({
					label: $('Bad reads'),
					text: x._DiagNostic._BadReads.Value
				}),
				new LabelText({
					label: $('Time outs'),
					text: x._DiagNostic._TimeOuts.Value
				}),
				new LabelText({
					label: $('Total scans'),
					text: Number(x._DiagNostic._Scans.Value)
				}),
				this.bttnResetCounters
			];
		}

		//Result
		if (this._tag.Type === COGNEX_DATAMAN_LOGIC_UDT.Design) {
			const x: COGNEX_DATAMAN_LOGIC_UDT = this._tag as any;

			this.ResultBox.content = [
				new LabelLed({
					label: $('Good read'),
					ledOnCmd: x._ReadingResult._GoodRead.Value,
					color: INFO_LED
				}),
				new LabelLed({
					label: $('Bad read'),
					ledOnCmd: !x._ReadingResult._BadRead.Value,
					color: ERROR_LED
				}),
				new LabelText({
					label: $('Barcode'),
					text: x._ReadingResult._Barcode.Value
				})
			];
		}
	}

	updateAlarms() {
		this.AlarmsBox = new BoxSettings({
			row: 2,
			column: 2,
			title: $('Alarms'),
			content: []
		});

		if (this._tag.Type === COGNEX_DATAMAN_LOGIC_UDT.Design) {
			const x: COGNEX_DATAMAN_LOGIC_UDT = this._tag as any;
			this.AlarmsBox.content = [
				new LabelLed({
					label: $('Scanner not connected'),
					ledOnCmd: x._Alarms._NotConnected.Value as boolean,
					color: ERROR_LED
				}),
				new LabelLed({
					label: $('Timed out reading barcode'),
					ledOnCmd: x._Alarms._TimeOutReading.Value as boolean,
					color: ERROR_LED
				}),
				new LabelLed({
					label: $('Error from scanner'),
					ledOnCmd: x._Alarms._ErrorFromScanner.Value as boolean,
					color: ERROR_LED
				})
			];
		}
	}

	scannerOn() {
		if (this._tag.Type === COGNEX_DATAMAN_LOGIC_UDT.Design) {
			const x: COGNEX_DATAMAN_LOGIC_UDT = this._tag as any;
			this.writer.writeTag(x._Cmd._ScanManual, true);
		}
	}

	scannerOff() {
		if (this._tag.Type === COGNEX_DATAMAN_LOGIC_UDT.Design) {
			const x: COGNEX_DATAMAN_LOGIC_UDT = this._tag as any;
			this.writer.writeTag(x._Cmd._ScanManual, false);
		}
	}

	bttnResetClick() {
		if (this._tag.Type === COGNEX_DATAMAN_LOGIC_UDT.Design) {
			const x: COGNEX_DATAMAN_LOGIC_UDT = this._tag as any;
			this.writer.writeTag(x._Cmd._Reset, true);
		}
	}

	bttnResetDiagnosticsClick() {
		if (this._tag.Type === COGNEX_DATAMAN_LOGIC_UDT.Design) {
			const x: COGNEX_DATAMAN_LOGIC_UDT = this._tag as any;
			this.writer.writeTag(x._DiagNostic._BadReads, 0);
			this.writer.writeTag(x._DiagNostic._GoodReads, 0);
			this.writer.writeTag(x._DiagNostic._MissedTrigger, 0);
			this.writer.writeTag(x._DiagNostic._OutOfSync, 0);
			this.writer.writeTag(x._DiagNostic._Scans, 0);
			this.writer.writeTag(x._DiagNostic._TimeOuts, 0);
		}
	}

	ngOnDestroy() {
		super.ngOnDestroy();
	}
}
