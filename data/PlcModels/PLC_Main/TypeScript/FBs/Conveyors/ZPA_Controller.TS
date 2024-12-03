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
import { CycleRun } from '../Tools/CycleRun';
import { AlarmInfo_UDT } from '../../Types/Alarms/AlarmInfo_UDT';
import { TON_Encoder_FB } from '../Encoder utils/TON_Encoder_FB';
import { TON_TIME } from '../TON_TIME';
import { StepperController_Encoder } from '../Encoder utils/StepperController_Encoder';
import { StepperController } from '../Tools/StepperController';
import { Virtual_Encoder_FB } from '../Encoder utils/Virtual_Encoder_FB';
import { ZoneInfo } from '../../Types/appstate/ZoneInfo';
import { ApplicationState_UDT } from '../../Types/appstate/ApplicationState_UDT';
export class ZPA_Controller extends PlcTagBase {
	public static Design = 'ZPA_Controller'
	_I_ConnectUpStream: BoolPlcTag;
	_I_StartedAutoMode: BoolPlcTag;
	_I_UseEncoder: BoolPlcTag;
	_I_BuildName: BoolPlcTag;
	_I_UseExternalReset: BoolPlcTag;
	_IO_Upstream: Conveyor_UDT;
	_IO_DownStream: Conveyor_UDT;
	_IO_COnv: Conveyor_UDT;
	_cyclerun: CycleRun;
	_Alarm: AlarmInfo_UDT;
	_AlarmInfoValue: StringPlcTag;
	_ConveyorMode: Int16PlcTag;
	_StepNumber: DIntPlcTag;
	_PrevStepNumber: DIntPlcTag;
	_ObjectRequestedMemory: BoolPlcTag;
	_ObjectReceivedFromDownStream: BoolPlcTag;
	_Step_105_GapTimeOk: BoolPlcTag;
	_GapTimeTimer: TON_Encoder_FB;
	_SleepTimer: TON_Encoder_FB;
	_ToCloseDetection: TON_Encoder_FB;
	_ToLongDetectionEnd: TON_Encoder_FB;
	_ToLongDetectionStart: TON_Encoder_FB;
	_ToSmallDetection: TON_Encoder_FB;
	_DownStreamIsRunning: BoolPlcTag;
	_DownStreamRunningPredictor: Int16PlcTag;
	_ObjectReceivedDuringSending: BoolPlcTag;
	_BlockedRetry: Int16PlcTag;
	_InitializeInternal: BoolPlcTag;
	_diag: {
		_TrackingLost: UInt16PlcTag;
		};
	_StartupDelay: TON_TIME;
	_Step_Init_10: StepperController_Encoder;
	_Step_Send_WaitAccumulate_100: StepperController_Encoder;
	_Step_Send_WaitReceive_105: StepperController_Encoder;
	_Step_Send_Sending_110: StepperController_Encoder;
	_Step_Send_RunEmpty_120: StepperController_Encoder;
	_Step_Rec_Waiting_200: StepperController;
	_Step_Rec_Request_210: StepperController_Encoder;
	_Step_Rec_receivingTillEnd_215: StepperController_Encoder;
	_Step_Rec_RequetContiue_220: StepperController_Encoder;
	_Step_RequestObject_400_1: StepperController_Encoder;
	_Step_RequestObject_400_2: StepperController_Encoder;
	_Encoder: Virtual_Encoder_FB;
	_ResetMirror: BoolPlcTag;
	_T_ZoneInfo: ZoneInfo;
	_T_Appstate: ApplicationState_UDT;
	_T_Condition: BoolPlcTag;
	_T_Condtion_1: BoolPlcTag;
	_T_Condtion_2: BoolPlcTag;
	_T_NextStepNumber: DIntPlcTag;
	_T_TimeOutStepNumber: DIntPlcTag;
	_T_ConditionTime: TimeMsPlcTag;
	_T_RunSent: BoolPlcTag;
	_T_RunReceive: BoolPlcTag;
	_T_RunInit: BoolPlcTag;
	_T_ReceiveTransferUnit: BoolPlcTag;
	_T_SleepMode: BoolPlcTag;
	_T_StandbyMode: BoolPlcTag;
	_T_Dummy: BoolPlcTag;
	_Step_TimeOutSending: DIntPlcTag;
	_Step_TImeOutReceiving: DIntPlcTag;
	_Step_ToCloseAlarm: DIntPlcTag;
	_Step_ToSmall: DIntPlcTag;
	_Step_ToLong: DIntPlcTag;

}