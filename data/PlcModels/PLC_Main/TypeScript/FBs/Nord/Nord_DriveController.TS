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
import { Nord_Drive_SK5xx_In_Data_UDT } from '../../Types/Nord/Nord_Drive_SK5xx_In_Data_UDT';
import { Nord_Drive_UDT } from '../../Types/Nord/Nord_Drive_UDT';
import { Nord_Drive_SK5xx_Out_Data_UDT } from '../../Types/Nord/Nord_Drive_SK5xx_Out_Data_UDT';
import { TON_TIME } from '../TON_TIME';
import { TOF_TIME } from '../TOF_TIME';
import { CycleRun } from '../Tools/CycleRun';
import { ZoneInfo } from '../../Types/appstate/ZoneInfo';
import { ApplicationState_UDT } from '../../Types/appstate/ApplicationState_UDT';
import { AlarmInfo_UDT } from '../../Types/Alarms/AlarmInfo_UDT';
export class Nord_DriveController extends PlcTagBase {
	public static Design = 'Nord_DriveController'
	_I_MotorData: Nord_Drive_SK5xx_In_Data_UDT;
	_I_Interlock: BoolPlcTag;
	_I_RunOverride: BoolPlcTag;
	_I_OverrideDirection: BoolPlcTag;
	_I_TimeNotRunning: TimeMsPlcTag;
	_I_TimeNotStopping: TimeMsPlcTag;
	_I_SlowStopMode: BoolPlcTag;
	_I_useExternalReset: BoolPlcTag;
	_IO_MotorStatus: Nord_Drive_UDT;
	_IO_MotorData: Nord_Drive_SK5xx_Out_Data_UDT;
	_S_TimeNotRunning: TON_TIME;
	_S_TimeNotStopping: TON_TIME;
	_S_TimeRunningFeedBack: TON_TIME;
	_S_Reset: TOF_TIME;
	_s_CannotStartDelay: TON_TIME;
	_S_SlowStopLeft: TOF_TIME;
	_S_SlowStopRight: TOF_TIME;
	_CannotStartErrorDelay: TON_TIME;
	_S_SpeedSetPoint: Int16PlcTag;
	_cycleCounter: CycleRun;
	_T_ZoneInfo: ZoneInfo;
	_T_Appstate: ApplicationState_UDT;
	_Alarm: AlarmInfo_UDT;
	_T_dummy: UInt16PlcTag;
	_T_Direction: BoolPlcTag;
	_T_RunLeftCmd: BoolPlcTag;
	_T_RunRightCmd: BoolPlcTag;
	_T_EnableOperation: BoolPlcTag;
	_T_SlowStopSetting: TimeMsPlcTag;

}