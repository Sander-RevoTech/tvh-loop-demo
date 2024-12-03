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
export class COGNEX_DATAMAN_IN_STATUS_UDT extends PlcTagBase {
	public static Design = 'COGNEX_DATAMAN_IN_STATUS_UDT'
	_TriggerReady: BoolPlcTag;
	_TriggerAck: BoolPlcTag;
	_spare2: BoolPlcTag;
	_MissedAck: BoolPlcTag;
	_spare4: BoolPlcTag;
	_spare5: BoolPlcTag;
	_spare6: BoolPlcTag;
	_spare7: BoolPlcTag;
	_TriggerId_LSB: BytePlcTag;
	_TriggerId_MSB: BytePlcTag;

}