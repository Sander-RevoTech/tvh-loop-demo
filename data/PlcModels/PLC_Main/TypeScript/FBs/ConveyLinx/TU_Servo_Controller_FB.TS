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
import { CLXAiPLC_IN_UDT } from '../../Types/ConveyLinx/CLXAiPLC_IN_UDT';
import { SmartBooldt } from '../../Types/Tools/SmartBooldt';
import { EasySystems_LineairMotor_ConveyLinx_FullPLC_Single } from '../../Types/ConveyLinx/EasySystems_LineairMotor_ConveyLinx_FullPLC_Single';
import { CLXAiPLC_OUT_UDT } from '../../Types/ConveyLinx/CLXAiPLC_OUT_UDT';
import { SmartBool } from '../Tools/SmartBool';
import { TON_TIME } from '../TON_TIME';
import { SR } from '../Tools/SR';
import { CycleRun } from '../Tools/CycleRun';
import { StepperController } from '../Tools/StepperController';
import { AlarmInfo_UDT } from '../../Types/Alarms/AlarmInfo_UDT';
import { ApplicationState_UDT } from '../../Types/appstate/ApplicationState_UDT';
import { ZoneInfo } from '../../Types/appstate/ZoneInfo';
export class TU_Servo_Controller_FB extends PlcTagBase {
	public static Design = 'TU_Servo_Controller_FB'
	_I_DbName: StringPlcTag;
	_I_MotorData: CLXAiPLC_IN_UDT;
	_I_ControlLeftMotorConveyLInx: BoolPlcTag;
	_I_ControlRightMotorConveyLinx: BoolPlcTag;
	_I_UpFb: SmartBooldt;
	_I_DownFb: SmartBooldt;
	_I_TimeUp: TimeMsPlcTag;
	_I_TimeDown: TimeMsPlcTag;
	_I_Direction: BoolPlcTag;
	_IO_MotorStatus: EasySystems_LineairMotor_ConveyLinx_FullPLC_Single;
	_IO_MotorOutput: CLXAiPLC_OUT_UDT;
	_Sensor_UP: SmartBool;
	_Sensor_Down: SmartBool;
	_Homed: SmartBool;
	_StepNumber: DIntPlcTag;
	_PrevCmd: RealPlcTag;
	_S_NotConnected: TON_TIME;
	_S_NotUp: TON_TIME;
	_S_NotDown: TON_TIME;
	_S_srUp: SR;
	_S_srDown: SR;
	_CycleRun: CycleRun;
	_Step_10_FindHomingPoint: StepperController;
	_Step_15_ResetPulseCount: StepperController;
	_Step_20_CountPulses: StepperController;
	_Step_30_ResetPulseCount: StepperController;
	_Step_40_RunCorrection: StepperController;
	_Step_50_ResetPulseCount: StepperController;
	_AlarmInfo: AlarmInfo_UDT;
	_T_RunAuto: BoolPlcTag;
	_T_RunManual: BoolPlcTag;
	_T_RunInit: BoolPlcTag;
	_T_Setpoint: RealPlcTag;
	_T_AppState: ApplicationState_UDT;
	_T_ZoneInfo: ZoneInfo;
	_StepTimedOutHoming: DIntPlcTag;

}