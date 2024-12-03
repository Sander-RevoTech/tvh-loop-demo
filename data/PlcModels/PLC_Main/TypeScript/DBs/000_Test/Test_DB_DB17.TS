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
export class Test_DB_DB17 {

	KeyName : string;
	Name: string;
	Number: number;
	Id: number;
	public static Design = 'Test_DB_DB17'
	_test: BoolPlcTag;
	_alarmInfo: StringPlcTag;
	_Test_Reset: BoolPlcTag;
	_Counter: Int16PlcTag;
	_testTime: RealPlcTag;
	_goodscan: BoolPlcTag;
	_good3d: BoolPlcTag;
	_goodcollect: Int16PlcTag;

	Constructor(){
	this.KeyName = "Test_DB_DB17"	}
}