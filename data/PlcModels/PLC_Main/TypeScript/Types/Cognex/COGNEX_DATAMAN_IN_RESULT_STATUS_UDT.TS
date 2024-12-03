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
export class COGNEX_DATAMAN_IN_RESULT_STATUS_UDT extends PlcTagBase {
	public static Design = 'COGNEX_DATAMAN_IN_RESULT_STATUS_UDT'
	_Decoding: BoolPlcTag;
	_DecodeComplete: BoolPlcTag;
	_ResultBufferOverrun: BoolPlcTag;
	_ResultsAvaileble: BoolPlcTag;
	_spare4: BoolPlcTag;
	_spare5: BoolPlcTag;
	_spare6: BoolPlcTag;
	_GeneralError: BoolPlcTag;

}