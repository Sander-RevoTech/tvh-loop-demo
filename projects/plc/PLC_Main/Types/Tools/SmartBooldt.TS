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
} from '../BaseTypes';
export class SmartBooldt extends PlcTagBase {
	public static Design = 'SmartBooldt'
	_State: BoolPlcTag;
	_LE: BoolPlcTag;
	_FE: BoolPlcTag;
	_sensorTest: BoolPlcTag;
	_IddleSignal: BoolPlcTag;
	_testFailed: BoolPlcTag;
	_Counter: UInt16PlcTag;

}