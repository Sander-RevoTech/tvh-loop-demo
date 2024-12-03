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
export class Inputs_DB_DB1 {

	KeyName : string;
	Name: string;
	Number: number;
	Id: number;
	public static Design = 'Inputs_DB_DB1'
	_AlwaysOff: SmartBooldt;
	_AlwaysOn: SmartBooldt;
	_Reset_System: SmartBooldt;
	_EMG_OK: SmartBooldt;
	_Fire_Alarm_Active: SmartBooldt;
	_ToReplace: SmartBooldt;
	_FTC_102_L2: SmartBooldt;
	_FTC_102_L4: SmartBooldt;
	_FTC_102_R2: SmartBooldt;
	_FTC_102_R4: SmartBooldt;
	_FTC_103_L2: SmartBooldt;
	_FTC_103_L4: SmartBooldt;
	_FTC_103_R2: SmartBooldt;
	_FTC_103_R4: SmartBooldt;
	_FTC_104_L2: SmartBooldt;
	_FTC_104_L4: SmartBooldt;
	_FTC_104_R2: SmartBooldt;
	_FTC_104_R4: SmartBooldt;
	_FTC_105_L2: SmartBooldt;
	_FTC_105_L4: SmartBooldt;
	_FTC_105_R2: SmartBooldt;
	_FTC_105_R4: SmartBooldt;
	_FTC_106_L2: SmartBooldt;
	_FTC_106_L4: SmartBooldt;
	_FTC_106_R2: SmartBooldt;
	_FTC_106_R4: SmartBooldt;
	_FTC_107_L2: SmartBooldt;
	_FTC_107_L4: SmartBooldt;
	_FTC_107_R2: SmartBooldt;
	_FTC_107_R4: SmartBooldt;
	_FTC_108_L2: SmartBooldt;
	_FTC_108_L4: SmartBooldt;
	_FTC_108_R2: SmartBooldt;
	_FTC_108_R4: SmartBooldt;
	_FTC_109_L2: SmartBooldt;
	_FTC_109_L4: SmartBooldt;
	_FTC_109_R2: SmartBooldt;
	_FTC_109_R4: SmartBooldt;
	_FTC_110_L2: SmartBooldt;
	_FTC_110_L4: SmartBooldt;
	_FTC_110_R2: SmartBooldt;
	_FTC_110_R4: SmartBooldt;
	_FTC_111_L2: SmartBooldt;
	_FTC_111_L4: SmartBooldt;
	_FTC_111_R2: SmartBooldt;
	_FTC_111_R4: SmartBooldt;
	_FTC_112_L2: SmartBooldt;
	_FTC_112_L4: SmartBooldt;
	_FTC_112_R2: SmartBooldt;
	_FTC_112_R4: SmartBooldt;
	_FTC_113_L2: SmartBooldt;
	_FTC_113_L4: SmartBooldt;
	_FTC_113_R2: SmartBooldt;
	_FTC_113_R4: SmartBooldt;
	_FTC_114_L2: SmartBooldt;
	_FTC_114_L4: SmartBooldt;
	_FTC_114_R2: SmartBooldt;
	_FTC_114_R4: SmartBooldt;
	_FTC_115_L2: SmartBooldt;
	_FTC_115_L4: SmartBooldt;
	_FTC_115_R2: SmartBooldt;
	_FTC_115_R4: SmartBooldt;
	_FTC_201_L4: SmartBooldt;
	_FTC_201_L2: SmartBooldt;
	_FTC_201_R2: SmartBooldt;
	_FTC_201_R4: SmartBooldt;
	_FTC_202_L2: SmartBooldt;
	_FTC_202_L4: SmartBooldt;
	_FTC_202_R2: SmartBooldt;
	_FTC_202_R4: SmartBooldt;
	_FTC_203_L2: SmartBooldt;
	_FTC_203_L4: SmartBooldt;
	_FTC_203_R2: SmartBooldt;
	_FTC_203_R4: SmartBooldt;
	_FTC_301_L2: SmartBooldt;
	_FTC_301_L4: SmartBooldt;
	_FTC_301_R2: SmartBooldt;
	_FTC_301_R4: SmartBooldt;
	_FTC_302_L2: SmartBooldt;
	_FTC_302_L4: SmartBooldt;
	_FTC_302_R2: SmartBooldt;
	_FTC_302_R4: SmartBooldt;
	_FTC_303_L2: SmartBooldt;
	_FTC_303_L4: SmartBooldt;
	_FTC_303_R2: SmartBooldt;
	_FTC_303_R4: SmartBooldt;
	_FTC_304_L2: SmartBooldt;
	_FTC_304_L4: SmartBooldt;
	_FTC_304_R2: SmartBooldt;
	_FTC_304_R4: SmartBooldt;
	_FTC_305_L2: SmartBooldt;
	_FTC_305_L4: SmartBooldt;
	_FTC_305_R2: SmartBooldt;
	_FTC_305_R4: SmartBooldt;
	_FTC_DRV_101_1_I1: SmartBooldt;
	_FTC_DRV_101_1_I2: SmartBooldt;
	_FTC_DRV_101_1_I3: SmartBooldt;
	_FTC_DRV_101_1_I4: SmartBooldt;
	_FTC_SKU_101_I1: SmartBooldt;
	_FTC_SKU_101_I2: SmartBooldt;

	Constructor(){
	this.KeyName = "Inputs_DB_DB1"	}
}