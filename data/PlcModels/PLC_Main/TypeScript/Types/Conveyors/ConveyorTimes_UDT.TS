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
export class ConveyorTimes_UDT extends PlcTagBase {
	public static Design = 'ConveyorTimes_UDT'
	_DelayedStart: TimeMsPlcTag;
	_ConveyorLength: RealPlcTag;
	_InitDistance: RealPlcTag;
	_ReceiveDistance: RealPlcTag;
	_SendDistance: RealPlcTag;
	_SleepDistance: RealPlcTag;
	_GapDistance: RealPlcTag;
	_StartupDelay: TimeMsPlcTag;

}