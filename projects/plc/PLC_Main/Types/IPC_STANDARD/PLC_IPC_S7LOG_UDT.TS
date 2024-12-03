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
import { PLC_IPC_STANDARD_REQ_RES_UDT } from './PLC_IPC_STANDARD_REQ_RES_UDT';
import { IPC_INTERFACE_STATUS_UDT } from './IPC_INTERFACE_STATUS_UDT';
export class PLC_IPC_S7LOG_UDT extends PlcTagBase {
	public static Design = 'PLC_IPC_S7LOG_UDT'
	_REQ_STATUS: PLC_IPC_STANDARD_REQ_RES_UDT;
	_REQ_STRING: StringPlcTag;
	_RES_STATUS: PLC_IPC_STANDARD_REQ_RES_UDT;
	_RES_DATA: BoolPlcTag;
	_PLC_DATA: BoolPlcTag;
	_IPC_STATUS: IPC_INTERFACE_STATUS_UDT;

}