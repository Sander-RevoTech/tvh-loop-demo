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
import { HmiAlarm } from '../Alarms/HmiAlarm';
import { MotorInfo } from '../Hardware/MotorInfo';
export class Nord_Drive_UDT extends PlcTagBase {
	public static Design = 'Nord_Drive_UDT'
	_Cmd: {
		_Reset: BoolPlcTag;
		_OnAuto: BoolPlcTag;
		_OnManual: BoolPlcTag;
		_DirectionAuto: BoolPlcTag;
		_DirectionManual: BoolPlcTag;
		_SpeedAuto: RealPlcTag;
		_SpeedManual: RealPlcTag;
		_Interlock: BoolPlcTag;
		};
	_Alarms: {
		_NotOnTImedOut: HmiAlarm;
		_NotOffTimedOut: HmiAlarm;
		_ErrorFromDrive: HmiAlarm;
		_CannotStartError: HmiAlarm;
		_EmergencyStopActive: HmiAlarm;
		_Disconnected: HmiAlarm;
		_WarningFromDrive: HmiAlarm;
		_AlarmStatus: WordlcTag;
		};
	_Status: {
		_CmdRunManualActive: BoolPlcTag;
		_Interlocked: BoolPlcTag;
		_ManualModeActive: BoolPlcTag;
		_ManualCommandsDisabled: BoolPlcTag;
		_Running: BoolPlcTag;
		_ActualSpeed: RealPlcTag;
		_ActualDirection: BoolPlcTag;
		_ReadyToStart: BoolPlcTag;
		_ReadyForOperaiton: BoolPlcTag;
		_PowerOn: BoolPlcTag;
		_Status: WordlcTag;
		};
	_Settings: {
		_DefaultDirection: BoolPlcTag;
		_InverseDirectionLabel: BoolPlcTag;
		_AllowManualDirection: BoolPlcTag;
		_MaxSpeedManual: RealPlcTag;
		_MinSpeedManual: RealPlcTag;
		};
	_Zone: Int16PlcTag;
	_Commonstatus: Int16PlcTag;
	_GroupNumber: Int16PlcTag;
	_info: MotorInfo;

}