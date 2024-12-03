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
import { TON_Encoder_FB } from './TON_Encoder_FB';
export class StepperController_Encoder extends PlcTagBase {
	public static Design = 'StepperController_Encoder'
	_I_StepNumber: DIntPlcTag;
	_I_NextStepNumber: DIntPlcTag;
	_I_ErrorStepNumber: DIntPlcTag;
	_I_TimeOutStepNumber: DIntPlcTag;
	_I_Condition: BoolPlcTag;
	_I_ErrorConditon: BoolPlcTag;
	_I_ConditionDistance: RealPlcTag;
	_I_TimeOutDistance: RealPlcTag;
	_I_ErrorDistance: RealPlcTag;
	_I_DeltaDistance: RealPlcTag;
	_I_IgnoreTimeOut: BoolPlcTag;
	_I_AccumulateConditionTIme: BoolPlcTag;
	_I_PauseTimeOut: BoolPlcTag;
	_O_ConditionTrans: BoolPlcTag;
	_O_ErrorTrans: BoolPlcTag;
	_O_TimeTrans: BoolPlcTag;
	_IO_StepNumber: DIntPlcTag;
	_IO_PrevStepNumber: DIntPlcTag;
	_ConditionTime: TON_Encoder_FB;
	_TimeOutTime: TON_Encoder_FB;
	_ErrorConditionTIme: TON_Encoder_FB;
	_T_SiemensBug: BoolPlcTag;

}