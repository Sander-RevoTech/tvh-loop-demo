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
import { TON_TIME } from '../TON_TIME';
export class StepperControllerSimple extends PlcTagBase {
	public static Design = 'StepperControllerSimple'
	_I_StepNumber: DIntPlcTag;
	_I_NextStepNumber: DIntPlcTag;
	_I_Condition: BoolPlcTag;
	_I_ConditionTime: TimeMsPlcTag;
	_O_ConditionTrans: BoolPlcTag;
	_IO_StepNumber: DIntPlcTag;
	_IO_PrevStepNumber: DIntPlcTag;
	_conditionTime: TON_TIME;
	_T_Bug: BoolPlcTag;

}