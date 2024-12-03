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
import { RUNTIME_UDT } from '../../Types/Tools/RUNTIME_UDT';
export class RunTime_DB_DB88 {

	KeyName : string;
	Name: string;
	Number: number;
	Id: number;
	public static Design = 'RunTime_DB_DB88'
	_CycleRun: Int16PlcTag;
	_InputRuntTime: RUNTIME_UDT;
	_InterfacingRunTime: RUNTIME_UDT;
	_UserControlRunTime: RUNTIME_UDT;
	_LogicRunTime: RUNTIME_UDT;
	_OutputRunTime: RUNTIME_UDT;

	Constructor(){
	this.KeyName = "RunTime_DB_DB88"	}
}