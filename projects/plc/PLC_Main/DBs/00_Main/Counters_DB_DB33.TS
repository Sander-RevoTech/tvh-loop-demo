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
export class Counters_DB_DB33 {

	KeyName : string;
	Name: string;
	Number: number;
	Id: number;
	public static Design = 'Counters_DB_DB33'
	_BOT_SLM_TRAYS: {
		_SLM1: UInt16PlcTag;
		_SLM2: UInt16PlcTag;
		_SLM3: UInt16PlcTag;
		_SLM4: UInt16PlcTag;
		};

	Constructor(){
	this.KeyName = "Counters_DB_DB33"	}
}