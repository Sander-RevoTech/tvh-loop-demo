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
import { ConveyLinxController_FullPLC } from './ConveyLinxController_FullPLC';
import { FlowSort_Twister_Controller_FB } from './FlowSort_Twister_Controller_FB';
import { ES_TransferUnit_UpDown_Controller_Servo_FB } from './ES_TransferUnit_UpDown_Controller_Servo_FB';
export class CLX_FB extends PlcTagBase {
	public static Design = 'CLX_FB'
	_MOT_102L: ConveyLinxController_FullPLC;
	_MOT_102R: ConveyLinxController_FullPLC;
	_MOT_103L: ConveyLinxController_FullPLC;
	_MOT_103R: ConveyLinxController_FullPLC;
	_MOT_104L: ConveyLinxController_FullPLC;
	_MOT_104R: ConveyLinxController_FullPLC;
	_MOT_105L: ConveyLinxController_FullPLC;
	_MOT_105R: ConveyLinxController_FullPLC;
	_MOT_106L: ConveyLinxController_FullPLC;
	_MOT_106R: ConveyLinxController_FullPLC;
	_MOT_107L: FlowSort_Twister_Controller_FB;
	_MOT_107R: ConveyLinxController_FullPLC;
	_MOT_108L: ConveyLinxController_FullPLC;
	_MOT_108R: ConveyLinxController_FullPLC;
	_MOT_109L: ConveyLinxController_FullPLC;
	_MOT_109R: ConveyLinxController_FullPLC;
	_MOT_110L: ConveyLinxController_FullPLC;
	_MOT_110R: ConveyLinxController_FullPLC;
	_MOT_111L: ConveyLinxController_FullPLC;
	_MOT_111R: ConveyLinxController_FullPLC;
	_MOT_112L: ConveyLinxController_FullPLC;
	_MOT_112R: ConveyLinxController_FullPLC;
	_MOT_113L: ConveyLinxController_FullPLC;
	_MOT_113R: ConveyLinxController_FullPLC;
	_MOT_114L: ConveyLinxController_FullPLC;
	_MOT_114R: ConveyLinxController_FullPLC;
	_MOT_115L: ConveyLinxController_FullPLC;
	_MOT_115R: ConveyLinxController_FullPLC;
	_MOT_201L: ES_TransferUnit_UpDown_Controller_Servo_FB;
	_MOT_201R: ConveyLinxController_FullPLC;
	_MOT_202L: ConveyLinxController_FullPLC;
	_MOT_202R: ConveyLinxController_FullPLC;
	_MOT_203L: ES_TransferUnit_UpDown_Controller_Servo_FB;
	_MOT_203R: ConveyLinxController_FullPLC;
	_MOT_301L: ConveyLinxController_FullPLC;
	_MOT_301R: ConveyLinxController_FullPLC;
	_MOT_302L: ConveyLinxController_FullPLC;
	_MOT_302R: ConveyLinxController_FullPLC;
	_MOT_303L: ConveyLinxController_FullPLC;
	_MOT_303R: ConveyLinxController_FullPLC;
	_MOT_304L: ConveyLinxController_FullPLC;
	_MOT_304R: ConveyLinxController_FullPLC;
	_MOT_305L: ConveyLinxController_FullPLC;
	_MOT_305R: ConveyLinxController_FullPLC;

}