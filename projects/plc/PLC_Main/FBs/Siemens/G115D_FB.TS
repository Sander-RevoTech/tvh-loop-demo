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
import { G115D_INPUT_UDT } from '../../Types/G115D/G115D_INPUT_UDT';
import { G115D_OUTPUT_UDT } from '../../Types/G115D/G115D_OUTPUT_UDT';
import { G115D_DRIVE_UDT } from '../../Types/G115D/G115D_DRIVE_UDT';
import { CycleRun } from '../Tools/CycleRun';
import { AlarmInfo_UDT } from '../../Types/Alarms/AlarmInfo_UDT';
import { TOF_TIME } from '../TOF_TIME';
import { TON_TIME } from '../TON_TIME';
import { ApplicationState_UDT } from '../../Types/appstate/ApplicationState_UDT';
import { ZoneInfo } from '../../Types/appstate/ZoneInfo';
export class G115D_FB extends PlcTagBase {
	public static Design = 'G115D_FB'
	_I_DriveInData: G115D_INPUT_UDT;
	_I_ExtReset: BoolPlcTag;
	_IO_CONTROL: G115D_OUTPUT_UDT;
	_IO_DRIVE: G115D_DRIVE_UDT;
	_cycle: CycleRun;
	_alarm: AlarmInfo_UDT;
	_reset: TOF_TIME;
	_turnDriveOff: TOF_TIME;
	_disconnected: TON_TIME;
	_notOn: TON_TIME;
	_T_Appstate: ApplicationState_UDT;
	_T_Zone: ZoneInfo;
	_T_On: BoolPlcTag;
	_T_Direction: BoolPlcTag;
	_T_Speed: RealPlcTag;
	_T_Reset: BoolPlcTag;
	_POWER_SUPPLY_OFF: Int16PlcTag;

}