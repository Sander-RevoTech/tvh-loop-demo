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
export class SAI_MB_DeviceStatus extends PlcTagBase {
	public static Design = 'SAI_MB_DeviceStatus'
	_Alternate_weight_unit: BoolPlcTag;
	_Run_flat: BoolPlcTag;
	_Device_specific_bit_2: BoolPlcTag;
	_Device_specific_bit_3: BoolPlcTag;
	_Device_specific_bit_4: BoolPlcTag;
	_Device_specific_bit_5: BoolPlcTag;
	_Device_specific_bit_6: BoolPlcTag;
	_Device_specific_bit_7: BoolPlcTag;
	_Sequence_bit_0: BoolPlcTag;
	_Sequence_bit_1: BoolPlcTag;
	_Heart_Beat: BoolPlcTag;
	_Data_OK: BoolPlcTag;
	_Alarm_Condition: BoolPlcTag;
	_Center_of_Zero: BoolPlcTag;
	_Motion: BoolPlcTag;
	_Net_Mode: BoolPlcTag;

}