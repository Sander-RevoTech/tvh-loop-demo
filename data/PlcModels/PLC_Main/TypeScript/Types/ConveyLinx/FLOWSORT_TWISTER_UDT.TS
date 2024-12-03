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
import { ConveyLinxAlarms } from './ConveyLinxAlarms';
import { HmiAlarm } from '../Alarms/HmiAlarm';
import { MotorInfo } from '../Hardware/MotorInfo';
export class FLOWSORT_TWISTER_UDT extends PlcTagBase {
	public static Design = 'FLOWSORT_TWISTER_UDT'
	_Cmd: {
		_Reset: BoolPlcTag;
		_Interlock: BoolPlcTag;
		_Home_Init: BoolPlcTag;
		_SetPointDegAuto: RealPlcTag;
		_SetPointDegManual: RealPlcTag;
		_SpeedServo: Int16PlcTag;
		_SpeedInit: Int16PlcTag;
		_BrakeMode: WordlcTag;
		_Accel: Int16PlcTag;
		_Deaccel: Int16PlcTag;
		_ServoResetPulseCount: BoolPlcTag;
		_ServoRunToSetpoint: BoolPlcTag;
		_ServoControlDistance: Int16PlcTag;
		};
	_Alarms: {
		_MdrAlarms: ConveyLinxAlarms;
		_TimedOutHoming: HmiAlarm;
		_Status: WordlcTag;
		};
	_Status: {
		_Interlocked: BoolPlcTag;
		_ManualModeActive: BoolPlcTag;
		_ManualCommandsDisabled: BoolPlcTag;
		_Running: BoolPlcTag;
		_Homed_Intialized: BoolPlcTag;
		_ActualSpeed: Int16PlcTag;
		_ServoStatus: {
		_LastServoCommandExecuted: BoolPlcTag;
		_ResetPulseCount_Echo: BoolPlcTag;
		_RunCommand_Echo: BoolPlcTag;
		};
		_Position: Int16PlcTag;
		_PositionDeg: RealPlcTag;
		_Current: Int16PlcTag;
		_MinVoltage: Int16PlcTag;
		_MaxVoltage: Int16PlcTag;
		_Voltage: Int16PlcTag;
		_Frequency: Int16PlcTag;
		_TeperatureMDR: BytePlcTag;
		_TemperatureModule: BytePlcTag;
		_Status: WordlcTag;
		};
	_CalculatedSettings: {
		_PulsesPerDeg: RealPlcTag;
		};
	_Settings: {
		_OffsetDeg: RealPlcTag;
		_Default: RealPlcTag;
		_Option_1: RealPlcTag;
		_Option_2: RealPlcTag;
		_Option_3: RealPlcTag;
		};
	_Heartbeat: BoolPlcTag;
	_StopStatus: {
		_StopActiveCommandPLC: BoolPlcTag;
		_StopActiveOtherModule: BoolPlcTag;
		_StopActiveLostConn: BoolPlcTag;
		_StopActiveLostPLC: BoolPlcTag;
		};
	_Info: MotorInfo;
	_Zone: Int16PlcTag;

}