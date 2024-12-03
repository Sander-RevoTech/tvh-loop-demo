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
import { InstallaitonControlInstance } from './InstallaitonControlInstance';
export class InstallationControl extends PlcTagBase {
	public static Design = 'InstallationControl'
	_IO_StartAutoMode: BoolPlcTag;
	_IO_StopAutoMode: BoolPlcTag;
	_zoneInstances: InstallaitonControlInstance[] // Length 2;
	_T_Index: Int16PlcTag;
	_lenght: Int16PlcTag;

}