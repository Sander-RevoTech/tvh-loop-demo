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
import { COGNEX_DATAMAN_LOGIC_UDT } from '../../Types/Cognex/COGNEX_DATAMAN_LOGIC_UDT';
export class Scanners_DB_DB4 {

	KeyName : string;
	Name: string;
	Number: number;
	Id: number;
	public static Design = 'Scanners_DB_DB4'
	_dummy: COGNEX_DATAMAN_LOGIC_UDT;
	_SCAN_100: COGNEX_DATAMAN_LOGIC_UDT;

	Constructor(){
	this.KeyName = "Scanners_DB_DB4"	}
}