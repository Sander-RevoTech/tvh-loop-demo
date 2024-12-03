import {
	Component,
	OnInit,
	OnDestroy,
	ChangeDetectorRef,
	AfterViewInit,
	HostBinding
} from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { marker as $ } from '@biesbjerg/ngx-translate-extract-marker';

import * as AppStore from '@hmi-app/app-store';
import * as HmiStore from '@hmi-app/hmi';

import {
	ComponentIdService,
	ComponentIdBase,
	PlcTagPollingService,
	PlcTagWriteService,
	IHideConveyorItems,
} from '@revotechiscool/revo-tech-hmi-lib';
import { fadeInAnimation } from '@revotechiscool/revo-tech-core-lib';
import { Conveyor_UDT } from 'projects/plc';
import { IMotor } from '@hmi-app/hmi';
import { COGNEX_DATAMAN_LOGIC_UDT } from 'plc/PLC_Main';


@Component({
	selector: 'app-zone-100',
	templateUrl: './zone-100.component.html',
	styleUrls: ['./zone-100.component.scss'],
	animations: [fadeInAnimation]
})
export class Zone100Component extends ComponentIdBase
	implements OnInit, AfterViewInit, OnDestroy {
	hideSens: IHideConveyorItems = {
		motor: false,
		name: false,
		sensStart: true,
		sensorEnd: true
	};

	hideAll: IHideConveyorItems = {
		motor: true,
		name: false,
		sensStart: true,
		sensorEnd: true
	};

	hideStart: IHideConveyorItems = {
		motor: false,
		name: false,
		sensStart: true,
		sensorEnd: false
	};

	hideEnd: IHideConveyorItems = {
		motor: false,
		name: false,
		sensStart: false,
		sensorEnd: true
	};

	//Other


	// Conveyor objects
	CONV_101: Conveyor_UDT;
	CONV_102L: Conveyor_UDT;
	CONV_102R: Conveyor_UDT;
	CONV_103L: Conveyor_UDT;
	CONV_103R: Conveyor_UDT;
	CONV_104L: Conveyor_UDT;
	CONV_104R: Conveyor_UDT;
	CONV_105L: Conveyor_UDT;
	CONV_105R: Conveyor_UDT;
	CONV_106R: Conveyor_UDT;
	CONV_107R: Conveyor_UDT;
	CONV_108L: Conveyor_UDT;
	CONV_108R: Conveyor_UDT;
	CONV_109L: Conveyor_UDT;
	CONV_109R: Conveyor_UDT;
	CONV_110L: Conveyor_UDT;
	CONV_110R: Conveyor_UDT;
	CONV_111L: Conveyor_UDT;
	CONV_111R: Conveyor_UDT;
	CONV_112R: Conveyor_UDT;
	CONV_113L: Conveyor_UDT;
	CONV_113R: Conveyor_UDT;
	CONV_114L: Conveyor_UDT;
	CONV_114R: Conveyor_UDT;
	CONV_115L: Conveyor_UDT;
	CONV_115R: Conveyor_UDT;
	CONV_201R_BELTS: Conveyor_UDT;
	CONV_203R_BELTS: Conveyor_UDT;
	CONV_301R: Conveyor_UDT;
	CONV_302L: Conveyor_UDT;
	CONV_302R: Conveyor_UDT;
	CONV_303L: Conveyor_UDT;
	CONV_303R: Conveyor_UDT;
	CONV_304L: Conveyor_UDT;
	CONV_304R: Conveyor_UDT;
	CONV_305R: Conveyor_UDT;


	// Motor objects
	MOT_101: IMotor;
	MOT_102L: IMotor;
	MOT_102R: IMotor;
	MOT_103L: IMotor;
	MOT_103R: IMotor;
	MOT_104L: IMotor;
	MOT_104R: IMotor;
	MOT_105L: IMotor;
	MOT_105R: IMotor;
	MOT_106L: IMotor;
	MOT_106R: IMotor;
	MOT_107L: IMotor;
	MOT_107R: IMotor;
	MOT_108L: IMotor;
	MOT_108R: IMotor;
	MOT_109L: IMotor;
	MOT_109R: IMotor;
	MOT_110L: IMotor;
	MOT_110R: IMotor;
	MOT_111L: IMotor;
	MOT_111R: IMotor;
	MOT_112L: IMotor;
	MOT_112R: IMotor;
	MOT_113L: IMotor;
	MOT_113R: IMotor;
	MOT_114L: IMotor;
	MOT_114R: IMotor;
	MOT_115L: IMotor;
	MOT_115R: IMotor;
	MOT_201R_Belts: IMotor;
	MOT_201L_Lift: IMotor;
	MOT_202L: IMotor;
	MOT_202R: IMotor;
	MOT_203L_Lift: IMotor;
	MOT_203R_Belts: IMotor;
	MOT_301L: IMotor;
	MOT_301R: IMotor;
	MOT_302L: IMotor;
	MOT_302R: IMotor;
	MOT_303L: IMotor;
	MOT_303R: IMotor;
	MOT_304L: IMotor;
	MOT_304R: IMotor;
	MOT_305L: IMotor;
	MOT_305R: IMotor;


	//Misc
	SCAN_102: COGNEX_DATAMAN_LOGIC_UDT;

	private subscription: Subscription;
	@HostBinding('@fadeInAnimation') fadeIn() { }

	constructor(
		private store: Store<AppStore.AppState>,
		private crf: ChangeDetectorRef,
		private idService: ComponentIdService,
		private poller: PlcTagPollingService,
		private writer: PlcTagWriteService
	) {
		super(idService);
		this.updateData();
	}

	ngOnInit() { }

	ngAfterViewInit() { }

	updateData() {
		this.subscription = this.store
			.select('plcInterface')
			.subscribe((state: HmiStore.IPlcInterfaceState) => {
				this.updateConveyors(state);
				this.updateMotors(state);
				this.updateMiscs(state);
			});
	}

	ngOnDestroy(): void {
		this.subscription.unsubscribe();
	}

	updateMiscs(state: HmiStore.IPlcInterfaceState) {
		this.SCAN_102 = { ...state.PLCs.plcMain.Dbs.Scanners_DB_DB4._SCAN_100 };
	}

	updateConveyors(state: HmiStore.IPlcInterfaceState) {

		this.CONV_101 = { ...state.PLCs.plcMain.Dbs.CONV_DB_DB49._CONV_101 };
		this.CONV_102L = { ...state.PLCs.plcMain.Dbs.CONV_DB_DB49._CONV_102L };
		this.CONV_102R = { ...state.PLCs.plcMain.Dbs.CONV_DB_DB49._CONV_102R };
		this.CONV_103L = { ...state.PLCs.plcMain.Dbs.CONV_DB_DB49._CONV_103L };
		this.CONV_103R = { ...state.PLCs.plcMain.Dbs.CONV_DB_DB49._CONV_103R };
		this.CONV_104L = { ...state.PLCs.plcMain.Dbs.CONV_DB_DB49._CONV_104L };
		this.CONV_104R = { ...state.PLCs.plcMain.Dbs.CONV_DB_DB49._CONV_104R };
		this.CONV_105L = { ...state.PLCs.plcMain.Dbs.CONV_DB_DB49._CONV_105L };
		this.CONV_105R = { ...state.PLCs.plcMain.Dbs.CONV_DB_DB49._CONV_105R };
		this.CONV_106R = { ...state.PLCs.plcMain.Dbs.CONV_DB_DB49._CONV_106R };
		this.CONV_107R = { ...state.PLCs.plcMain.Dbs.CONV_DB_DB49._CONV_107R };
		this.CONV_108L = { ...state.PLCs.plcMain.Dbs.CONV_DB_DB49._CONV_108L };
		this.CONV_108R = { ...state.PLCs.plcMain.Dbs.CONV_DB_DB49._CONV_108R };
		this.CONV_109L = { ...state.PLCs.plcMain.Dbs.CONV_DB_DB49._CONV_109L };
		this.CONV_109R = { ...state.PLCs.plcMain.Dbs.CONV_DB_DB49._CONV_109R };
		this.CONV_110L = { ...state.PLCs.plcMain.Dbs.CONV_DB_DB49._CONV_110L };
		this.CONV_110R = { ...state.PLCs.plcMain.Dbs.CONV_DB_DB49._CONV_110R };
		this.CONV_111L = { ...state.PLCs.plcMain.Dbs.CONV_DB_DB49._CONV_111L };
		this.CONV_111R = { ...state.PLCs.plcMain.Dbs.CONV_DB_DB49._CONV_111R };
		this.CONV_112R = { ...state.PLCs.plcMain.Dbs.CONV_DB_DB49._CONV_112R };
		this.CONV_113L = { ...state.PLCs.plcMain.Dbs.CONV_DB_DB49._CONV_113L };
		this.CONV_113R = { ...state.PLCs.plcMain.Dbs.CONV_DB_DB49._CONV_113R };
		this.CONV_114L = { ...state.PLCs.plcMain.Dbs.CONV_DB_DB49._CONV_114L };
		this.CONV_114R = { ...state.PLCs.plcMain.Dbs.CONV_DB_DB49._CONV_114R };
		this.CONV_115L = { ...state.PLCs.plcMain.Dbs.CONV_DB_DB49._CONV_115L };
		this.CONV_115R = { ...state.PLCs.plcMain.Dbs.CONV_DB_DB49._CONV_115R };
		this.CONV_201R_BELTS = { ...state.PLCs.plcMain.Dbs.CONV_DB_DB49._CONV_201R_BELTS };
		this.CONV_203R_BELTS = { ...state.PLCs.plcMain.Dbs.CONV_DB_DB49._CONV_203R_BELTS };
		this.CONV_301R = { ...state.PLCs.plcMain.Dbs.CONV_DB_DB49._CONV_301R };
		this.CONV_302L = { ...state.PLCs.plcMain.Dbs.CONV_DB_DB49._CONV_302L };
		this.CONV_302R = { ...state.PLCs.plcMain.Dbs.CONV_DB_DB49._CONV_302R };
		this.CONV_303L = { ...state.PLCs.plcMain.Dbs.CONV_DB_DB49._CONV_303L };
		this.CONV_303R = { ...state.PLCs.plcMain.Dbs.CONV_DB_DB49._CONV_303R };
		this.CONV_304L = { ...state.PLCs.plcMain.Dbs.CONV_DB_DB49._CONV_304L };
		this.CONV_304R = { ...state.PLCs.plcMain.Dbs.CONV_DB_DB49._CONV_304R };
		this.CONV_305R = { ...state.PLCs.plcMain.Dbs.CONV_DB_DB49._CONV_305R };

	}

	updateMotors(state: HmiStore.IPlcInterfaceState) {

		this.MOT_101 = { ...state.PLCs.plcMain.Dbs.DRV_DB_DB43._DRV_101_DRV_1 };
		this.MOT_102L = { ...state.PLCs.plcMain.Dbs.MOT_CLX_DB_DB103._MOT_102L };
		this.MOT_102R = { ...state.PLCs.plcMain.Dbs.MOT_CLX_DB_DB103._MOT_102R };
		this.MOT_103L = { ...state.PLCs.plcMain.Dbs.MOT_CLX_DB_DB103._MOT_103L };
		this.MOT_103R = { ...state.PLCs.plcMain.Dbs.MOT_CLX_DB_DB103._MOT_103R };
		this.MOT_104L = { ...state.PLCs.plcMain.Dbs.MOT_CLX_DB_DB103._MOT_104L };
		this.MOT_104R = { ...state.PLCs.plcMain.Dbs.MOT_CLX_DB_DB103._MOT_104R };
		this.MOT_105L = { ...state.PLCs.plcMain.Dbs.MOT_CLX_DB_DB103._MOT_105L };
		this.MOT_105R = { ...state.PLCs.plcMain.Dbs.MOT_CLX_DB_DB103._MOT_105R };
		this.MOT_106L = { ...state.PLCs.plcMain.Dbs.MOT_CLX_DB_DB103._MOT_106L };
		this.MOT_106R = { ...state.PLCs.plcMain.Dbs.MOT_CLX_DB_DB103._MOT_106R };
		this.MOT_107L = { ...state.PLCs.plcMain.Dbs.MOT_CLX_DB_DB103._MOT_107L };
		this.MOT_107R = { ...state.PLCs.plcMain.Dbs.MOT_CLX_DB_DB103._MOT_107R };
		this.MOT_108L = { ...state.PLCs.plcMain.Dbs.MOT_CLX_DB_DB103._MOT_108L };
		this.MOT_108R = { ...state.PLCs.plcMain.Dbs.MOT_CLX_DB_DB103._MOT_108R };
		this.MOT_109L = { ...state.PLCs.plcMain.Dbs.MOT_CLX_DB_DB103._MOT_109L };
		this.MOT_109R = { ...state.PLCs.plcMain.Dbs.MOT_CLX_DB_DB103._MOT_109R };
		this.MOT_110L = { ...state.PLCs.plcMain.Dbs.MOT_CLX_DB_DB103._MOT_110L };
		this.MOT_110R = { ...state.PLCs.plcMain.Dbs.MOT_CLX_DB_DB103._MOT_110R };
		this.MOT_111L = { ...state.PLCs.plcMain.Dbs.MOT_CLX_DB_DB103._MOT_111L };
		this.MOT_111R = { ...state.PLCs.plcMain.Dbs.MOT_CLX_DB_DB103._MOT_111R };
		this.MOT_112L = { ...state.PLCs.plcMain.Dbs.MOT_CLX_DB_DB103._MOT_112L };
		this.MOT_112R = { ...state.PLCs.plcMain.Dbs.MOT_CLX_DB_DB103._MOT_112R };
		this.MOT_113L = { ...state.PLCs.plcMain.Dbs.MOT_CLX_DB_DB103._MOT_113L };
		this.MOT_113R = { ...state.PLCs.plcMain.Dbs.MOT_CLX_DB_DB103._MOT_113R };
		this.MOT_114L = { ...state.PLCs.plcMain.Dbs.MOT_CLX_DB_DB103._MOT_114L };
		this.MOT_114R = { ...state.PLCs.plcMain.Dbs.MOT_CLX_DB_DB103._MOT_114R };
		this.MOT_115L = { ...state.PLCs.plcMain.Dbs.MOT_CLX_DB_DB103._MOT_115L };
		this.MOT_115R = { ...state.PLCs.plcMain.Dbs.MOT_CLX_DB_DB103._MOT_115R };
		this.MOT_201R_Belts = { ...state.PLCs.plcMain.Dbs.MOT_CLX_DB_DB103._MOT_201R_Belts };
		this.MOT_201L_Lift = { ...state.PLCs.plcMain.Dbs.MOT_CLX_DB_DB103._MOT_201L_Lift };
		this.MOT_202L = { ...state.PLCs.plcMain.Dbs.MOT_CLX_DB_DB103._MOT_202L };
		this.MOT_202R = { ...state.PLCs.plcMain.Dbs.MOT_CLX_DB_DB103._MOT_202R };
		this.MOT_203L_Lift = { ...state.PLCs.plcMain.Dbs.MOT_CLX_DB_DB103._MOT_203L_Lift };
		this.MOT_203R_Belts = { ...state.PLCs.plcMain.Dbs.MOT_CLX_DB_DB103._MOT_203R_Belts };
		this.MOT_301L = { ...state.PLCs.plcMain.Dbs.MOT_CLX_DB_DB103._MOT_301L };
		this.MOT_301R = { ...state.PLCs.plcMain.Dbs.MOT_CLX_DB_DB103._MOT_301R };
		this.MOT_302L = { ...state.PLCs.plcMain.Dbs.MOT_CLX_DB_DB103._MOT_302L };
		this.MOT_302R = { ...state.PLCs.plcMain.Dbs.MOT_CLX_DB_DB103._MOT_302R };
		this.MOT_303L = { ...state.PLCs.plcMain.Dbs.MOT_CLX_DB_DB103._MOT_303L };
		this.MOT_303R = { ...state.PLCs.plcMain.Dbs.MOT_CLX_DB_DB103._MOT_303R };
		this.MOT_304L = { ...state.PLCs.plcMain.Dbs.MOT_CLX_DB_DB103._MOT_304L };
		this.MOT_304R = { ...state.PLCs.plcMain.Dbs.MOT_CLX_DB_DB103._MOT_304R };
		this.MOT_305L = { ...state.PLCs.plcMain.Dbs.MOT_CLX_DB_DB103._MOT_305L };
		this.MOT_305R = { ...state.PLCs.plcMain.Dbs.MOT_CLX_DB_DB103._MOT_305R };

	}



}
