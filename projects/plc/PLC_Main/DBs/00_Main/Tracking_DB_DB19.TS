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
import { Tracking_Simple_UDT_1 } from '../../Types/Tracking/Tracking_Simple_UDT_1';
import { Tracking_UDT } from '../../Types/Tracking/Tracking_UDT';
export class Tracking_DB_DB19 {

	KeyName : string;
	Name: string;
	Number: number;
	Id: number;
	public static Design = 'Tracking_DB_DB19'
	_TrackingId: UInt16PlcTag;
	_EmptyTrackingSimple: Tracking_Simple_UDT_1;
	_EmptyTracking: Tracking_UDT;
	_TrackingLostIndex: UInt16PlcTag;
	_BadReadIndex: UInt16PlcTag;

	Constructor(){
	this.KeyName = "Tracking_DB_DB19"	}
}