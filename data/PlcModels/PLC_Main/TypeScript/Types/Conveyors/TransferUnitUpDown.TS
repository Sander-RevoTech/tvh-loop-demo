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
export class TransferUnitUpDown extends PlcTagBase {
	public static Design = 'TransferUnitUpDown'
	_Status: {
		_Position: Int16PlcTag;
		};
	_Cmd: {
		_InAuto: BoolPlcTag;
		};
	_Zone: Int16PlcTag;

}