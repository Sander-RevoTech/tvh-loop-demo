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
import { ConveyorTimes_UDT } from './ConveyorTimes_UDT';
import { SmartBooldt } from '../Tools/SmartBooldt';
import { HmiAlarm } from '../Alarms/HmiAlarm';
import { Tracking_Simple_UDT_1 } from '../Tracking/Tracking_Simple_UDT_1';
import { VirtualEncoder_UDT } from '../Encoder/VirtualEncoder_UDT';
export class Conveyor_UDT extends PlcTagBase {
	public static Design = 'Conveyor_UDT'
	_Settings: {
		_Mode: Int16PlcTag;
		_AutomaticBuffering: BoolPlcTag;
		_Direction: BoolPlcTag;
		_EnergySave: BoolPlcTag;
		_RunIddle: BoolPlcTag;
		_AutoReset: BoolPlcTag;
		_SentHoldOnCheckReceive: BoolPlcTag;
		_Timings: ConveyorTimes_UDT;
		_Speed: {
		_speed: RealPlcTag;
		_UpstreamGain: RealPlcTag;
		_speedController: BoolPlcTag;
		};
		_Alarms: {
		_BlockDetectionOn: BoolPlcTag;
		_BlockedAtStartSensor: BoolPlcTag;
		_ParcelsToCloseDetectionOn: BoolPlcTag;
		_ParcelsToLongDetectionOn: BoolPlcTag;
		_ParcelToShortDetectionOn: BoolPlcTag;
		_BlockRetrys: Int16PlcTag;
		_SentTimeError: RealPlcTag;
		_TimeBetweenParcels: RealPlcTag;
		_MinSizeParcel: RealPlcTag;
		_MaxSizeParcel: RealPlcTag;
		};
		};
	_Cmd: {
		_Reset: BoolPlcTag;
		_ReInitialize: BoolPlcTag;
		_RunAuto: BoolPlcTag;
		_RunManual: BoolPlcTag;
		_SpeedAuto: RealPlcTag;
		_SpeedManual: RealPlcTag;
		_ReadyToReceive: BoolPlcTag;
		_ReadyToSent: BoolPlcTag;
		_InvertFlow: BoolPlcTag;
		_Direction: BoolPlcTag;
		_Accumulate: {
		_Acc_ext_1: BoolPlcTag;
		_Acc_ext_2: BoolPlcTag;
		_Acc_ext_3: BoolPlcTag;
		_Acc_ext_4: BoolPlcTag;
		_Acc_ext_5: BoolPlcTag;
		_Acc_TC_1: BoolPlcTag;
		_Acc_TC_2: BoolPlcTag;
		_Acc_TC_3: BoolPlcTag;
		_Acc_Scan_1: BoolPlcTag;
		_Acc_Scan_2: BoolPlcTag;
		_Acc_Scan_3: BoolPlcTag;
		_Acc_Scale_1: BoolPlcTag;
		_Acc_Scale_2: BoolPlcTag;
		_Acc_Scale_3: BoolPlcTag;
		};
		_StartRequestObject: BoolPlcTag;
		_StopRequestObject: BoolPlcTag;
		_IgnoreStandby: BoolPlcTag;
		_ManualOverride: BoolPlcTag;
		_Interlock: BoolPlcTag;
		};
	_Input: {
		_SensorStartHMI: BoolPlcTag;
		_SensorEndHMI: BoolPlcTag;
		_SensorAtStartLogic: SmartBooldt;
		_SensorAtEndLogic: SmartBooldt;
		_Running_FB: BoolPlcTag;
		_Interlock: BoolPlcTag;
		};
	_Alarms: {
		_BlockedReceive: HmiAlarm;
		_BlockedSending: HmiAlarm;
		_ToClose: HmiAlarm;
		_ToSmall: HmiAlarm;
		_ToLong: HmiAlarm;
		_MotorAlarm: HmiAlarm;
		_AlarmActive: HmiAlarm;
		_Status: WordlcTag;
		};
	_Status: {
		_AccumulationOn: BoolPlcTag;
		_StartedAutoMode: BoolPlcTag;
		_ReadyForStandby: BoolPlcTag;
		_RequestForSending: BoolPlcTag;
		_ExecutingReceiveSequence: BoolPlcTag;
		_ExecutingSendingSequence: BoolPlcTag;
		_ObjectSentPulse: BoolPlcTag;
		_ObjectReceivePulse: BoolPlcTag;
		_GapTimeOk: BoolPlcTag;
		_Empty: BoolPlcTag;
		_ObjectOnConveyor: BoolPlcTag;
		_Initialized: BoolPlcTag;
		_ManualMode: BoolPlcTag;
		};
	_TrackingCmd: {
		_InductNewTracking: BoolPlcTag;
		_ClearTracking: BoolPlcTag;
		_NewTrackingId: Tracking_Simple_UDT_1;
		};
	_TrackingStat: {
		_Current: Tracking_Simple_UDT_1;
		_InSending: Tracking_Simple_UDT_1;
		_TrackingReceived: BoolPlcTag;
		_TrackingCleared: BoolPlcTag;
		};
	_Encoder: VirtualEncoder_UDT;
	_DiagNostics: {
		_ReceivedCounter: UDIntPlcTag;
		_SendingCounter: UDIntPlcTag;
		};
	_Index: Int16PlcTag;
	_Name: StringPlcTag;
	_Zone: Int16PlcTag;

}