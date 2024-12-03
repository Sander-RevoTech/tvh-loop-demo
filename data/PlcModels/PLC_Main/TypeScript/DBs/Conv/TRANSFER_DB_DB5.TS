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
import { TransferUnitUpDown } from '../../Types/Conveyors/TransferUnitUpDown';
export class TRANSFER_DB_DB5 {

	KeyName : string;
	Name: string;
	Number: number;
	Id: number;
	public static Design = 'TRANSFER_DB_DB5'
	_T201L: TransferUnitUpDown;
	_T203L: TransferUnitUpDown;

	Constructor(){
	this.KeyName = "TRANSFER_DB_DB5"	}
}