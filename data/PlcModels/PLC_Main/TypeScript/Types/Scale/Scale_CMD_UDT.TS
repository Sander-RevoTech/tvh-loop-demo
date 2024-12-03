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
export class Scale_CMD_UDT extends PlcTagBase {
	public static Design = 'Scale_CMD_UDT'
	_Zero: BoolPlcTag;
	_Tare: BoolPlcTag;
	_ResetTare: BoolPlcTag;
	_WeighObject: BoolPlcTag;
	_Command: Int16PlcTag;

}