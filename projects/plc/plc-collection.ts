import { PLC_Main } from './PLC_Main';
import {
	HMI_DB_DB46,
	ApplicationState_DB_DB13,
	Settings_DB_DB25,
	Tracking_DB_DB19,
	Alarms_DB_DB51,
	Inputs_DB_DB1,
	Scanners_DB_DB4,
	DRV_DB_DB43,
	EMG_STATUS_DB_DB85,
	CONV_DB_DB49,
	MOT_CLX_DB_DB103,
	TRANSFER_DB_DB5
} from './PLC_Main/DBs';

export interface IPlcDbsMain {
	HMI_DB_DB46: HMI_DB_DB46;
	ApplicationState_DB_DB13: ApplicationState_DB_DB13;
	Settings_DB_DB25: Settings_DB_DB25;

	Tracking_DB_DB19: Tracking_DB_DB19;
	Alarms_DB_DB51: Alarms_DB_DB51;
	Inputs_DB_DB1: Inputs_DB_DB1;
	DRV_DB_DB43: DRV_DB_DB43;
	Scanners_DB_DB4: Scanners_DB_DB4;
	EMG_STATUS_DB_DB85: EMG_STATUS_DB_DB85;
	CONV_DB_DB49: CONV_DB_DB49;
	MOT_CLX_DB_DB103: MOT_CLX_DB_DB103;
	TRANSFER_DB_DB5: TRANSFER_DB_DB5;
}

export class PlcMain extends PLC_Main {
	public Dbs: IPlcDbsMain;

	constructor() {
		super();
		this.Dbs = {
			HMI_DB_DB46: new HMI_DB_DB46(),
			ApplicationState_DB_DB13: new ApplicationState_DB_DB13(),
			Settings_DB_DB25: new Settings_DB_DB25(),
			Tracking_DB_DB19: new Tracking_DB_DB19(),
			Alarms_DB_DB51: new Alarms_DB_DB51(),
			Inputs_DB_DB1: new Inputs_DB_DB1(),
			DRV_DB_DB43: new DRV_DB_DB43(),
			Scanners_DB_DB4: new Scanners_DB_DB4(),
			EMG_STATUS_DB_DB85: new EMG_STATUS_DB_DB85(),
			CONV_DB_DB49: new CONV_DB_DB49(),
			MOT_CLX_DB_DB103: new MOT_CLX_DB_DB103(),
			TRANSFER_DB_DB5: new TRANSFER_DB_DB5(),
		}
	};
}

export interface IPlcCollection {
	plcMain: PlcMain;
}

export interface IPlcDbsMainDatCol {

}

export class PlcInboundDataCol extends PLC_Main {
	public Dbs: IPlcDbsMainDatCol;

	constructor() {
		super();
		this.Dbs = {

		};
	}
}

export interface IPlcCollectionDatCol {
	plcMain: PlcInboundDataCol;
}
