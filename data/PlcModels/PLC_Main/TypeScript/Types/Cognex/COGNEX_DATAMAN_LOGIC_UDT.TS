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
import { HmiAlarm } from '../Alarms/HmiAlarm';
import { Tracking_UDT } from '../Tracking/Tracking_UDT';
export class COGNEX_DATAMAN_LOGIC_UDT extends PlcTagBase {
	public static Design = 'COGNEX_DATAMAN_LOGIC_UDT'
	_Cmd: {
		_Reset: BoolPlcTag;
		_ScanAuto: BoolPlcTag;
		_ScanManual: BoolPlcTag;
		};
	_Status: {
		_ReadyForNewScan: BoolPlcTag;
		_ReqDone: BoolPlcTag;
		_ReqBusy: BoolPlcTag;
		_ManualModeActive: BoolPlcTag;
		};
	_Alarms: {
		_NotConnected: HmiAlarm;
		_TimeOutReading: HmiAlarm;
		_TriggerGuard: HmiAlarm;
		_ErrorFromScanner: HmiAlarm;
		_SerialBufferOverFlow: HmiAlarm;
		_status: WordlcTag;
		};
	_DiagNostic: {
		_GoodReads: UDIntPlcTag;
		_BadReads: UDIntPlcTag;
		_TimeOuts: UDIntPlcTag;
		_MissedTrigger: UDIntPlcTag;
		_OutOfSync: UDIntPlcTag;
		_Scans: UDIntPlcTag;
		_ParsingTime: TimeMsPlcTag;
		};
	_Settings: {
		_OnDelay: TimeMsPlcTag;
		_OffDelay: TimeMsPlcTag;
		_TimeOut: TimeMsPlcTag;
		};
	_ReadingResult: {
		_NewResult_Pulse: BoolPlcTag;
		_GoodRead: BoolPlcTag;
		_BadRead: BoolPlcTag;
		_TimeOut: BoolPlcTag;
		_MissedTrigger: BoolPlcTag;
		_OutOfSync: BoolPlcTag;
		_Barcode: StringPlcTag;
		_GoodRead_Pulse: BoolPlcTag;
		_BadRead_Pulse: BoolPlcTag;
		_TimeOut_Pulse: BoolPlcTag;
		_MissedTrigger_Pulse: BoolPlcTag;
		_OutOfSync_Pulse: BoolPlcTag;
		_Barcode_Pulse: StringPlcTag;
		_Counter: USIntPlcTag;
		_Length: Int16PlcTag;
		_chars: CharPlcTag[] // Length 136;
		};
	_Tracking: Tracking_UDT;
	_Zone: Int16PlcTag;
	_Name: StringPlcTag;

}