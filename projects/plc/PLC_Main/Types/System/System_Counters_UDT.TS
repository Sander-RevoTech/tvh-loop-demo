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
export class System_Counters_UDT extends PlcTagBase {
	public static Design = 'System_Counters_UDT'
	_Infeed_1: UInt16PlcTag;
	_Infeed_2: UInt16PlcTag;
	_Infeed_3: UInt16PlcTag;
	_Infeed_4: UInt16PlcTag;
	_Infeed_5: UInt16PlcTag;
	_MainLane_Total: UInt16PlcTag;
	_Scan100_Reject: UInt16PlcTag;
	_Scan100_Exit1: UInt16PlcTag;
	_Scan100_Exit2: UInt16PlcTag;
	_Scan100MainLane: UInt16PlcTag;
	_Scan200_Rejct: UInt16PlcTag;
	_Scan200_Printer1: UInt16PlcTag;
	_Scan200_Printer2: UInt16PlcTag;
	_Scan200_Printer3: UInt16PlcTag;
	_Scan200_MainLane: UInt16PlcTag;
	_MezzanineRetour_Printer1: UInt16PlcTag;
	_MezzanineRetour_Printer2: UInt16PlcTag;
	_Printer1_OK: UInt16PlcTag;
	_Printer1_NOK: UInt16PlcTag;
	_Printer2_OK: UInt16PlcTag;
	_Printer2_NOK: UInt16PlcTag;
	_Printer3_OK: UInt16PlcTag;
	_Printer3_NOK: UInt16PlcTag;

}