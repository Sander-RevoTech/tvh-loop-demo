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
import { SmartBool } from '../Tools/SmartBool';
export class TOFF_Encoder_FB extends PlcTagBase {
	public static Design = 'TOFF_Encoder_FB'
	_I_DeltaDistance_mm: RealPlcTag;
	_I_SetPoint: RealPlcTag;
	_I_Start: BoolPlcTag;
	_I_Reset: BoolPlcTag;
	_I_ResetHandshake: BoolPlcTag;
	_Q: BoolPlcTag;
	_StartCount: BoolPlcTag;
	_signal: SmartBool;
	_DistanceMem: RealPlcTag;

}