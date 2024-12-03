import {  PlcTagBase,
 PlcMemoryType,
 BoolPlcTag,
 BytePlcTag,
 CharPlcTag,
 USIntPlcTag,
 HwAnyPlcTag,
 HwioPlcTag,
 Int16PlcTag,
 UInt16PlcTag,
 WordlcTag,
 DWordPlcTag,
 DIntPlcTag,
 UDIntPlcTag,
 RealPlcTag,
 LRealPlcTag,
 TimeMsPlcTag,
 DatePLcTag,
 Date_And_TimePlcTag,
 DtlPlcTag,
 StringPlcTag,
} from '../../Types/BaseTypes';
import { Tracking_Simple_UDT_1 } from '../../Types/Tracking/Tracking_Simple_UDT_1';
import { COGNEX_DATAMAN_LOGIC_UDT } from '../../Types/Cognex/COGNEX_DATAMAN_LOGIC_UDT';
import { Conveyor_UDT } from '../../Types/Conveyors/Conveyor_UDT';
import { TONR_TIME } from '../TONR_TIME';
import { StepperController } from '../Tools/StepperController';
export class LC_Cognex_DataMan_FB extends PlcTagBase {
	public static Design = 'LC_Cognex_DataMan_FB'
	_O_Tracking: Tracking_Simple_UDT_1;
	_O_NewResult: BoolPlcTag;
	_IO_BarcodeScanner: COGNEX_DATAMAN_LOGIC_UDT;
	_IO_UpstreamConv: Conveyor_UDT;
	_IO_CurrentStream: Conveyor_UDT;
	_measureBoxTimer: TONR_TIME;
	_scanTimer: TONR_TIME;
	_boxLength: TimeMsPlcTag;
	_stepNumber: DIntPlcTag;
	_Step_10_WaitForTrigger: StepperController;
	_Step_20_OnDelay: StepperController;
	_Step_30_Scan: StepperController;
	_Step_40_ParseResult: StepperController;
	_Step_50_ParcelsToClose: StepperController;
	_T_Condition: BoolPlcTag;
	_T_Dummy: BoolPlcTag;

}