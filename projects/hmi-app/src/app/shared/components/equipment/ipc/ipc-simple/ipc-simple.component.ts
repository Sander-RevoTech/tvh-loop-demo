import {
	Component,
	OnInit,
	Input,
	ChangeDetectionStrategy,
	AfterViewInit,
	ChangeDetectorRef,
	OnDestroy
} from '@angular/core';
import { Store } from '@ngrx/store';
import { Router, ActivatedRoute } from '@angular/router';
import * as AppStore from '@hmi-app/app-store';

import { objectChanged } from '@revotechiscool/revo-tech-core-lib';
import {
	ComponentIdBase,
	ComponentIdService,
	ISimpleIPC,
	PlcTagPollingService,
	PlcTagWriteService
} from '@revotechiscool/revo-tech-hmi-lib';
import { PLC_IPC_ROUTING_DATA_UDT } from 'plc/PLC_MAIN';

@Component({
	selector: 'app-ipc-simple',
	templateUrl: './ipc-simple.component.html',
	styleUrls: ['./ipc-simple.component.scss'],
	changeDetection: ChangeDetectionStrategy.Default
})
export class IpcSimpleComponent extends ComponentIdBase
	implements OnInit, AfterViewInit, OnDestroy {
	_ipc: PLC_IPC_ROUTING_DATA_UDT;
	_ipcSimple: ISimpleIPC;

	@Input() set settings(value: PLC_IPC_ROUTING_DATA_UDT) {
		if (objectChanged(value, this._ipc)) {
			if (value) {
				this._ipc = value;
				this.registerTag();

				// this._ipcSimple = {
				// 	// alarm: this._ipc._IPC_STATUS._ResultStatus._pulse._Fail
				// 	// 	.Value as boolean,
				// 	// name: this._ipc.Name.substr(1),
				// 	// success: this._ipc._IPC_STATUS._ResultStatus._static.Value as boolean
				// };
			}
		}
	}

	constructor(
		protected router: Router,
		protected idService: ComponentIdService,
		protected poller: PlcTagPollingService,
		protected writer: PlcTagWriteService,
		protected store: Store<AppStore.AppState>
	) {
		super(idService);
	}

	ngOnInit() {}

	ngAfterViewInit() {}

	registerTag() {
		if (!this.tagsregisterd) {
			// this.poller.addTag(this._ipc._Result._Succes, this);
			// this.poller.addTag(this._ipc._Result._TimeOut, this);
		}
	}

	removeTags() {
		// this.poller.removeTag(this._ipc._Result._Succes, this);
		// this.poller.removeTag(this._ipc._Result._TimeOut, this);
	}

	onClick() {
		this.router.navigate(['ipc-detail'], {
			queryParams: { id: this._ipc.Id },
			replaceUrl: false
		});
	}

	ngOnDestroy() {
		this.removeTags();
	}
}
