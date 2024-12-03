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
import { SmartBool } from './SmartBool';
export class SR extends PlcTagBase {
	public static Design = 'SR'
	_I_set: BoolPlcTag;
	_I_Reset: BoolPlcTag;
	_O_StateExtend: SmartBooldt;
	_O_state: BoolPlcTag;
	_S_Reader: SmartBool;
	_S_State: BoolPlcTag;

}