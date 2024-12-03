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
import { Conveyor_UDT } from '../../Types/Conveyors/Conveyor_UDT';
import { Intersection } from '../../Types/Conveyors/Intersection';
import { TransferUnitUpDown } from '../../Types/Conveyors/TransferUnitUpDown';
import { ZPA_TransferUnit_Controller } from '../Conveyors/ZPA_TransferUnit_Controller';
import { SmartBool } from '../Tools/SmartBool';
import { ZoneInfo } from '../../Types/appstate/ZoneInfo';
import { ApplicationState_UDT } from '../../Types/appstate/ApplicationState_UDT';
export class Intersection_Controller_FB extends PlcTagBase {
	public static Design = 'Intersection_Controller_FB'
	_I_con_upstream_north: BoolPlcTag;
	_I_con_upstream_east: BoolPlcTag;
	_I_con_upstream_south: BoolPlcTag;
	_I_con_upstream_west: BoolPlcTag;
	_I_Conv_North: Conveyor_UDT;
	_I_Conv_East: Conveyor_UDT;
	_I_Conv_South: Conveyor_UDT;
	_I_Conv_West: Conveyor_UDT;
	_I_Settings: Intersection;
	_I_AutoSent: BoolPlcTag;
	_O_Empty_Flag: BoolPlcTag;
	_IO_Conv_1: Conveyor_UDT;
	_IO_Conv_2: Conveyor_UDT;
	_IO_Transfer: TransferUnitUpDown;
	_Transfer: ZPA_TransferUnit_Controller;
	_settings: Intersection;
	_Empty: SmartBool;
	_T_Zone: ZoneInfo;
	_T_appstate: ApplicationState_UDT;
	_T_DownStream: Conveyor_UDT;
	_T_Upstream: Conveyor_UDT;
	_T_SendingConveyor: Conveyor_UDT;
	_T_ReceiveConveyor: Conveyor_UDT;
	_T_ReceivePosition: Int16PlcTag;
	_T_InvalidSettings: BoolPlcTag;
	_T_Dummy: BoolPlcTag;
	_T_ConnectUpstream: BoolPlcTag;

}