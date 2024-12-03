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
import { EC_Cognex_Dataman_Single_FB } from '../Cognex/EC_Cognex_Dataman_Single_FB';
export class OutputsController_Scanners_FB extends PlcTagBase {
	public static Design = 'OutputsController_Scanners_FB'
	_SCAN_100: EC_Cognex_Dataman_Single_FB;

}