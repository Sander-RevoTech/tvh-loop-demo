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
import { appButtons_UDT } from './appButtons_UDT';
import { appStates_UDT } from './appStates_UDT';
export class ApplicationState_UDT extends PlcTagBase {
	public static Design = 'ApplicationState_UDT'
	_Hmi_Buttons: appButtons_UDT;
	_States: appStates_UDT;
	_Alarms: {
		_AlarmActiveInternalPLC: BoolPlcTag;
		_AlarmsActiveForHmi: BoolPlcTag;
		};

}