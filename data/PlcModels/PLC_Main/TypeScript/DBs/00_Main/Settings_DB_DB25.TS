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
export class Settings_DB_DB25 {

	KeyName : string;
	Name: string;
	Number: number;
	Id: number;
	public static Design = 'Settings_DB_DB25'
	_heightBoxSort: RealPlcTag;
	_alwaysShipping: BoolPlcTag;
	_alwaysProduct: BoolPlcTag;
	_crossRouting: BoolPlcTag;

	Constructor(){
	this.KeyName = "Settings_DB_DB25"	}
}