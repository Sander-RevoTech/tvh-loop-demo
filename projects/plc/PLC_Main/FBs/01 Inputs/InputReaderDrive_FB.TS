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
export class InputReaderDrive_FB extends PlcTagBase {
	public static Design = 'InputReaderDrive_FB'
	_FTC_DRV_101_1_I1: SmartBool;
	_FTC_DRV_101_1_I2: SmartBool;
	_FTC_DRV_101_1_I3: SmartBool;
	_FTC_DRV_101_1_I4: SmartBool;
	_FTC_SKU_101_I1: SmartBool;
	_FTC_SKU_101_I2: SmartBool;

}