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
export class GlobalApplicationStatus_UDT extends PlcTagBase {
	public static Design = 'GlobalApplicationStatus_UDT'
	_LED: {
		_GreenLED: BoolPlcTag;
		_GreenLEDFlash: BoolPlcTag;
		_RedLED: BoolPlcTag;
		_RedLEDFlash: BoolPlcTag;
		_BlueLED: BoolPlcTag;
		_BlueLEDFlash: BoolPlcTag;
		};
	_States: {
		_AutoMode: BoolPlcTag;
		_ManualMode: BoolPlcTag;
		_EmptyMode: BoolPlcTag;
		_AlarmActive: BoolPlcTag;
		_EmergencyOk: BoolPlcTag;
		};

}