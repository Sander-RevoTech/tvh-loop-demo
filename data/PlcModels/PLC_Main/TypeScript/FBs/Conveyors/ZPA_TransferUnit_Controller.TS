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
import { TransferUnitUpDown } from '../../Types/Conveyors/TransferUnitUpDown';
import { CycleRun } from '../Tools/CycleRun';
import { AlarmInfo_UDT } from '../../Types/Alarms/AlarmInfo_UDT';
import { TON_TIME } from '../TON_TIME';
import { Virtual_Encoder_FB } from '../Encoder utils/Virtual_Encoder_FB';
import { TON_Encoder_FB } from '../Encoder utils/TON_Encoder_FB';
import { StepperController_Encoder } from '../Encoder utils/StepperController_Encoder';
import { StepperController } from '../Tools/StepperController';
import { ApplicationState_UDT } from '../../Types/appstate/ApplicationState_UDT';
import { ZoneInfo } from '../../Types/appstate/ZoneInfo';
export class ZPA_TransferUnit_Controller extends PlcTagBase {
	public static Design = 'ZPA_TransferUnit_Controller'
	_I_BuildName: BoolPlcTag;
	_I_ReceivePosition: Int16PlcTag;
	_I_SendingPosition: Int16PlcTag;
	_I_NoEndSensor: BoolPlcTag;
	_I_SentAtEnd: BoolPlcTag;
	_I_ConnectUpstream: BoolPlcTag;
	_I_UpstreamConveyor: Conveyor_UDT;
	_I_DownStreamConveyor: Conveyor_UDT;
	_I_AlignAfterReceive: BoolPlcTag;
	_I_AlignSpeed: RealPlcTag;
	_I_AlignDirection: BoolPlcTag;
	_I_AlignDistance: RealPlcTag;
	_I_AlignPostition: Int16PlcTag;
	_I_AlignConveyorIndex: Int16PlcTag;
	_IO_ReceiveConveyor: Conveyor_UDT;
	_IO_SendingConveyor: Conveyor_UDT;
	_IO_VLV_Transfer: TransferUnitUpDown;
	_cycleRun: CycleRun;
	_alarmReceive: AlarmInfo_UDT;
	_alarmSending: AlarmInfo_UDT;
	_StartupDelay: TON_TIME;
	_EncoderReceive: Virtual_Encoder_FB;
	_EncoderSending: Virtual_Encoder_FB;
	_DownStreamRunningPredictor: Int16PlcTag;
	_DownStreamIsRunning: BoolPlcTag;
	_StepNumber: DIntPlcTag;
	_PrevStepNumber: DIntPlcTag;
	_Step_105_GapTimeOk: BoolPlcTag;
	_GapTimeTimer: TON_Encoder_FB;
	_diag: {
		_TrackingLost: UInt16PlcTag;
		};
	_Step_3110_CHeckConveyorCorrectlyReceived: StepperController_Encoder;
	_Step_31210_CheckCOnveyorCorrectlySent: StepperController_Encoder;
	_Step_Recv_10_WaitingReceive: StepperController;
	_Step_Recv_20_RecevingSingle: StepperController_Encoder;
	_Step_Recv_40_RunEnd: StepperController_Encoder;
	_Step_Recv_50_ReceivePosition: StepperController_Encoder;
	_Step_Recv_55_WaitMotorOff: StepperController;
	_Step_Algign_60: StepperController_Encoder;
	_Step_Sent_100_RunTillEnd: StepperController_Encoder;
	_Step_Sent_105_RequestSending: StepperController;
	_Step_Sent_110_SentItem: StepperController_Encoder;
	_Step_Sent_120_EmptyRun: StepperController_Encoder;
	_T_AppState: ApplicationState_UDT;
	_T_ZoneInfo: ZoneInfo;
	_T_TransferInReceivePosition: BoolPlcTag;
	_T_TransferInSendingPosition: BoolPlcTag;
	_T_Condition: BoolPlcTag;
	_T_NextStep: DIntPlcTag;
	_T_DeltaDistance: RealPlcTag;
	_STEP_60_ALIGNMENT: DIntPlcTag;
	_InitStep: DIntPlcTag;
	_AlarmReceiveErrorStep: DIntPlcTag;
	_AlarmSendingErrorStep: DIntPlcTag;

}