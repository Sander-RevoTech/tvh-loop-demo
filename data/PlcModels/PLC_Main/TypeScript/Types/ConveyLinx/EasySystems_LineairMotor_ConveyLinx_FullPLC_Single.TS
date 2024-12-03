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
export class EasySystems_LineairMotor_ConveyLinx_FullPLC_Single extends PlcTagBase {
	public static Design = 'EasySystems_LineairMotor_ConveyLinx_FullPLC_Single'
	_Cmd: {
		_Reset: BoolPlcTag;
		_Interlock: BoolPlcTag;
		_SpeedInit: Int16PlcTag;
		_SpeedAuto: Int16PlcTag;
		_SpeedManual: Int16PlcTag;
		_UpAuto: BoolPlcTag;
		_UpManual: BoolPlcTag;
		_DownAuto: BoolPlcTag;
		_DownManual: BoolPlcTag;
		_BrakeMode: WordlcTag;
		_Accel: Int16PlcTag;
		_Deaccel: Int16PlcTag;
		_ServoResetPulseCount: BoolPlcTag;
		_ServoRunToSetpoint: BoolPlcTag;
		_InitPosition: BoolPlcTag;
		_ServoControlDistance: Int16PlcTag;
		};
	_Alarms: {
		_MdrAlarms: ConveyLinxAlarms;
		_NotUp: HmiAlarm;
		_NotDown: HmiAlarm;
		_HomingTimedOut: HmiAlarm;
		_Status: WordlcTag;
		};
	_Status: {
		_Interlocked: BoolPlcTag;
		_ManualModeActive: BoolPlcTag;
		_ManualCommandsDisabled: BoolPlcTag;
		_Running: BoolPlcTag;
		_PositionLineair: Int16PlcTag;
		_ActualSpeed: Int16PlcTag;
		_ServoStatus: {
		_LastServoCommandExecuted: BoolPlcTag;
		_ResetPulseCount_Echo: BoolPlcTag;
		_RunCommand_Echo: BoolPlcTag;
		};
		_Homed_Intialized: BoolPlcTag;
		_Position: Int16PlcTag;
		_Current: Int16PlcTag;
		_MinVoltage: Int16PlcTag;
		_MaxVoltage: Int16PlcTag;
		_Voltage: Int16PlcTag;
		_Frequency: Int16PlcTag;
		_TeperatureMDR: BytePlcTag;
		_TemperatureModule: BytePlcTag;
		_Status: WordlcTag;
		};
	_Settings: {
		_PositionOffset: DIntPlcTag;
		_UpPosition: RealPlcTag;
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
	_Index: Int16PlcTag;

}