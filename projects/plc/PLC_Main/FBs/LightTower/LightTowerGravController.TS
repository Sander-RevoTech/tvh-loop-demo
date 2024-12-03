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
import { SmartBooldt } from '../../Types/Tools/SmartBooldt';
import { Conveyor_UDT } from '../../Types/Conveyors/Conveyor_UDT';
import { TON_TIME } from '../TON_TIME';
import { ZoneInfo } from '../../Types/appstate/ZoneInfo';
import { ApplicationState_UDT } from '../../Types/appstate/ApplicationState_UDT';
export class LightTowerGravController extends PlcTagBase {
	public static Design = 'LightTowerGravController'
	_I_full: SmartBooldt;
	_I_half_full: SmartBooldt;
	_O_GREEN: BoolPlcTag;
	_O_ORGANGE: BoolPlcTag;
	_O_RED: BoolPlcTag;
	_IO_GRAV: Conveyor_UDT;
	_IO_SUPPLY: Conveyor_UDT;
	_halfFull: TON_TIME;
	_full: TON_TIME;
	_empty: TON_TIME;
	_T_Zone: ZoneInfo;
	_T_appstate: ApplicationState_UDT;

}