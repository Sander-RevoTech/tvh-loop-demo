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
import { GlobalApplicationStatus_UDT } from '../../Types/appstate/GlobalApplicationStatus_UDT';
import { ApplicationState_UDT } from '../../Types/appstate/ApplicationState_UDT';
import { ZoneInfo } from '../../Types/appstate/ZoneInfo';
export class ApplicationState_DB_DB13 {

	KeyName : string;
	Name: string;
	Number: number;
	Id: number;
	public static Design = 'ApplicationState_DB_DB13'
	_GlobalState: GlobalApplicationStatus_UDT;
	_Appstate: ApplicationState_UDT[] // Length 53;
	_ZoneNames: ZoneInfo[] // Length 53;
	_MasterSpeed: RealPlcTag;

	Constructor(){
	this.KeyName = "ApplicationState_DB_DB13"	}
}