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
export class I_ScaleDataUdt extends PlcTagBase {
	public static Design = 'I_ScaleDataUdt'
	_grossWeight: DIntPlcTag;
	_netWeight: DIntPlcTag;
	_inputStatus: WordlcTag;
	_commandStatus: WordlcTag;
	_outputStatus: WordlcTag;

}