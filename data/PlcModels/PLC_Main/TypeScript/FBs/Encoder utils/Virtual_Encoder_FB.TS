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
import { ScanTimer_FB } from '../Tools/ScanTimer_FB';
export class Virtual_Encoder_FB extends PlcTagBase {
	public static Design = 'Virtual_Encoder_FB'
	_I_RelativeReferenceSpeed_Perc: RealPlcTag;
	_I_AbsoluteSpeedOnReferecne_m_min: RealPlcTag;
	_I_CurrentRelativeSpeed_Perc: RealPlcTag;
	_O_Delta_mm: RealPlcTag;
	_IO_VirtualEncoder: VirtualEncoder_UDT;
	_cycleTime: ScanTimer_FB;
	_T_Gain: RealPlcTag;
	_T_CurrentSpeed_mm_ms: RealPlcTag;
	_T_Distance_mm: RealPlcTag;

}