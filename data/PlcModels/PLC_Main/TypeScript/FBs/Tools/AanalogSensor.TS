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
export class AanalogSensor extends PlcTagBase {
	public static Design = 'AanalogSensor'
	_RawData: Int16PlcTag;
	_I_MinRawValue: Int16PlcTag;
	_I_MaxRawValue: Int16PlcTag;
	_I_MaxMeasureValue: RealPlcTag;
	_I_MinMeasureValue: RealPlcTag;
	_O_ScaledData: RealPlcTag;
	_T_NormalizedValue: RealPlcTag;

}