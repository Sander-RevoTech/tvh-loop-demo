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
import { HMIButton_UDT } from '../../Types/Tools/HMIButton_UDT';
import { SmartBool } from './SmartBool';
export class HmiButton extends PlcTagBase {
	public static Design = 'HmiButton'
	_I_Enable: BoolPlcTag;
	_I_Flash: BoolPlcTag;
	_I_Type: Int16PlcTag;
	_ButtonStatus: HMIButton_UDT;
	_S_smartbool: SmartBool;
	_T_Signal: BoolPlcTag;

}