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
} from '../../Types/BaseTypes';
import { TON_Encoder_FB } from '../Encoder utils/TON_Encoder_FB';
import { SmartBool } from '../Tools/SmartBool';
import { IPC_Request } from '../IPC/IPC_Request';
import { PLC_GETDATA_REQ_DATA_UDT } from '../../Types/PLC/PLC_GETDATA_REQ_DATA_UDT';
import { PLC_IPC_ROUTING_DATA_UDT } from '../../Types/IPC_GETINFO/PLC_IPC_ROUTING_DATA_UDT';
export class Test_Main extends PlcTagBase {
	public static Design = 'Test_Main'
	_ton: TON_Encoder_FB;
	_dummy: BoolPlcTag;
	_trigger: SmartBool;
	_ipc: IPC_Request;
	_i: Int16PlcTag;
	_T_data: PLC_GETDATA_REQ_DATA_UDT;
	_T_IPC: PLC_IPC_ROUTING_DATA_UDT;

}