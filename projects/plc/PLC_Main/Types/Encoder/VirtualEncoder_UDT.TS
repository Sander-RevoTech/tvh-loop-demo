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
export class VirtualEncoder_UDT extends PlcTagBase {
	public static Design = 'VirtualEncoder_UDT'
	_Distance_mm: RealPlcTag;
	_Speed_mm_ms: RealPlcTag;
	_Settings: {
		_Base_M_min: RealPlcTag;
		_BaseRelative: RealPlcTag;
		};

}