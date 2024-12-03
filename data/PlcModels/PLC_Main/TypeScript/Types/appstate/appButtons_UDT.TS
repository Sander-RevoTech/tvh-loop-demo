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
} from '../BaseTypes';
import { HMIButton_UDT } from '../Tools/HMIButton_UDT';
export class appButtons_UDT extends PlcTagBase {
	public static Design = 'appButtons_UDT'
	_reset: HMIButton_UDT;
	_StartAutoMode: HMIButton_UDT;
	_ActivateManualMode: HMIButton_UDT;
	_StopAutoMode: HMIButton_UDT;
	_DeactivateManualMode: HMIButton_UDT;
	_StartEmptyMode: HMIButton_UDT;
	_StopEmptyMode: HMIButton_UDT;
	_ActivateStandby: HMIButton_UDT;

}