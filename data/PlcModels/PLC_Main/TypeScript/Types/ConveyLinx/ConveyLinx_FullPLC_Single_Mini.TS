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
import { MotorInfo } from '../Hardware/MotorInfo';
export class ConveyLinx_FullPLC_Single_Mini extends PlcTagBase {
	public static Design = 'ConveyLinx_FullPLC_Single_Mini'
	_Cmd: {
		_Reset: BoolPlcTag;
		_Interlock: BoolPlcTag;
		_SpeedAuto: Int16PlcTag;
		_SpeedManual: Int16PlcTag;
		_RunAuto: BoolPlcTag;
		_RunManual: BoolPlcTag;
		_DirectionAuto: BoolPlcTag;
		_DirectionManual: BoolPlcTag;
		};
	_Alarms: ConveyLinxAlarms;
	_Status: {
		_Interlocked: BoolPlcTag;
		_ManualModeActive: BoolPlcTag;
		_ManualCommandsDisabled: BoolPlcTag;
		_Running: BoolPlcTag;
		_TeperatureMDR: BytePlcTag;
		_TemperatureModule: BytePlcTag;
		_Status: WordlcTag;
		};
	_Settings: {
		_DefaultDirection: BoolPlcTag;
		_InverseDirectionLabel: BoolPlcTag;
		_AllowManualDirection: BoolPlcTag;
		_MaxSpeedManual: RealPlcTag;
		_MinSpeedManual: RealPlcTag;
		};
	_Heartbeat: BoolPlcTag;
	_StopStatus: {
		_StopActiveCommandPLC: BoolPlcTag;
		_StopActiveOtherModule: BoolPlcTag;
		_StopActiveLostConn: BoolPlcTag;
		_StopActiveLostPLC: BoolPlcTag;
		};
	_Zone: Int16PlcTag;
	_Info: MotorInfo;
	_Index: Int16PlcTag;

}