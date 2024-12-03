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
export class SKTU4_Out_Data_UDT extends PlcTagBase {
	public static Design = 'SKTU4_Out_Data_UDT'
	_reserve7: BytePlcTag;
	_Output_1: BoolPlcTag;
	_Output_2: BoolPlcTag;
	_reserve_3: BoolPlcTag;
	_reserve_4: BoolPlcTag;
	_reserve_5: BoolPlcTag;
	_reserve_6: BoolPlcTag;
	_reserve_7: BoolPlcTag;
	_reserve_8: BoolPlcTag;

}