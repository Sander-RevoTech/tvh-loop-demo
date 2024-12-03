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
import { FLOWSORT_TWISTER_UDT } from '../../Types/ConveyLinx/FLOWSORT_TWISTER_UDT';
import { CLXAiPLC_OUT_UDT } from '../../Types/ConveyLinx/CLXAiPLC_OUT_UDT';
import { StepperController } from '../Tools/StepperController';
import { SmartBool } from '../Tools/SmartBool';
import { TON_TIME } from '../TON_TIME';
import { CycleRun } from '../Tools/CycleRun';
import { AlarmInfo_UDT } from '../../Types/Alarms/AlarmInfo_UDT';
import { ApplicationState_UDT } from '../../Types/appstate/ApplicationState_UDT';
import { ZoneInfo } from '../../Types/appstate/ZoneInfo';
export class FlowSort_Twister_Controller_FB extends PlcTagBase {
	public static Design = 'FlowSort_Twister_Controller_FB'
	_I_MotorData: CLXAiPLC_IN_UDT;
	_I_ControlLeftMotorConveyLInx: BoolPlcTag;
	_I_ControlRightMotorConveyLinx: BoolPlcTag;
	_I_homeFeedback: SmartBooldt;
	_IO_MotorStatus: FLOWSORT_TWISTER_UDT;
	_IO_MotorOutput: CLXAiPLC_OUT_UDT;
	_StepNumber: DIntPlcTag;
	_Step_10_FindHomingPoint: StepperController;
	_Step_15_ResetPulseCount: StepperController;
	_Step_20_CountPulses: StepperController;
	_Step_30_ResetPulseCount: StepperController;
	_Step_40_RunCorrection: StepperController;
	_Step_50_ResetPulseCount: StepperController;
	_prevDegCommand: RealPlcTag;
	_homed: SmartBool;
	_NotConnected: TON_TIME;
	_CycleRun: CycleRun;
	_AlarmInfo: AlarmInfo_UDT;
	_T_RunInit: BoolPlcTag;
	_T_SetPointDeg: RealPlcTag;
	_T_AppState: ApplicationState_UDT;
	_T_ZoneInfo: ZoneInfo;
	_StepTimedOutHoming: DIntPlcTag;

}