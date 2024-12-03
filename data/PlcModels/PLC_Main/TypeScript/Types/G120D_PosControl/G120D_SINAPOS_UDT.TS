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
import { HandShake_UDT } from '../Tools/HandShake_UDT';
import { HeartBeatButton_UDT } from '../Tools/HeartBeatButton_UDT';
import { MotorInfo } from '../Hardware/MotorInfo';
export class G120D_SINAPOS_UDT extends PlcTagBase {
	public static Design = 'G120D_SINAPOS_UDT'
	_Cmd: {
		_Reset: BoolPlcTag;
		_auto: {
		_mode: Int16PlcTag;
		_speed: RealPlcTag;
		_pos: RealPlcTag;
		_enable: BoolPlcTag;
		_direction: BoolPlcTag;
		_executeMode: BoolPlcTag;
		};
		_manual: {
		_speed: RealPlcTag;
		_stop: HandShake_UDT;
		_jog1: HeartBeatButton_UDT;
		_jog2: HeartBeatButton_UDT;
		_activateHoming: BoolPlcTag;
		};
		};
	_Faults: {
		_status: WordlcTag;
		_FaultCode: WordlcTag;
		_FaultActive: BoolPlcTag;
		_Disconnected: BoolPlcTag;
		_NotOnTImedOut: BoolPlcTag;
		_NotReady: BoolPlcTag;
		_SafetyProx_1: BoolPlcTag;
		_SafetyProx_2: BoolPlcTag;
		_STO_ACTIVE: BoolPlcTag;
		_SAFETY_FAULT_ACTIVE: BoolPlcTag;
		};
	_Alarms: {
		_Status: WordlcTag;
		_AlarmCode: WordlcTag;
		_AlarmFromDrive: BoolPlcTag;
		_NotHomed: BoolPlcTag;
		};
	_Status: {
		_CurrentMode: Int16PlcTag;
		_CmdRunManualActive: BoolPlcTag;
		_Interlocked: BoolPlcTag;
		_ManualModeActive: BoolPlcTag;
		_ManualCommandsDisabled: BoolPlcTag;
		_Running: BoolPlcTag;
		_ActualSpeed: RealPlcTag;
		_ActualPosition: RealPlcTag;
		_ActualDirection: BoolPlcTag;
		_atPosition: BoolPlcTag;
		_homed: BoolPlcTag;
		_enabled: BoolPlcTag;
		};
	_Settings: {
		_VelocityOverride: Int16PlcTag;
		_AccelerationOverride: Int16PlcTag;
		_DeaccelarationOverride: Int16PlcTag;
		_maxJogSpeed: Int16PlcTag;
		_minJogSpeed: Int16PlcTag;
		};
	_Zone: Int16PlcTag;
	_info: MotorInfo;

}