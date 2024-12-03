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
import { G120D_SINAPOS_UDT } from '../../Types/G120D_PosControl/G120D_SINAPOS_UDT';
import { CycleRun } from '../Tools/CycleRun';
import { AlarmInfo_UDT } from '../../Types/Alarms/AlarmInfo_UDT';
import { TOF_TIME } from '../TOF_TIME';
import { TON_TIME } from '../TON_TIME';
import { HeartBeatButton_FB } from '../Tools/HeartBeatButton_FB';
import { ApplicationState_UDT } from '../../Types/appstate/ApplicationState_UDT';
import { ZoneInfo } from '../../Types/appstate/ZoneInfo';
export class G120DPosControl_FB extends PlcTagBase {
	public static Design = 'G120DPosControl_FB'
	_I_HWIDSTW: HwAnyPlcTag;
	_I_HWIDZSW: HwAnyPlcTag;
	_I_Home: BoolPlcTag;
	_I_Interlock: BoolPlcTag;
	_I_SafetyProx_1: BoolPlcTag;
	_I_SafetyProx_2: BoolPlcTag;
	_I_ExtReset: BoolPlcTag;
	_IO_DRIVE: G120D_SINAPOS_UDT;
	_cycle: CycleRun;
	_alarm: AlarmInfo_UDT;
	_reset: TOF_TIME;
	_disconnected: TON_TIME;
	_notOn: TON_TIME;
	_notEnabled: TON_TIME;
	_EposConfig: DWordPlcTag;
	_jog_1: HeartBeatButton_FB;
	_jog_2: HeartBeatButton_FB;
	_homed: BoolPlcTag;
	_homeStep: DIntPlcTag;
	_T_Appstate: ApplicationState_UDT;
	_T_Zone: ZoneInfo;
	_T_Mode: Int16PlcTag;
	_T_On: BoolPlcTag;
	_T_Direction: BoolPlcTag;
	_T_Reset: BoolPlcTag;
	_T_ExecuteMode: BoolPlcTag;
	_T_Position: DIntPlcTag;
	_T_Speed: DIntPlcTag;
	_T_Condition: BoolPlcTag;

}