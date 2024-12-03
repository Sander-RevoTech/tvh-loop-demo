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
import { Motor_DOL_UDT } from '../../Types/Hardware/Motor_DOL_UDT';
import { TON_TIME } from '../TON_TIME';
import { AlarmInfo_UDT } from '../../Types/Alarms/AlarmInfo_UDT';
import { ZoneInfo } from '../../Types/appstate/ZoneInfo';
import { ApplicationState_UDT } from '../../Types/appstate/ApplicationState_UDT';
export class Motor_DOL_Controller_FB extends PlcTagBase {
	public static Design = 'Motor_DOL_Controller_FB'
	_I_Interlock: BoolPlcTag;
	_I_RunningFeedBack: BoolPlcTag;
	_I_ThermalProtection: BoolPlcTag;
	_I_TimeNotRunning: TimeMsPlcTag;
	_I_TimeNotStopping: TimeMsPlcTag;
	_I_TimeRunningFeedbackDelay: TimeMsPlcTag;
	_O_CmdOn: BoolPlcTag;
	_O_CmdDirection: BoolPlcTag;
	_IO_Motor: Motor_DOL_UDT;
	_S_TimeNotRunning: TON_TIME;
	_S_TimeNotStopping: TON_TIME;
	_S_TimeRunningFeedBack: TON_TIME;
	_info: AlarmInfo_UDT;
	_T_ZoneInfo: ZoneInfo;
	_T_AppState: ApplicationState_UDT;

}