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
import { EMG_Status_UDT } from '../../Types/Emg/EMG_Status_UDT';
export class EMG_STATUS_DB_DB85 {

	KeyName : string;
	Name: string;
	Number: number;
	Id: number;
	public static Design = 'EMG_STATUS_DB_DB85'
	_EMG_MAIN: EMG_Status_UDT;
	_EMG_ZONE_1: EMG_Status_UDT;
	_EMG_ZONE_2: EMG_Status_UDT;
	_EMG_ZONE_3_4: EMG_Status_UDT;
	_EMG_ZONE_5: EMG_Status_UDT;

	Constructor(){
	this.KeyName = "EMG_STATUS_DB_DB85"	}
}