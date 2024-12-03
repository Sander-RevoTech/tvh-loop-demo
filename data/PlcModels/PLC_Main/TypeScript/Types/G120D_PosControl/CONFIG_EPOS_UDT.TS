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
export class CONFIG_EPOS_UDT extends PlcTagBase {
	public static Design = 'CONFIG_EPOS_UDT'
	_Off2_NoPulseDisable: BoolPlcTag;
	_Off3_NoRampStop: BoolPlcTag;
	_SoftwareLimitActive: BoolPlcTag;
	_Stopcams: BoolPlcTag;
	_MeasuringInputEdgeEvaluation: BoolPlcTag;
	_MeasuringInputSelection: BoolPlcTag;
	_SignalSourceReferenceMask: BoolPlcTag;
	_ExternalBlockChange: BoolPlcTag;
	_ContinousSetPointAcceptance: BoolPlcTag;
	_DDS0: BoolPlcTag;
	_DDS1: BoolPlcTag;
	_DDS2: BoolPlcTag;
	_DDS3: BoolPlcTag;
	_DDS4: BoolPlcTag;
	_ParkingAxisSelection: BoolPlcTag;
	_spare: BoolPlcTag;
	_spare_1: WordlcTag;

}