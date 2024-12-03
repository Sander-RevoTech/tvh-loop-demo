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
export class EVO_LABEL_UDT extends PlcTagBase {
	public static Design = 'EVO_LABEL_UDT'
	_alarms: {
		_status: WordlcTag;
		_offline: BoolPlcTag;
		_markerError: BoolPlcTag;
		_applicatorError: BoolPlcTag;
		};
	_name: StringPlcTag;
	_zone: UInt16PlcTag;

}