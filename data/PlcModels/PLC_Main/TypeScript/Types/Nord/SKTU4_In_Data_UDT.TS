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
export class SKTU4_In_Data_UDT extends PlcTagBase {
	public static Design = 'SKTU4_In_Data_UDT'
	_reserve7: BytePlcTag;
	_Input_1: BoolPlcTag;
	_Input_2: BoolPlcTag;
	_Input_3: BoolPlcTag;
	_Input_4: BoolPlcTag;
	_Input_5: BoolPlcTag;
	_Input_6: BoolPlcTag;
	_Input_7: BoolPlcTag;
	_Input_8: BoolPlcTag;

}