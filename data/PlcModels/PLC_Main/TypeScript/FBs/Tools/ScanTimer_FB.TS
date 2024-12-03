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
export class ScanTimer_FB extends PlcTagBase {
	public static Design = 'ScanTimer_FB'
	_O_ScanTime: DIntPlcTag;
	_PrevDate: DIntPlcTag;
	_T_Date: DtlPlcTag;
	_T_Res: Int16PlcTag;
	_T_CurrentDate: DIntPlcTag;
	_T_diff: DIntPlcTag;

}