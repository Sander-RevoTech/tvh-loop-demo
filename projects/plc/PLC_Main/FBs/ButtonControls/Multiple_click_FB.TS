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
export class Multiple_click_FB extends PlcTagBase {
	public static Design = 'Multiple_click_FB'
	_I_Signal: SmartBooldt;
	_I_Clicks: UInt16PlcTag;
	_O_SignalClick: BoolPlcTag;
	_iddle: TON_TIME;
	_counts: UInt16PlcTag;

}