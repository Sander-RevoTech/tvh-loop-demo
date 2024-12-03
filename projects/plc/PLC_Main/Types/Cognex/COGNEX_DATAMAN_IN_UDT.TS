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
export class COGNEX_DATAMAN_IN_UDT extends PlcTagBase {
	public static Design = 'COGNEX_DATAMAN_IN_UDT'
	_Status_TriggerReady: BoolPlcTag;
	_Status_TriggerAck: BoolPlcTag;
	_Status_Acquiring: BoolPlcTag;
	_Status_MissedTrigger: BoolPlcTag;
	_Status_CurrentMode: BoolPlcTag;
	_Status_SerialError: BoolPlcTag;
	_Status_TrigerPin4State: BoolPlcTag;
	_Status_TriggerPin2State: BoolPlcTag;
	_ResultStatus_ResultAvailable: BoolPlcTag;
	_ResultStatus_ResultAckMirror: BoolPlcTag;
	_ResultStatus_ResultDataBufferOverFlow: BoolPlcTag;
	_ResultStatus_spare_1: BoolPlcTag;
	_ResultStatus_spare_2: BoolPlcTag;
	_ResultStatus_spare_3: BoolPlcTag;
	_ResultStatus_spare_4: BoolPlcTag;
	_ResultStatus_GeneralFault: BoolPlcTag;
	_SoftEventStatus_errorCode1: BoolPlcTag;
	_SoftEventStatus_errorCode2: BoolPlcTag;
	_SoftEventStatus_errorCode3: BoolPlcTag;
	_SoftEventStatus_errorCode4: BoolPlcTag;
	_SoftEventStatus_errorCode5: BoolPlcTag;
	_SoftEventStatus_errorCode6: BoolPlcTag;
	_SoftEventStatus_errorCode7: BoolPlcTag;
	_SoftEventStatus_CommendTimedOutOrCompleted: BoolPlcTag;
	_ResultCode_TriggerResult: BoolPlcTag;
	_ResultCode_SoftCommandIsRunning: BoolPlcTag;
	_ResultCode_SoftCommandComplete: BoolPlcTag;
	_ResultCode_spare_3: BoolPlcTag;
	_ResultCode_spare_4: BoolPlcTag;
	_ResultCode_spare_5: BoolPlcTag;
	_ResultCode_spare_6: BoolPlcTag;
	_ResultCode_spare_7: BoolPlcTag;
	_TriggerId: BytePlcTag;
	_ResultId: BytePlcTag;
	_ResultLength: BytePlcTag;
	_DataBlock_DataBlockSize_0: BoolPlcTag;
	_DataBlock_DataBlockSize_1: BoolPlcTag;
	_DataBlock_DataBlockSize_2: BoolPlcTag;
	_DataBlock_DataBlockSize_3: BoolPlcTag;
	_DataBlock_spare_4: BoolPlcTag;
	_DataBlock_spare_5: BoolPlcTag;
	_DataBlock_spare_6: BoolPlcTag;
	_DataBlock_Reader2Disabled: BoolPlcTag;
	_Barcode: CharPlcTag[] // Length 136;

}