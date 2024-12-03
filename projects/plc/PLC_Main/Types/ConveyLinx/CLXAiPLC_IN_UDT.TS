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
export class CLXAiPLC_IN_UDT extends PlcTagBase {
	public static Design = 'CLXAiPLC_IN_UDT'
	_Convey_stop_status: {
		_Reserved0: BoolPlcTag;
		_Reserved1: BoolPlcTag;
		_StopActiveCommandPLC: BoolPlcTag;
		_Reserved3: BoolPlcTag;
		_Reserved4: BoolPlcTag;
		_Reserved5: BoolPlcTag;
		_Reserved6: BoolPlcTag;
		_Reserved7: BoolPlcTag;
		_Reserved8: BoolPlcTag;
		_Reserved9: BoolPlcTag;
		_Reserved10: BoolPlcTag;
		_Reserved11: BoolPlcTag;
		_Reserved12: BoolPlcTag;
		_StopActiveOtherModule: BoolPlcTag;
		_StopActiveLostConn: BoolPlcTag;
		_StopActiveLostPLC: BoolPlcTag;
		};
	_AllSensors: {
		_Reserved_0_: BoolPlcTag;
		_Reserved_1_: BoolPlcTag;
		_Reserved_2_: BoolPlcTag;
		_Reserved_3_: BoolPlcTag;
		_Reserved_4_: BoolPlcTag;
		_Reserved_5_: BoolPlcTag;
		_Reserved_6_: BoolPlcTag;
		_Heartbeat: BoolPlcTag;
		_LeftPin2: BoolPlcTag;
		_Reserved_9_: BoolPlcTag;
		_RightPin2: BoolPlcTag;
		_Reserved_11_: BoolPlcTag;
		_LeftPin4: BoolPlcTag;
		_Reserved_13_: BoolPlcTag;
		_RightPin4: BoolPlcTag;
		_Reserved_15_: BoolPlcTag;
		};
	_SensorDetect: {
		_Reserved: BytePlcTag;
		_RightSensorDetect: BoolPlcTag;
		_LeftSensorDetect: BoolPlcTag;
		_Reserved_10_: BoolPlcTag;
		_Reserved_11_: BoolPlcTag;
		_Reserved_12_: BoolPlcTag;
		_Reserved_13_: BoolPlcTag;
		_Reserved_14_: BoolPlcTag;
		_Reserved_15_: BoolPlcTag;
		};
	_Voltage: Int16PlcTag;
	_LeftCurrent: Int16PlcTag;
	_LeftFreq: Int16PlcTag;
	_LeftCalcTemp: BytePlcTag;
	_ModuleTemp: BytePlcTag;
	_LeftMDRDiagnostic: {
		_Overheat: BoolPlcTag;
		_MaxTorque: BoolPlcTag;
		_ShortCircuit: BoolPlcTag;
		_MDRNotConnected: BoolPlcTag;
		_Overload: BoolPlcTag;
		_Stalled: BoolPlcTag;
		_MDRBadHall: BoolPlcTag;
		_MDRNotUsed: BoolPlcTag;
		_MDRStatus1: BoolPlcTag;
		_MDRStatus2: BoolPlcTag;
		_MDRinDOmode: BoolPlcTag;
		_Reserved1: BoolPlcTag;
		_Reserved2: BoolPlcTag;
		_Reserved3: BoolPlcTag;
		_OverVoltage: BoolPlcTag;
		_LowVoltage: BoolPlcTag;
		};
	_RightCurrent: Int16PlcTag;
	_RightFreq: Int16PlcTag;
	_RightCalcTemp: BytePlcTag;
	_ModuleTemp_1: BytePlcTag;
	_RightMDRDiagnostic: {
		_Overheat: BoolPlcTag;
		_MaxTorque: BoolPlcTag;
		_ShortCircuit: BoolPlcTag;
		_MDRNotConnected: BoolPlcTag;
		_Overload: BoolPlcTag;
		_Stalled: BoolPlcTag;
		_MDRBadHall: BoolPlcTag;
		_MDRNotUsed: BoolPlcTag;
		_MDRStatus1: BoolPlcTag;
		_MDRStatus2: BoolPlcTag;
		_MDRinDOmode: BoolPlcTag;
		_Reserved1: BoolPlcTag;
		_Reserved2: BoolPlcTag;
		_Reserved3: BoolPlcTag;
		_OverVoltage: BoolPlcTag;
		_LowVoltage: BoolPlcTag;
		};
	_LeftMDR_DIOstatus: {
		_Reserved0: BoolPlcTag;
		_Reserved1: BoolPlcTag;
		_Reserved2: BoolPlcTag;
		_Reserved3: BoolPlcTag;
		_ShortCircuit: BoolPlcTag;
		_Reserved5: BoolPlcTag;
		_Reserved6: BoolPlcTag;
		_Reserved7: BoolPlcTag;
		_Reserved: BytePlcTag;
		};
	_RightMDR_DIOstatus: {
		_Reserved0: BoolPlcTag;
		_Reserved1: BoolPlcTag;
		_Reserved2: BoolPlcTag;
		_Reserved3: BoolPlcTag;
		_ShortCircuit: BoolPlcTag;
		_Reserved5: BoolPlcTag;
		_Reserved6: BoolPlcTag;
		_Reserved7: BoolPlcTag;
		_Reserved: BytePlcTag;
		};
	_UpstreamModuleStatus: WordlcTag;
	_DownstreamModuleStatus: WordlcTag;
	_TrackingFromUpstream: DWordPlcTag;
	_Reserved: WordlcTag;
	_DistanceLeft: Int16PlcTag;
	_DistanceRight: Int16PlcTag;
	_ServoStatusLeft: {
		_Reserve_6: BytePlcTag;
		_LastServoCommandExecuted: BoolPlcTag;
		_ResetPulseCount_Echo: BoolPlcTag;
		_RunCommand_Echo: BoolPlcTag;
		_Reserve_1: BoolPlcTag;
		_Reserve_2: BoolPlcTag;
		_Reserve_3: BoolPlcTag;
		_Reserve_4: BoolPlcTag;
		_Reserve_5: BoolPlcTag;
		};
	_ServoStatusRight: {
		_Reserve_6: BytePlcTag;
		_LastServoCommandExecuted: BoolPlcTag;
		_ResetPulseCount_Echo: BoolPlcTag;
		_RunCommand_Echo: BoolPlcTag;
		_Reserve_1: BoolPlcTag;
		_Reserve_2: BoolPlcTag;
		_Reserve_3: BoolPlcTag;
		_Reserve_4: BoolPlcTag;
		_Reserve_5: BoolPlcTag;
		};
	_LeftMDRRealSpeed: WordlcTag;
	_RightMDRRealSpeed: WordlcTag;
	_Future: WordlcTag[] // Length 7;

}