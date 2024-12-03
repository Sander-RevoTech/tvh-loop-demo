import {
	Component,
	OnInit,
	Input,
	ChangeDetectionStrategy,
	AfterViewInit,
	ChangeDetectorRef,
	OnDestroy
} from '@angular/core';

import { Router } from '@angular/router';
import { marker as $ } from '@biesbjerg/ngx-translate-extract-marker';

import {
	ComponentIdBase,
	ComponentIdService,
	ISimpleScanner,
	PlcTagPollingService,
	PlcTagWriteService
} from '@revotechiscool/revo-tech-hmi-lib';
import {
	BoolPlcTag,
	WordlcTag,
	UInt16PlcTag,
	COGNEX_DATAMAN_LOGIC_UDT
} from 'plc/PLC_Main';
import { cloneDeep } from 'lodash';
import { controlPages, pages } from '@hmi-src/app/pages';

type scannerType = COGNEX_DATAMAN_LOGIC_UDT;

@Component({
	selector: 'app-barcode-scanner-simple',
	templateUrl: './barcode-scanner-simple.component.html',
	styleUrls: ['./barcode-scanner-simple.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class BarcodeScannerSimpleComponent extends ComponentIdBase
	implements OnInit, AfterViewInit, OnDestroy {
	alarmActive: WordlcTag;
	goodread: BoolPlcTag;
	badread: BoolPlcTag;

	goodReads: UInt16PlcTag;
	badReads: UInt16PlcTag;

	_scanner: scannerType;
	_scannerSimple: ISimpleScanner;

	@Input() set scanner(value: scannerType) {
		if (value) {
			this._scanner = cloneDeep(value);
			this.transferTags();
			this.registerTag();

			if (this._scanner.Type === COGNEX_DATAMAN_LOGIC_UDT.Design) {
				this._scannerSimple = {
					alarmActive: this.alarmActive.Value as number > 0,
					badRead: false,
					goodRead: true,
					name: this._scanner.Name.substr(1),
					badreads: 0,
					goodreads: this.goodReads.Value as number
				};
			}

			this.crf.detectChanges();
		}
	}

	constructor(
		protected router: Router,
		protected idService: ComponentIdService,
		protected poller: PlcTagPollingService,
		protected writer: PlcTagWriteService,
		private crf: ChangeDetectorRef
	) {
		super(idService);
	}

	ngOnInit() { }

	ngAfterViewInit() { }

	transferTags() {
		if (this._scanner.Type === COGNEX_DATAMAN_LOGIC_UDT.Design) {
			const x: COGNEX_DATAMAN_LOGIC_UDT = this
				._scanner as COGNEX_DATAMAN_LOGIC_UDT;
			this.alarmActive = x._Alarms._status;

			this.goodread = x._ReadingResult._GoodRead;
			this.badread = x._ReadingResult._BadRead;

			this.goodReads = x._DiagNostic._GoodReads;
			this.badReads = x._DiagNostic._BadReads;
		}
	}

	registerTag() {
		if (!this.tagsregisterd) {
			this.tagsregisterd = true;

			this.poller.addTag(this.alarmActive, this);
			this.poller.addTag(this.goodReads, this);
			this.poller.addTag(this.badReads, this);

			if (this._scanner.Type === COGNEX_DATAMAN_LOGIC_UDT.Design) {
				this.poller.addTag(this.goodread, this);
				this.poller.addTag(this.badReads, this);
			}
		}
	}

	removeTags() {
		this.poller.removeTag(this.alarmActive, this);
		this.poller.removeTag(this.goodReads, this);

		if (this._scanner.Type === COGNEX_DATAMAN_LOGIC_UDT.Design) {
			this.poller.removeTag(this.goodread, this);
			this.poller.removeTag(this.badread, this);
			this.poller.removeTag(this.badReads, this);
		}
	}

	onClick() {
		if (this._scanner.Type === COGNEX_DATAMAN_LOGIC_UDT.Design) {
			this.router.navigate([controlPages.barcodeScannerDetail], {
				queryParams: { id: this._scanner.Id },
				replaceUrl: false
			});
		}
	}

	ngOnDestroy() {
		this.removeTags();
	}
}
