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
import { PLC_GETDATA_REQ_DATA_UDT } from './PLC_GETDATA_REQ_DATA_UDT';
import { IPC_GETDATA_RES_DATA_UDT } from '../PC/IPC_GETDATA_RES_DATA_UDT';
import { IPC_INTERFACE_STATUS_UDT } from '../IPC_STANDARD/IPC_INTERFACE_STATUS_UDT';
export class PLC_ROUTING_DATA_UDT extends PlcTagBase {
	public static Design = 'PLC_ROUTING_DATA_UDT'
	_REQ_STATUS: PLC_IPC_STANDARD_REQ_RES_UDT;
	_REQ_DATA: PLC_GETDATA_REQ_DATA_UDT;
	_PLC_DATA: IPC_GETDATA_RES_DATA_UDT;
	_IPC_STATUS: IPC_INTERFACE_STATUS_UDT;
	_id: StringPlcTag;

}