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
import { MotorInfo } from '../Hardware/MotorInfo';
export class G115D_DRIVE_UDT extends PlcTagBase {
	public static Design = 'G115D_DRIVE_UDT'
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
	_Faults: {
		_status: WordlcTag;
		_FaultCode: WordlcTag;
		_FaultActive: BoolPlcTag;
		_Disconnected: BoolPlcTag;
		_TorqueNOK: BoolPlcTag;
		_TemperatureNOK: BoolPlcTag;
		_CurrentNOK: BoolPlcTag;
		_NotOnTImedOut: BoolPlcTag;
		_NotReady: BoolPlcTag;
		_SAFETY_ERROR_ACTIVE: BoolPlcTag;
		_STO_ACTIVE: BoolPlcTag;
		};
	_Alarms: {
		_Status: WordlcTag;
		_AlarmCode: WordlcTag;
		_AlarmFromDrive: BoolPlcTag;
		};
	_Status: {
		_CmdRunManualActive: BoolPlcTag;
		_Interlocked: BoolPlcTag;
		_ManualModeActive: BoolPlcTag;
		_ManualCommandsDisabled: BoolPlcTag;
		_Running: BoolPlcTag;
		_ActualSpeed: RealPlcTag;
		_ActualDirection: BoolPlcTag;
		_Ready: BoolPlcTag;
		_Current: RealPlcTag;
		_Torque: RealPlcTag;
		};
	_Settings: {
		_DefaultDirection: BoolPlcTag;
		_AllowManualDirection: BoolPlcTag;
		_MaxSpeedManual: RealPlcTag;
		_MinSpeedManual: RealPlcTag;
		_MaxSpeedAuto: RealPlcTag;
		_MinSpeedAuto: RealPlcTag;
		_references: {
		_maxSpeedReference: RealPlcTag;
		_referenceSpeed: RealPlcTag;
		_referenceVoltage: RealPlcTag;
		_referenceCurrent: RealPlcTag;
		_referenceTorque: RealPlcTag;
		_referencePower: RealPlcTag;
		};
		};
	_Zone: Int16PlcTag;
	_info: MotorInfo;

}