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
export class TrafficController_INTERSECT_RECEIVE_PRIO_FB extends PlcTagBase {
	public static Design = 'TrafficController_INTERSECT_RECEIVE_PRIO_FB'
	_I_SendingConveyor_1: Conveyor_UDT;
	_I_SendingConveyor_2: Conveyor_UDT;
	_I_IntersectionConveyor: Conveyor_UDT;
	_I_Option_1_Settings: Intersection;
	_I_Option_2_Settings: Intersection;
	_O_AccumulateConv_1: BoolPlcTag;
	_O_AccumulateConv_2: BoolPlcTag;
	_IO_IntersectionSettings: Intersection;
	_option: Int16PlcTag;
	_OptionsSaved: BoolPlcTag;

}