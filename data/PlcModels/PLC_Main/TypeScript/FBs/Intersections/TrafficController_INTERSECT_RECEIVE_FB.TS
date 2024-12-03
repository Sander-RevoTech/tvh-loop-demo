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
import { TON_TIME } from '../TON_TIME';
import { SmartBool } from '../Tools/SmartBool';
import { ScanTimer_FB } from '../Tools/ScanTimer_FB';
export class TrafficController_INTERSECT_RECEIVE_FB extends PlcTagBase {
	public static Design = 'TrafficController_INTERSECT_RECEIVE_FB'
	_I_IntersectionConveyor: Conveyor_UDT;
	_I_Option_1_Settings: Intersection;
	_I_Option_2_Settings: Intersection;
	_IO_IntersectionSettings: Intersection;
	_IO_SendingConveyor_1: Conveyor_UDT;
	_IO_SendingConveyor_2: Conveyor_UDT;
	_unlockDelay: TON_TIME;
	_empty: SmartBool;
	_LOCK: BoolPlcTag;
	_option: Int16PlcTag;
	_OptionsSaved: BoolPlcTag;
	_conv1_wait: DIntPlcTag;
	_conv2_wait: DIntPlcTag;
	_cycle: ScanTimer_FB;
	_T_Condition: BoolPlcTag;

}