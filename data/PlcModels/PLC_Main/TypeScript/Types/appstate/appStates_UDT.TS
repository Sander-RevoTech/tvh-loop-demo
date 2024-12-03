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
import { SmartBooldt } from '../Tools/SmartBooldt';
export class appStates_UDT extends PlcTagBase {
	public static Design = 'appStates_UDT'
	_ReadyForAutoMode: BoolPlcTag;
	_ReadyForStandby: BoolPlcTag;
	_RequestingAutoModeOff: BoolPlcTag;
	_Standby: SmartBooldt;
	_AutoModeActivated: SmartBooldt;
	_ManualModeActivated: SmartBooldt;
	_EmptyApplicatoinMode: SmartBooldt;
	_EmergencyOk: SmartBooldt;
	_ManaulOverrideActive: {
		_Internal: BoolPlcTag;
		_HMI: BoolPlcTag;
		};

}