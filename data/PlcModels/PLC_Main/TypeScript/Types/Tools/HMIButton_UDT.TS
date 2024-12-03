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
import { SmartBooldt } from './SmartBooldt';
export class HMIButton_UDT extends PlcTagBase {
	public static Design = 'HMIButton_UDT'
	_SignalFromHMI: BoolPlcTag;
	_state: SmartBooldt;
	_colorNumber: Int16PlcTag;
	_Hide: BoolPlcTag;

}