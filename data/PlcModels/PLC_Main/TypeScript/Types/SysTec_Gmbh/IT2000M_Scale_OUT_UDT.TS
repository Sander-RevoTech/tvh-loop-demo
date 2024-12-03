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
export class IT2000M_Scale_OUT_UDT extends PlcTagBase {
	public static Design = 'IT2000M_Scale_OUT_UDT'
	_Commands: {
		_AbortFilling: BoolPlcTag;
		_AckOutOfTolerance: BoolPlcTag;
		_StopBeforeToleranceCheck: BoolPlcTag;
		_ShowText: BoolPlcTag;
		_SetDigitalOutputs: BoolPlcTag;
		_WeightStorage: BoolPlcTag;
		_spare_0: BoolPlcTag;
		_spare_1: BoolPlcTag;
		_SetZero: BoolPlcTag;
		_AutoTaring: BoolPlcTag;
		_SetToGross: BoolPlcTag;
		_ManualTaring: BoolPlcTag;
		_FillingWithoutTaring: BoolPlcTag;
		_StartFilling: BoolPlcTag;
		_StartDischarging: BoolPlcTag;
		_InterruptFilling: BoolPlcTag;
		};
	_reserve: WordlcTag;
	_TareValue: Int16PlcTag;
	_TargetWeight: Int16PlcTag;
	_PreactFast: Int16PlcTag;
	_PreactSlow: Int16PlcTag;
	_TolerancePos: Int16PlcTag;
	_ToleranceNeg: Int16PlcTag;
	_SettlingTimeMs: Int16PlcTag;
	_JogPulseMs: Int16PlcTag;
	_WeightDiffForFlowRateCheck: Int16PlcTag;
	_TImeINtervalForFlowRateCheck: Int16PlcTag;
	_ZeroRange: Int16PlcTag;
	_ExtenedDischargingTimeMs: Int16PlcTag;

}