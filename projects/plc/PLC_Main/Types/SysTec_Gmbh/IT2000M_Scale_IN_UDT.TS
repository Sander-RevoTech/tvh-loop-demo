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
export class IT2000M_Scale_IN_UDT extends PlcTagBase {
	public static Design = 'IT2000M_Scale_IN_UDT'
	_Inputs: {
		_spare: BytePlcTag;
		_spare_0: BoolPlcTag;
		_spare_1: BoolPlcTag;
		_spare_2: BoolPlcTag;
		_spare_3: BoolPlcTag;
		_spare_4: BoolPlcTag;
		_spare_5: BoolPlcTag;
		_Input_E0: BoolPlcTag;
		_Input_E1: BoolPlcTag;
		};
	_Outputs: {
		_spare: BytePlcTag;
		_spare_0: BoolPlcTag;
		_spare_1: BoolPlcTag;
		_spare_2: BoolPlcTag;
		_spare_3: BoolPlcTag;
		_spare_4: BoolPlcTag;
		_spare_5: BoolPlcTag;
		_Output_A0: BoolPlcTag;
		_Output_A1: BoolPlcTag;
		};
	_NetWeight: Int16PlcTag;
	_GrossWeight: Int16PlcTag;
	_Status: {
		_Handshake: BoolPlcTag;
		_Status: BoolPlcTag;
		_OutOfTolerance: BoolPlcTag;
		_FlowRateLow: BoolPlcTag;
		_spare_0: BoolPlcTag;
		_spare_1: BoolPlcTag;
		_spare_2: BoolPlcTag;
		_ReadyForStart: BoolPlcTag;
		_GrossUnderZero: BoolPlcTag;
		_OverLoad: BoolPlcTag;
		_ScaleInMotion: BoolPlcTag;
		_Error: BoolPlcTag;
		_TrailingDecimals0: BoolPlcTag;
		_TrailingDecimals1: BoolPlcTag;
		_TrailingDecimals2: BoolPlcTag;
		_WeightFactor10: BoolPlcTag;
		};
	_FillingStepCounter: Int16PlcTag;
	_NetWeight_1: RealPlcTag;
	_GrossWeight_1: RealPlcTag;
	_StepperCounter: Int16PlcTag;

}