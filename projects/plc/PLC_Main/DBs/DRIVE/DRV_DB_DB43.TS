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
import { Nord_Drive_UDT } from '../../Types/Nord/Nord_Drive_UDT';
export class DRV_DB_DB43 {

	KeyName : string;
	Name: string;
	Number: number;
	Id: number;
	public static Design = 'DRV_DB_DB43'
	_DRV_101_DRV_1: Nord_Drive_UDT;

	Constructor(){
	this.KeyName = "DRV_DB_DB43"	}
}