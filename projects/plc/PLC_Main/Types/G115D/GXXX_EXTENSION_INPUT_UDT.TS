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
export class GXXX_EXTENSION_INPUT_UDT extends PlcTagBase {
	public static Design = 'GXXX_EXTENSION_INPUT_UDT'
	_DigitalInputState: {
		_di_24: BoolPlcTag;
		_di_25: BoolPlcTag;
		_spare_1: BoolPlcTag;
		_spare_2: BoolPlcTag;
		_spare_3: BoolPlcTag;
		_spare_4: BoolPlcTag;
		_spare_5: BoolPlcTag;
		_spare_6: BoolPlcTag;
		_spare_7: BytePlcTag;
		_spare_8: BytePlcTag;
		_di_0: BoolPlcTag;
		_di_1: BoolPlcTag;
		_di_2: BoolPlcTag;
		_di_3: BoolPlcTag;
		};

}