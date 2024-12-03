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
export class COGNEX_DATAMAN_IN_RESULT_UDT extends PlcTagBase {
	public static Design = 'COGNEX_DATAMAN_IN_RESULT_UDT'
	_TriggerId: Int16PlcTag;
	_GoodRead: BoolPlcTag;
	_Validated: BoolPlcTag;
	_Verfified: BoolPlcTag;
	_acquisitionOverrun: BoolPlcTag;
	_acquisitionBufferOverflow: BoolPlcTag;
	_spare6: BoolPlcTag;
	_spare7: BoolPlcTag;
	_spare8: BytePlcTag;
	_spare9: BytePlcTag;
	_spare10: BytePlcTag;
	_ResultLength: Int16PlcTag;
	_Barcode: CharPlcTag[] // Length 136;

}