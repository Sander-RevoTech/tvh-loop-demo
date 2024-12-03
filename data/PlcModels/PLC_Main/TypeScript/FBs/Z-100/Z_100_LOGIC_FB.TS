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
import { ZPA_Controller } from '../Conveyors/ZPA_Controller';
import { Intersection_Controller_FB } from '../Intersections/Intersection_Controller_FB';
import { TrafficController_INTERSECT_SENDING_FB } from '../Intersections/TrafficController_INTERSECT_SENDING_FB';
import { TrafficController_INTERSECT_RECEIVE_FB } from '../Intersections/TrafficController_INTERSECT_RECEIVE_FB';
import { Conveyor_UDT } from '../../Types/Conveyors/Conveyor_UDT';
export class Z_100_LOGIC_FB extends PlcTagBase {
	public static Design = 'Z_100_LOGIC_FB'
	_CONV_101: ZPA_Controller;
	_CONV_102L: ZPA_Controller;
	_CONV_102R: ZPA_Controller;
	_CONV_103L: ZPA_Controller;
	_CONV_103R: ZPA_Controller;
	_CONV_104L: ZPA_Controller;
	_CONV_104R: ZPA_Controller;
	_CONV_105L: ZPA_Controller;
	_CONV_105R: ZPA_Controller;
	_CONV_106R: ZPA_Controller;
	_CONV_107R: ZPA_Controller;
	_CONV_108L: ZPA_Controller;
	_CONV_108R: ZPA_Controller;
	_CONV_109L: ZPA_Controller;
	_CONV_109R: ZPA_Controller;
	_CONV_110L: ZPA_Controller;
	_CONV_110R: ZPA_Controller;
	_CONV_111L: ZPA_Controller;
	_CONV_111R: Intersection_Controller_FB;
	_CONV_112R: ZPA_Controller;
	_CONV_113L: ZPA_Controller;
	_CONV_113R: ZPA_Controller;
	_CONV_114L: ZPA_Controller;
	_CONV_114R: ZPA_Controller;
	_CONV_115L: ZPA_Controller;
	_CONV_115R: ZPA_Controller;
	_CONV_202L: ZPA_Controller;
	_CONV_202R: ZPA_Controller;
	_CONV_203L: ZPA_Controller;
	_CONV_203R: ZPA_Controller;
	_CONV_301R: ZPA_Controller;
	_CONV_302L: ZPA_Controller;
	_CONV_302R: ZPA_Controller;
	_CONV_303L: ZPA_Controller;
	_CONV_303R: ZPA_Controller;
	_CONV_304L: Intersection_Controller_FB;
	_CONV_304R: ZPA_Controller;
	_CONV_305R: ZPA_Controller;
	_CONV_107_T_splitter: TrafficController_INTERSECT_SENDING_FB;
	_CONV_112L_T_receive: TrafficController_INTERSECT_RECEIVE_FB;
	_T_upstream: Conveyor_UDT;
	_T_Condition: BoolPlcTag;

}