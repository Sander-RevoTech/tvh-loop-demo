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
export class IPC_RES_STATUS_UDT extends PlcTagBase {
	public static Design = 'IPC_RES_STATUS_UDT'
	_NewResult: BoolPlcTag;
	_Success: BoolPlcTag;
	_OutOfSync: BoolPlcTag;
	_TimeOut: BoolPlcTag;
	_Fail: BoolPlcTag;

}