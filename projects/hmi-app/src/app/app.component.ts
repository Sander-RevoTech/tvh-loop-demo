import {
	Component,
	AfterViewInit,
	OnInit,
	ViewContainerRef,
	ViewChild,
	HostListener,
	ElementRef
} from '@angular/core';
import { Router } from '@angular/router';

import * as AppStore from '@hmi-app/app-store';
import * as HmiStore from '@hmi-app/hmi';

import {
	DynamicCrudService,
	MatKeyboardService,
	ZoomService
} from '@revotechiscool/revo-tech-core-lib';
import { PlcTagWriteService } from '@revotechiscool/revo-tech-hmi-lib';

import { StartupService } from '@hmi-app/hmi';
import { Store } from '@ngrx/store';

import { BoolPlcTag } from 'plc/PLC_MAIN';
import { environment } from '@hmi-src/environments/environment';
import { clamp } from 'lodash';
import { MatDrawerContainer } from '@angular/material/sidenav';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	defaultLocale: string;
	plcInitialized: boolean;
	showNotifications = environment.showNotifications;
	private resetTag: BoolPlcTag;

	constructor(
		private startupService: StartupService,
		private writer: PlcTagWriteService,
		private router: Router,
		private store: Store<AppStore.AppState>,
		private vcRef: ViewContainerRef,
		private keyBoard: MatKeyboardService,
		private dynCrudService: DynamicCrudService,
		private zoomService: ZoomService
	) {
		this.router.navigate(['loading'], { replaceUrl: false });
		this.keyBoard.appViewContainerRef = this.vcRef;
		this.zoomService.resetZoomOnNavigation = true;

		this.store
			.select('plcInterface')
			.subscribe((state: HmiStore.IPlcInterfaceState) => {
				this.plcInitialized = state.initialized;
				this.resetTag = state.PLCs.plcMain.Dbs.HMI_DB_DB46._ResetFromHMI;
			});
	}

	async ngOnInit(): Promise<void> {
		this.dynCrudService.url =
			environment.dataCollector.Ip + ':' + environment.dataCollector.Port;
		await this.dynCrudService.getAllViewModels();
	}

	onReset() {
		this.writer.writeTag(this.resetTag, true);
	}
}
