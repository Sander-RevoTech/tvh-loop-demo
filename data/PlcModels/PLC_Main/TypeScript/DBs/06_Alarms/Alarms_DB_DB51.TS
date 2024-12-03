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
export class Alarms_DB_DB51 {

	KeyName : string;
	Name: string;
	Number: number;
	Id: number;
	public static Design = 'Alarms_DB_DB51'
	_IPC_NotConnected: BoolPlcTag;
	_AlarmActiveShared: BoolPlcTag;
	_AlarmActive: BoolPlcTag;

	Constructor(){
	this.KeyName = "Alarms_DB_DB51"	}
}