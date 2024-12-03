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
export class Counter_UDT extends PlcTagBase {
	public static Design = 'Counter_UDT'
	_Cmd: {
		_CountUp: BoolPlcTag;
		_ShiftHours: BoolPlcTag;
		_Reset: BoolPlcTag;
		};
	_CounterStatus: {
		_TotalCounter: UInt16PlcTag;
		_HourlyCounters: UInt16PlcTag[] // Length 8;
		_MovingAverageCounters: UInt16PlcTag[] // Length 60;
		_CapacityCounter05Min: UInt16PlcTag;
		_CapacityCounter10Min: UInt16PlcTag;
		_CapacityCounter15Min: UInt16PlcTag;
		};
	_Name: StringPlcTag;
	_Zone: UInt16PlcTag;

}