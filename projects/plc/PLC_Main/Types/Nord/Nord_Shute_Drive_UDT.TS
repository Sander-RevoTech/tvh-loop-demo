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
import { SmartBooldt } from '../Tools/SmartBooldt';
import { MotorInfo } from '../Hardware/MotorInfo';
export class Nord_Shute_Drive_UDT extends PlcTagBase {
	public static Design = 'Nord_Shute_Drive_UDT'
	_Cmd: {
		_Reset: BoolPlcTag;
		_Auto: {
		_cmd_move: BoolPlcTag;
		_speed: RealPlcTag;
		};
		_Manual: {
		_cmd_move: BoolPlcTag;
		_home: BoolPlcTag;
		_speed: RealPlcTag;
		};
		_Interlock: BoolPlcTag;
		};
	_Alarms: {
		_ServoModeTimedOut_x0: BoolPlcTag;
		_NotInHome_x1: BoolPlcTag;
		_HomingTimedout_x2: BoolPlcTag;
		_ErrorFromDrive_x3: BoolPlcTag;
		_CannotStartError_x4: BoolPlcTag;
		_EmergencyStopActive_x5: BoolPlcTag;
		_Disconnected_x6: BoolPlcTag;
		_WarningFromDrive_x7: BoolPlcTag;
		_AlarmStatus: WordlcTag;
		};
	_Status: {
		_Interlocked: BoolPlcTag;
		_ManualModeActive: BoolPlcTag;
		_ManualCommandsDisabled: BoolPlcTag;
		_running: BoolPlcTag;
		_homed: BoolPlcTag;
		_movement_done: SmartBooldt;
		_in_home: BoolPlcTag;
		_ActualSpeed: RealPlcTag;
		_ActualDirection: BoolPlcTag;
		_ReadyToStart: BoolPlcTag;
		_ReadyForOperaiton: BoolPlcTag;
		_PowerOn: BoolPlcTag;
		};
	_Settings: {
		_direction: BoolPlcTag;
		};
	_Zone: Int16PlcTag;
	_info: MotorInfo;

}