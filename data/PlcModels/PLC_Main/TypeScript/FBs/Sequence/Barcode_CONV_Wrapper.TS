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
import { Conveyor_UDT } from '../../Types/Conveyors/Conveyor_UDT';
import { COGNEX_DATAMAN_LOGIC_UDT } from '../../Types/Cognex/COGNEX_DATAMAN_LOGIC_UDT';
import { LC_Cognex_DataMan_FB } from '../Cognex/LC_Cognex_DataMan_FB';
import { ZoneInfo } from '../../Types/appstate/ZoneInfo';
import { ApplicationState_UDT } from '../../Types/appstate/ApplicationState_UDT';
import { Tracking_Simple_UDT_1 } from '../../Types/Tracking/Tracking_Simple_UDT_1';
export class Barcode_CONV_Wrapper extends PlcTagBase {
	public static Design = 'Barcode_CONV_Wrapper'
	_IO_Upstream: Conveyor_UDT;
	_IO_CurrentStream: Conveyor_UDT;
	_IO_Scanner_1: COGNEX_DATAMAN_LOGIC_UDT;
	_scanner1: LC_Cognex_DataMan_FB;
	_scan_1Done: BoolPlcTag;
	_T_ZoneInfo: ZoneInfo;
	_T_AppState: ApplicationState_UDT;
	_T_Tracking: Tracking_Simple_UDT_1;
	_T_NewResult: BoolPlcTag;

}