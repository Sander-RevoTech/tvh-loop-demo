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
import { VirtualEncoder_UDT } from '../../Types/Encoder/VirtualEncoder_UDT';
export class CM_Encoder_FB extends PlcTagBase {
	public static Design = 'CM_Encoder_FB'
	_dEncr: DIntPlcTag;
	_dPPR: DIntPlcTag;
	_rDiameterWheel: RealPlcTag;
	_rGearRatio: RealPlcTag;
	_x32or16bitEncr: BoolPlcTag;
	_IO_Encoder: VirtualEncoder_UDT;
	_d16bitEncr_Range: DIntPlcTag;
	_d32bitEncr_Range: DIntPlcTag;
	_dCheckRotationClockwise: DIntPlcTag;
	_rPPmm: RealPlcTag;
	_rCircumference: RealPlcTag;
	_prevValue: DIntPlcTag;
	_currentValue: DIntPlcTag;
	_deltaPulses: DIntPlcTag;

}