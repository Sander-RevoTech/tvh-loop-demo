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
import { MotorInfo } from './MotorInfo';
export class Motor_DOL_UDT extends PlcTagBase {
	public static Design = 'Motor_DOL_UDT'
	_Cmd: {
		_Reset: BoolPlcTag;
		_Interlock: BoolPlcTag;
		_OnAuto: BoolPlcTag;
		_OnManual: BoolPlcTag;
		_DirectionAuto: BoolPlcTag;
		_DirectionManual: BoolPlcTag;
		};
	_Alarms: {
		_NotOnTImedOut: HmiAlarm;
		_NotOffTimedOut: HmiAlarm;
		_ThermalProtection: HmiAlarm;
		_AlarmStatus: WordlcTag;
		};
	_Status: {
		_Interlocked: BoolPlcTag;
		_ManualModeActive: BoolPlcTag;
		_ManualCommandsDisabled: BoolPlcTag;
		_Running: BoolPlcTag;
		_Status: WordlcTag;
		};
	_Name: StringPlcTag;
	_Zone: Int16PlcTag;
	_Info: MotorInfo;
	_CommonStatus: Int16PlcTag;

}