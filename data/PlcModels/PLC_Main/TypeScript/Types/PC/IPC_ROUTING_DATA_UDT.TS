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
import { PLC_IPC_STANDARD_REQ_RES_UDT } from '../IPC_STANDARD/PLC_IPC_STANDARD_REQ_RES_UDT';
import { IPC_GETDATA_RES_DATA_UDT } from './IPC_GETDATA_RES_DATA_UDT';
export class IPC_ROUTING_DATA_UDT extends PlcTagBase {
	public static Design = 'IPC_ROUTING_DATA_UDT'
	_RES_STATUS: PLC_IPC_STANDARD_REQ_RES_UDT;
	_RES_DATA: IPC_GETDATA_RES_DATA_UDT;

}