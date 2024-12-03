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
} from '../../Types/BaseTypes';
import { COGNEX_DATAMAN_IN_RESULT_UDT } from '../../Types/Cognex/COGNEX_DATAMAN_IN_RESULT_UDT';
import { COGNEX_DATAMAN_IN_RESULT_STATUS_UDT } from '../../Types/Cognex/COGNEX_DATAMAN_IN_RESULT_STATUS_UDT';
import { COGNEX_DATAMAN_IN_STATUS_UDT } from '../../Types/Cognex/COGNEX_DATAMAN_IN_STATUS_UDT';
import { COGNEX_DATAMAN_OUT_CONTROL_UDT } from '../../Types/Cognex/COGNEX_DATAMAN_OUT_CONTROL_UDT';
import { COGNEX_DATAMAN_OUT_TRIGGER_UDT } from '../../Types/Cognex/COGNEX_DATAMAN_OUT_TRIGGER_UDT';
import { COGNEX_DATAMAN_LOGIC_UDT } from '../../Types/Cognex/COGNEX_DATAMAN_LOGIC_UDT';
import { SmartBool } from '../Tools/SmartBool';
import { TON_TIME } from '../TON_TIME';
import { CycleRun } from '../Tools/CycleRun';
import { AlarmInfo_UDT } from '../../Types/Alarms/AlarmInfo_UDT';
import { ApplicationState_UDT } from '../../Types/appstate/ApplicationState_UDT';
import { ZoneInfo } from '../../Types/appstate/ZoneInfo';
export class EC_Cognex_Dataman_Single_FB extends PlcTagBase {
	public static Design = 'EC_Cognex_Dataman_Single_FB'
	_I_HwId: HwAnyPlcTag;
	_I_Result: COGNEX_DATAMAN_IN_RESULT_UDT;
	_I_ResultStatus: COGNEX_DATAMAN_IN_RESULT_STATUS_UDT;
	_I_Status: COGNEX_DATAMAN_IN_STATUS_UDT;
	_O_Control: COGNEX_DATAMAN_OUT_CONTROL_UDT;
	_O_Trigger: COGNEX_DATAMAN_OUT_TRIGGER_UDT;
	_IO_Scanner: COGNEX_DATAMAN_LOGIC_UDT;
	_PrevScanId: Int16PlcTag;
	_ScanCommand: SmartBool;
	_triggerAuto: SmartBool;
	_triggerManual: SmartBool;
	_NewResultFlag: SmartBool;
	_MissedTrigger: SmartBool;
	_NotConnected: TON_TIME;
	_TimeOutDetector: TON_TIME;
	_TimeOutTime: TimeMsPlcTag;
	_StartTimeOut: BoolPlcTag;
	_LockReceiveResult: BoolPlcTag;
	_cycleRun: CycleRun;
	_alarmInfo: AlarmInfo_UDT;
	_T_AppState: ApplicationState_UDT;
	_T_Zone: ZoneInfo;
	_T_NewResult: BoolPlcTag;
	_T_Error: Int16PlcTag;
	_dummy: BytePlcTag[] // Length 6;

}