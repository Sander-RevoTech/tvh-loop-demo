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
export class ConveyLinx_IO_IN_OUT_UDT extends PlcTagBase {
	public static Design = 'ConveyLinx_IO_IN_OUT_UDT'
	_spare: BytePlcTag;
	_Male_Up_Left_Pin_2: BoolPlcTag;
	_Female_Down_Left_Pin_2: BoolPlcTag;
	_Male_Up_Right_Pin_2: BoolPlcTag;
	_Female_Down_Right_Pin_2: BoolPlcTag;
	_Male_Up_Left_Pin_4: BoolPlcTag;
	_Female_Down_Left_Pin_4: BoolPlcTag;
	_Male_Up_Right_Pin_4: BoolPlcTag;
	_Female_Down_Right_Pin_4: BoolPlcTag;

}