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
} from '../Types/BaseTypes';
export class TON_TIME extends PlcTagBase {
	public static Design = 'TON_TIME'
	_PT: TimeMsPlcTag;
	_ET: TimeMsPlcTag;
	_IN: BoolPlcTag;
	_Q: BoolPlcTag;

}