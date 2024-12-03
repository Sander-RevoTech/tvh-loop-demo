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
import { Cylinder_UDT } from '../../Types/Hardware/Cylinder_UDT';
import { TON_TIME } from '../TON_TIME';
import { AlarmInfo_UDT } from '../../Types/Alarms/AlarmInfo_UDT';
import { ZoneInfo } from '../../Types/appstate/ZoneInfo';
import { ApplicationState_UDT } from '../../Types/appstate/ApplicationState_UDT';
export class CylinderController extends PlcTagBase {
	public static Design = 'CylinderController'
	_I_AlwaysAuto: BoolPlcTag;
	_I_DbName: StringPlcTag;
	_I_Interlock: BoolPlcTag;
	_I_CylinderInFeedBack: BoolPlcTag;
	_I_CylinderOutFeedBack: BoolPlcTag;
	_O_CmdIn: BoolPlcTag;
	_O_CmdOut: BoolPlcTag;
	_IO_Cyl: Cylinder_UDT;
	_feedBackTimeIn: TON_TIME;
	_feedBackTimeOut: TON_TIME;
	_TimeIn: TON_TIME;
	_TimeOut: TON_TIME;
	_Info: AlarmInfo_UDT;
	_ZoneInfo: ZoneInfo;
	_T_AppState: ApplicationState_UDT;

}