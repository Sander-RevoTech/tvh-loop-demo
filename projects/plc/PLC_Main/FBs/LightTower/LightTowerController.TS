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
import { SmartBool } from '../Tools/SmartBool';
import { TOF_TIME } from '../TOF_TIME';
import { LightTowerGravController } from './LightTowerGravController';
export class LightTowerController extends PlcTagBase {
	public static Design = 'LightTowerController'
	_AutoModeOn: SmartBool;
	_StartupBuzzer: TOF_TIME;
	_grav_226: LightTowerGravController;
	_grav_227: LightTowerGravController;
	_grav_236: LightTowerGravController;
	_grav_237: LightTowerGravController;
	_grav_256: LightTowerGravController;
	_grav_257: LightTowerGravController;
	_grav_266: LightTowerGravController;
	_grav_267: LightTowerGravController;
	_grav_276: LightTowerGravController;
	_grav_277: LightTowerGravController;
	_grav_286: LightTowerGravController;
	_grav_287: LightTowerGravController;
	_grav_519: LightTowerGravController;
	_grav_527: LightTowerGravController;
	_grav_528: LightTowerGravController;
	_grav_534: LightTowerGravController;
	_T_Index: Int16PlcTag;
	_T_StartLED: BoolPlcTag;
	_T_ResetLED: BoolPlcTag;

}