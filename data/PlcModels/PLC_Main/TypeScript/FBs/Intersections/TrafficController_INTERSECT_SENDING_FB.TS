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
export class TrafficController_INTERSECT_SENDING_FB extends PlcTagBase {
	public static Design = 'TrafficController_INTERSECT_SENDING_FB'
	_I_Option: Int16PlcTag;
	_I_IntersectionConveyor: Conveyor_UDT;
	_I_Option_1_Settings: Intersection;
	_I_Option_2_Settings: Intersection;
	_I_Option_3_Settings: Intersection;
	_I_Option_4_Settings: Intersection;
	_I_Option_5_Settings: Intersection;
	_I_Option_6_Settings: Intersection;
	_IO_SendingConveyor: Conveyor_UDT;
	_IO_IntersectionSettings: Intersection;
	_option: Int16PlcTag;
	_OptionsSaved: BoolPlcTag;

}