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
import { TONR_TIME } from '../TONR_TIME';
export class StepperController extends PlcTagBase {
	public static Design = 'StepperController'
	_I_StepNumber: DIntPlcTag;
	_I_NextStepNumber: DIntPlcTag;
	_I_ErrorStepNumber: DIntPlcTag;
	_I_TimeOutStepNumber: DIntPlcTag;
	_I_Condition: BoolPlcTag;
	_I_ErrorConditon: BoolPlcTag;
	_I_ConditionTIme: TimeMsPlcTag;
	_I_TimeOutTime: TimeMsPlcTag;
	_I_ErrorTime: TimeMsPlcTag;
	_I_IgnoreTimeOut: BoolPlcTag;
	_I_AccumulateConditionTIme: BoolPlcTag;
	_I_PauseTimeOut: BoolPlcTag;
	_O_ConditionTrans: BoolPlcTag;
	_O_ErrorTrans: BoolPlcTag;
	_O_TimeTrans: BoolPlcTag;
	_IO_StepNumber: DIntPlcTag;
	_IO_PrevStepNumber: DIntPlcTag;
	_S_ConditionTime: TON_TIME;
	_S_TimeOutTime: TONR_TIME;
	_S_ErrorConditionTIme: TON_TIME;
	_T_SiemensBug: BoolPlcTag;

}