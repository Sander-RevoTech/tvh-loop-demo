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
export class G115D_OUTPUT_UDT extends PlcTagBase {
	public static Design = 'G115D_OUTPUT_UDT'
	_status: {
		_CMD_DO24: BoolPlcTag;
		_CMD_DO25: BoolPlcTag;
		_ControlByPlc: BoolPlcTag;
		_SetPointInversed: BoolPlcTag;
		_spare_2: BoolPlcTag;
		_MotPotSetPointRaise: BoolPlcTag;
		_MotPotSetPointLower: BoolPlcTag;
		_ParaMeterSet: BoolPlcTag;
		_on_off: BoolPlcTag;
		_NoCoastDown: BoolPlcTag;
		_NoQuickStop: BoolPlcTag;
		_EnableOperation: BoolPlcTag;
		_EnableRamp: BoolPlcTag;
		_EnableContinueRamp: BoolPlcTag;
		_EnableSetPoint: BoolPlcTag;
		_ackFault: BoolPlcTag;
		};
	_setPointSpeed: WordlcTag;

}