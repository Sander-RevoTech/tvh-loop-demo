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
import { COGNEX_DATAMAN_IN_UDT } from '../../Types/Cognex/COGNEX_DATAMAN_IN_UDT';
import { COGNEX_DATAMAN_OUT_UDT } from '../../Types/Cognex/COGNEX_DATAMAN_OUT_UDT';
import { COGNEX_DATAMAN_LOGIC_UDT } from '../../Types/Cognex/COGNEX_DATAMAN_LOGIC_UDT';
import { SmartBool } from '../Tools/SmartBool';
import { TON_TIME } from '../TON_TIME';
import { CycleRun } from '../Tools/CycleRun';
import { AlarmInfo_UDT } from '../../Types/Alarms/AlarmInfo_UDT';
import { ApplicationState_UDT } from '../../Types/appstate/ApplicationState_UDT';
import { ZoneInfo } from '../../Types/appstate/ZoneInfo';
export class EC_Cognex_Dataman_TurckModule_FB extends PlcTagBase {
	public static Design = 'EC_Cognex_Dataman_TurckModule_FB'
	_I_ScannerData: COGNEX_DATAMAN_IN_UDT;
	_O_ScannerData: COGNEX_DATAMAN_OUT_UDT;
	_IO_Scanner: COGNEX_DATAMAN_LOGIC_UDT;
	_PrevScanId: BytePlcTag;
	_ScanCommand: SmartBool;
	_triggerAuto: SmartBool;
	_triggerManual: SmartBool;
	_NewResultFlag: SmartBool;
	_MissedTrigger: SmartBool;
	_TimeOutDetector: TON_TIME;
	_TimeOutTime: TimeMsPlcTag;
	_StartTimeOut: BoolPlcTag;
	_LockReceiveResult: BoolPlcTag;
	_cycleRun: CycleRun;
	_alarmInfo: AlarmInfo_UDT;
	_T_AppState: ApplicationState_UDT;
	_T_Zone: ZoneInfo;
	_T_NewResult: BoolPlcTag;

}