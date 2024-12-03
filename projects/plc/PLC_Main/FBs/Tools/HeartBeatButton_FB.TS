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
import { HeartBeatButton_UDT } from '../../Types/Tools/HeartBeatButton_UDT';
import { TON_TIME } from '../TON_TIME';
export class HeartBeatButton_FB extends PlcTagBase {
	public static Design = 'HeartBeatButton_FB'
	_I_BeatSpeed: TimeMsPlcTag;
	_IO_Beat: HeartBeatButton_UDT;
	_beater: TON_TIME;
	_prevValue: BytePlcTag;

}