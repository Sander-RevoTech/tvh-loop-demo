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
export class HmiAlarm_Dynamic extends PlcTagBase {
	public static Design = 'HmiAlarm_Dynamic'
	_Active: BoolPlcTag;
	_Acknowledge: BoolPlcTag;
	_type: Int16PlcTag;
	_message: StringPlcTag;
	_ErrorCode: DIntPlcTag;

}