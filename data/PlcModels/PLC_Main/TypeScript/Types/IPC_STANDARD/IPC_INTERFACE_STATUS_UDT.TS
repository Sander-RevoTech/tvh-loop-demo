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
import { IPC_RES_STATUS_UDT } from './IPC_RES_STATUS_UDT';
export class IPC_INTERFACE_STATUS_UDT extends PlcTagBase {
	public static Design = 'IPC_INTERFACE_STATUS_UDT'
	_Diagnostics: {
		_TimeOuts: DIntPlcTag;
		_Successes: DIntPlcTag;
		_OutOfSync: DIntPlcTag;
		_CommunicationTime: TimeMsPlcTag;
		_LastCommunicationTime: TimeMsPlcTag;
		};
	_ResultStatus: {
		_static: IPC_RES_STATUS_UDT;
		_pulse: IPC_RES_STATUS_UDT;
		};
	_Status: {
		_online: BoolPlcTag;
		_ReadyForSendingData: BoolPlcTag;
		_ReceivingData: BoolPlcTag;
		};
	_Settings: {
		_TimeOut: TimeMsPlcTag;
		_RetrySending: BoolPlcTag;
		_RetryThreshold: Int16PlcTag;
		_RetryCounter: Int16PlcTag;
		_ResendMessage: TimeMsPlcTag;
		};
	_Zone: UInt16PlcTag;
	_name: StringPlcTag;

}