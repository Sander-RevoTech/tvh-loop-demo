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
import { HandShake_UDT } from '../../Types/Tools/HandShake_UDT';
export class HMI_DB_DB46 {

	KeyName : string;
	Name: string;
	Number: number;
	Id: number;
	public static Design = 'HMI_DB_DB46'
	_ResetFromHMI: BoolPlcTag;
	_ResetCounters: HandShake_UDT;
	_RemoveManualOverride: HandShake_UDT;
	_ReloadSettings: HandShake_UDT;
	_SetDefaultTrackings: HandShake_UDT;
	_ResetSensorCounters: HandShake_UDT;
	_WakeUpSignal: BoolPlcTag;

	Constructor(){
	this.KeyName = "HMI_DB_DB46"	}
}