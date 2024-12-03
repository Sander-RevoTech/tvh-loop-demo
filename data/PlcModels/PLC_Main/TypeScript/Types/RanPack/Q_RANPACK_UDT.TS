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
export class Q_RANPACK_UDT extends PlcTagBase {
	public static Design = 'Q_RANPACK_UDT'
	_status: {
		_spare_6: BoolPlcTag;
		_spare_7: BoolPlcTag;
		_spare_8: BoolPlcTag;
		_LineRunning: BoolPlcTag;
		_spare_9: BoolPlcTag;
		_spare_10: BoolPlcTag;
		_spare_11: BoolPlcTag;
		_spare_12: BoolPlcTag;
		_StartEvo: BoolPlcTag;
		_StopEvo: BoolPlcTag;
		_RequestToSent: BoolPlcTag;
		_ReadyToReceive: BoolPlcTag;
		_spare: BoolPlcTag;
		_TransferInProgress: BoolPlcTag;
		_DataReceived: BoolPlcTag;
		_KeepAlive: BoolPlcTag;
		};
	_ObjectInfo: {
		_spare_3: BoolPlcTag;
		_spare_4: BoolPlcTag;
		_spare_5: BoolPlcTag;
		_WithoutCutting: BoolPlcTag;
		_withoutLidding: BoolPlcTag;
		_spare: BoolPlcTag;
		_spare_1: BoolPlcTag;
		_spare_2: BoolPlcTag;
		_Barcode_1: CharPlcTag;
		_Barcode_2: CharPlcTag;
		_Barcode_3: CharPlcTag;
		_Barcode_4: CharPlcTag;
		_Barcode_5: CharPlcTag;
		_Barcode_6: CharPlcTag;
		_Barcode_7: CharPlcTag;
		_Barcode_8: CharPlcTag;
		_Barcode_9: CharPlcTag;
		_Barcode_10: CharPlcTag;
		_Barcode_11: CharPlcTag;
		_Barcode_12: CharPlcTag;
		_Barcode_13: CharPlcTag;
		_Barcode_14: CharPlcTag;
		_Barcode_15: CharPlcTag;
		_Barcode_16: CharPlcTag;
		_weight: BytePlcTag;
		_Length: WordlcTag;
		_widht: WordlcTag;
		_HeightBoxBasis: WordlcTag;
		_spare_6: WordlcTag;
		_spare_7: WordlcTag;
		_HeightBoxMinimum: BytePlcTag;
		_MinimumCut: BytePlcTag;
		};

}