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
import { Scale_CMD_UDT } from './Scale_CMD_UDT';
import { HmiAlarm } from '../Alarms/HmiAlarm';
export class Scale_UDT extends PlcTagBase {
	public static Design = 'Scale_UDT'
	_Cmd: {
		_Reset: BoolPlcTag;
		_ResetDiagnostics: BoolPlcTag;
		_Manual: Scale_CMD_UDT;
		_Auto: Scale_CMD_UDT;
		};
	_settings: {
		_offset: RealPlcTag;
		_stabWeight: RealPlcTag;
		_stabilizationTime: TimeMsPlcTag;
		};
	_status: {
		_ManualModeActive: BoolPlcTag;
		_ReadyForNewCommand: BoolPlcTag;
		_ExecutingCommand: BoolPlcTag;
		_GrossWeight: RealPlcTag;
		_NetWeight: RealPlcTag;
		};
	_diagnostics: {
		_stableMeasurements: DIntPlcTag;
		_unstableMeasurements: DIntPlcTag;
		_totalMeasurements: DIntPlcTag;
		};
	_ReadResult: {
		_NewResult: BoolPlcTag;
		_NewResult_Flag: BoolPlcTag;
		_Stable: BoolPlcTag;
		_netWeightGrams: DIntPlcTag;
		_netWeightGrams_Flag: DIntPlcTag;
		};
	_alarms: {
		_Error: HmiAlarm;
		_notConnected: HmiAlarm;
		_Status: WordlcTag;
		};
	_Name: StringPlcTag;
	_zone: Int16PlcTag;

}