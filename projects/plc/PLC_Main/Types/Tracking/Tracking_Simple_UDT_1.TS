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
export class Tracking_Simple_UDT_1 extends PlcTagBase {
	public static Design = 'Tracking_Simple_UDT_1'
	_ID: UInt16PlcTag;
	_PLC_Dest: Int16PlcTag;
	_WMS_Dest: StringPlcTag;
	_Barcode: StringPlcTag;
	_GoodRead: BoolPlcTag;
	_weightGram: RealPlcTag;
	_prio: BoolPlcTag;

}