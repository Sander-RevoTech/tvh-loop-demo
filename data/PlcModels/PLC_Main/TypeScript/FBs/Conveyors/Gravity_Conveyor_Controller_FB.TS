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
import { Conveyor_UDT } from '../../Types/Conveyors/Conveyor_UDT';
import { IPC_ROUTING_DATA_UDT } from '../../Types/PC/IPC_ROUTING_DATA_UDT';
import { PLC_ROUTING_DATA_UDT } from '../../Types/PLC/PLC_ROUTING_DATA_UDT';
import { IPC_Request } from '../IPC/IPC_Request';
import { CycleRun } from '../Tools/CycleRun';
import { TON_TIME } from '../TON_TIME';
import { AlarmInfo_UDT } from '../../Types/Alarms/AlarmInfo_UDT';
import { PLC_GETDATA_REQ_DATA_UDT } from '../../Types/PLC/PLC_GETDATA_REQ_DATA_UDT';
import { ZoneInfo } from '../../Types/appstate/ZoneInfo';
import { ApplicationState_UDT } from '../../Types/appstate/ApplicationState_UDT';
export class Gravity_Conveyor_Controller_FB extends PlcTagBase {
	public static Design = 'Gravity_Conveyor_Controller_FB'
	_I_BuildName: BoolPlcTag;
	_I_Upstream: Conveyor_UDT;
	_I_ConnectUpstream: BoolPlcTag;
	_I_PC: IPC_ROUTING_DATA_UDT;
	_IO_Conv: Conveyor_UDT;
	_IO_IPC: PLC_ROUTING_DATA_UDT;
	_ipc: IPC_Request;
	_cyclerun: CycleRun;
	_fullDetection: TON_TIME;
	_Alarm: AlarmInfo_UDT;
	_AlarmInfoValue: StringPlcTag;
	_T_Data: PLC_GETDATA_REQ_DATA_UDT;
	_T_ZoneInfo: ZoneInfo;
	_T_Appstate: ApplicationState_UDT;
	_T_Condition: BoolPlcTag;

}