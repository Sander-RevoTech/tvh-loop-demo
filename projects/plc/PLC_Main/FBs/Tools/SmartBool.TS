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
} from '../../Types/BaseTypes';
import { SmartBooldt } from '../../Types/Tools/SmartBooldt';
import { TON_TIME } from '../TON_TIME';
import { TOF_TIME } from '../TOF_TIME';
export class SmartBool extends PlcTagBase {
	public static Design = 'SmartBool'
	_I_Sensor: BoolPlcTag;
	_I_Simulate: BoolPlcTag;
	_HoldOnTIme: TimeMsPlcTag;
	_DelayOnTime: TimeMsPlcTag;
	_O_data: SmartBooldt;
	_S_Prev_Val: BoolPlcTag;
	_S_DelayOnTime: TON_TIME;
	_S_HoldOnTimer: TOF_TIME;
	_S_LE: BoolPlcTag;
	_S_FE: BoolPlcTag;
	_S_SensorState: BoolPlcTag;
	_S_HoldOn: BoolPlcTag;
	_T_Signal: BoolPlcTag;

}