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
import { PLC_ROUTING_DATA_UDT } from '../PLC/PLC_ROUTING_DATA_UDT';
import { IPC_ROUTING_DATA_UDT } from '../PC/IPC_ROUTING_DATA_UDT';
export class PLC_IPC_ROUTING_DATA_UDT extends PlcTagBase {
	public static Design = 'PLC_IPC_ROUTING_DATA_UDT'
	_PLC: PLC_ROUTING_DATA_UDT;
	_PC: IPC_ROUTING_DATA_UDT;
	_id: StringPlcTag;

}