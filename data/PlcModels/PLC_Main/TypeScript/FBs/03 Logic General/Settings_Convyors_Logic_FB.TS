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
export class Settings_Convyors_Logic_FB extends PlcTagBase {
	public static Design = 'Settings_Convyors_Logic_FB'
	_settingsSaved: BoolPlcTag;
	_T_SPEED: RealPlcTag;
	_T_mode: Int16PlcTag;
	_T_RunIddle: BoolPlcTag;

}