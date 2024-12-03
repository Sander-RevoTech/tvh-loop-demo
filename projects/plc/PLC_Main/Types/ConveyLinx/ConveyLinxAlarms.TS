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
export class ConveyLinxAlarms extends PlcTagBase {
	public static Design = 'ConveyLinxAlarms'
	_Overheat: HmiAlarm;
	_ShortCircuit: HmiAlarm;
	_MDRNotConnected: HmiAlarm;
	_Overload: HmiAlarm;
	_Stalled: HmiAlarm;
	_MDRBadHall: HmiAlarm;
	_OverVoltage: HmiAlarm;
	_LowVoltage: HmiAlarm;
	_NotConnected: HmiAlarm;
	_ConnectionNotOK: HmiAlarm;
	_AnyErrorActive: HmiAlarm;
	_JamError: HmiAlarm;
	_SensorLowGain: HmiAlarm;
	_Status_1: WordlcTag;

}