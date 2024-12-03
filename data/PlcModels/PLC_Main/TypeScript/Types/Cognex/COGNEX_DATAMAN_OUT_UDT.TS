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
export class COGNEX_DATAMAN_OUT_UDT extends PlcTagBase {
	public static Design = 'COGNEX_DATAMAN_OUT_UDT'
	_TriggerContr_TriggerEnable: BoolPlcTag;
	_TriggerContr_Trigger: BoolPlcTag;
	_TriggerContr_Spare_2: BoolPlcTag;
	_TriggerContr_Spare_3: BoolPlcTag;
	_TriggerContr_ForceRunMode: BoolPlcTag;
	_TriggerContr_TriggerSetting: BoolPlcTag;
	_TriggerContr_TriggerPin: BoolPlcTag;
	_TriggerContr_TriggerEdge: BoolPlcTag;
	_ResultContr_ResultAck: BoolPlcTag;
	_ResultContr_spare_1: BoolPlcTag;
	_ResultContr_spare_4: BoolPlcTag;
	_ResultContr_spare_6: BoolPlcTag;
	_ResultContr_spare_7: BoolPlcTag;
	_ResultContr_spare_8: BoolPlcTag;
	_ResultContr_spare_9: BoolPlcTag;
	_ResultContr_spare_10: BoolPlcTag;
	_SoftEventContr_TrainCode: BoolPlcTag;
	_SoftEventContr_TrainMatchString: BoolPlcTag;
	_SoftEventContr_Focus: BoolPlcTag;
	_SoftEventContr_TrainBirghtness: BoolPlcTag;
	_SoftEventContr_Untrain: BoolPlcTag;
	_SoftEventContr_SetInputString: BoolPlcTag;
	_SoftEventContr_ExecuteDMCC: BoolPlcTag;
	_SoftEventContr_SetMatchString: BoolPlcTag;
	_UserDataOption: Int16PlcTag;
	_spare_5: BytePlcTag;
	_DataBlock_DataBlockSize_0: BoolPlcTag;
	_DataBlock_DataBlockSize_1: BoolPlcTag;
	_DataBlock_DataBlockSize_2: BoolPlcTag;
	_DataBlock_DataBlockSize_3: BoolPlcTag;
	_DataBlock_spare_4: BoolPlcTag;
	_DataBlock_spare_5: BoolPlcTag;
	_DataBlock_spare_6: BoolPlcTag;
	_DataBlock_Reader2Disabled: BoolPlcTag;
	_UserData: BytePlcTag[] // Length 16;

}