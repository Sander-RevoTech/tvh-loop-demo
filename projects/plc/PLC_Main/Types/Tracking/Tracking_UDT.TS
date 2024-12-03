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
export class Tracking_UDT extends PlcTagBase {
	public static Design = 'Tracking_UDT'
	_ID: UInt16PlcTag;
	_Barcode: StringPlcTag;
	_GoodRead: BoolPlcTag;
	_DestinationReceived: BoolPlcTag;
	_TargetConveyor: Int16PlcTag;
	_MESDestination: Int16PlcTag;
	_Position: {
		_EncoderLocation: RealPlcTag;
		_ExitIndex: UInt16PlcTag;
		};

}