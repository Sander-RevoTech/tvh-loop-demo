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
export class I_RANPACK_UDT extends PlcTagBase {
	public static Design = 'I_RANPACK_UDT'
	_status: {
		_readyToReceive: BoolPlcTag;
		_readyToSent: BoolPlcTag;
		_machineError: BoolPlcTag;
		_spare: BoolPlcTag;
		_lidSupplyLowWarning: BoolPlcTag;
		_GlueSupplyLowWarning: BoolPlcTag;
		_LidSupplyLowError: BoolPlcTag;
		_GlueSupplyLowError: BoolPlcTag;
		_spare_1: BoolPlcTag;
		_spare_2: BoolPlcTag;
		_spare_3: BoolPlcTag;
		_spare_4: BoolPlcTag;
		_spare_5: BoolPlcTag;
		_TransferInProgress: BoolPlcTag;
		_DataReceived: BoolPlcTag;
		_KeepAlive: BoolPlcTag;
		};
	_ObjectInfo: {
		_CuttingError: BoolPlcTag;
		_LiddingError: BoolPlcTag;
		_CuttingOk: BoolPlcTag;
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
		_HeightBoxProduct: WordlcTag;
		_HeightBoxFinel: WordlcTag;
		_HeightBoxMinimum: BytePlcTag;
		_MinimumCut: BytePlcTag;
		};

}