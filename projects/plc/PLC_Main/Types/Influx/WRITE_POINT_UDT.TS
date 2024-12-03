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
export class WRITE_POINT_UDT extends PlcTagBase {
	public static Design = 'WRITE_POINT_UDT'
	_I_Measurement: StringPlcTag;
	_I_tags: StringPlcTag;
	_I_fields: StringPlcTag;
	_I_time: StringPlcTag;

}