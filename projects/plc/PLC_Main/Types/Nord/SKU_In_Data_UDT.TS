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
export class SKU_In_Data_UDT extends PlcTagBase {
	public static Design = 'SKU_In_Data_UDT'
	_reserve7: BytePlcTag;
	_Input_1: BoolPlcTag;
	_Input_2: BoolPlcTag;
	_reserve1: BoolPlcTag;
	_reserve2: BoolPlcTag;
	_reserve3: BoolPlcTag;
	_reserve4: BoolPlcTag;
	_reserve5: BoolPlcTag;
	_reserve6: BoolPlcTag;

}