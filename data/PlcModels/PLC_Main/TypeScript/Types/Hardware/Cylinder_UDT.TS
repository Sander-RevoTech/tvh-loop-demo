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
export class Cylinder_UDT extends PlcTagBase {
	public static Design = 'Cylinder_UDT'
	_Cmd: {
		_InAuto: BoolPlcTag;
		_OutAuto: BoolPlcTag;
		_InManual: BoolPlcTag;
		_OutManual: BoolPlcTag;
		_InManualHMI: BoolPlcTag;
		_OutManualHMI: BoolPlcTag;
		_Interlock: BoolPlcTag;
		};
	_Alarms: {
		_NotIn: HmiAlarm;
		_NotOut: HmiAlarm;
		_Status: WordlcTag;
		};
	_Status: {
		_Position: Int16PlcTag;
		_ManualModeActive: BoolPlcTag;
		_ManualCommandsDisabled: BoolPlcTag;
		_Interlocked: BoolPlcTag;
		_status: WordlcTag;
		};
	_Settings: {
		_feedBackInDelay: TimeMsPlcTag;
		_feedBackOutDelay: TimeMsPlcTag;
		_CylinderInTime: TimeMsPlcTag;
		_CylinderOutTime: TimeMsPlcTag;
		_CmdOnError: BoolPlcTag;
		_CopyCommands: BoolPlcTag;
		_CylinderType: Int16PlcTag;
		_EnableManualIn: BoolPlcTag;
		_EnableManualOut: BoolPlcTag;
		};
	_Name: StringPlcTag;
	_Zone: Int16PlcTag;

}