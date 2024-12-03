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
export class Parcel_Miscs_UDT extends PlcTagBase {
	public static Design = 'Parcel_Miscs_UDT'
	_CuttingOk: BoolPlcTag;
	_cuttingErrror: BoolPlcTag;
	_liddingError: BoolPlcTag;
	_NoCut: BoolPlcTag;
	_NoLid: BoolPlcTag;

}