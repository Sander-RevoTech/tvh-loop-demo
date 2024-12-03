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
import { ConveyLinx_FullPLC_Single } from '../../Types/ConveyLinx/ConveyLinx_FullPLC_Single';
import { FLOWSORT_TWISTER_UDT } from '../../Types/ConveyLinx/FLOWSORT_TWISTER_UDT';
import { EasySystems_LineairMotor_ConveyLinx_FullPLC_Single } from '../../Types/ConveyLinx/EasySystems_LineairMotor_ConveyLinx_FullPLC_Single';
export class MOT_CLX_DB_DB103 {

	KeyName : string;
	Name: string;
	Number: number;
	Id: number;
	public static Design = 'MOT_CLX_DB_DB103'
	_MOT_102L: ConveyLinx_FullPLC_Single;
	_MOT_102R: ConveyLinx_FullPLC_Single;
	_MOT_103L: ConveyLinx_FullPLC_Single;
	_MOT_103R: ConveyLinx_FullPLC_Single;
	_MOT_104L: ConveyLinx_FullPLC_Single;
	_MOT_104R: ConveyLinx_FullPLC_Single;
	_MOT_105L: ConveyLinx_FullPLC_Single;
	_MOT_105R: ConveyLinx_FullPLC_Single;
	_MOT_106L: ConveyLinx_FullPLC_Single;
	_MOT_106R: ConveyLinx_FullPLC_Single;
	_MOT_107L: FLOWSORT_TWISTER_UDT;
	_MOT_107R: ConveyLinx_FullPLC_Single;
	_MOT_108L: ConveyLinx_FullPLC_Single;
	_MOT_108R: ConveyLinx_FullPLC_Single;
	_MOT_109L: ConveyLinx_FullPLC_Single;
	_MOT_109R: ConveyLinx_FullPLC_Single;
	_MOT_110L: ConveyLinx_FullPLC_Single;
	_MOT_110R: ConveyLinx_FullPLC_Single;
	_MOT_111L: ConveyLinx_FullPLC_Single;
	_MOT_111R: ConveyLinx_FullPLC_Single;
	_MOT_112L: ConveyLinx_FullPLC_Single;
	_MOT_112R: ConveyLinx_FullPLC_Single;
	_MOT_113L: ConveyLinx_FullPLC_Single;
	_MOT_113R: ConveyLinx_FullPLC_Single;
	_MOT_114L: ConveyLinx_FullPLC_Single;
	_MOT_114R: ConveyLinx_FullPLC_Single;
	_MOT_115L: ConveyLinx_FullPLC_Single;
	_MOT_115R: ConveyLinx_FullPLC_Single;
	_MOT_201R_Belts: ConveyLinx_FullPLC_Single;
	_MOT_201L_Lift: EasySystems_LineairMotor_ConveyLinx_FullPLC_Single;
	_MOT_202L: ConveyLinx_FullPLC_Single;
	_MOT_202R: ConveyLinx_FullPLC_Single;
	_MOT_203L_Lift: EasySystems_LineairMotor_ConveyLinx_FullPLC_Single;
	_MOT_203R_Belts: ConveyLinx_FullPLC_Single;
	_MOT_301L: ConveyLinx_FullPLC_Single;
	_MOT_301R: ConveyLinx_FullPLC_Single;
	_MOT_302L: ConveyLinx_FullPLC_Single;
	_MOT_302R: ConveyLinx_FullPLC_Single;
	_MOT_303L: ConveyLinx_FullPLC_Single;
	_MOT_303R: ConveyLinx_FullPLC_Single;
	_MOT_304L: ConveyLinx_FullPLC_Single;
	_MOT_304R: ConveyLinx_FullPLC_Single;
	_MOT_305L: ConveyLinx_FullPLC_Single;
	_MOT_305R: ConveyLinx_FullPLC_Single;

	Constructor(){
	this.KeyName = "MOT_CLX_DB_DB103"	}
}