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
import { TON_TIME } from '../TON_TIME';
export class ConnectionChecker_FB extends PlcTagBase {
	public static Design = 'ConnectionChecker_FB'
	_I_Beat: WordlcTag;
	_I_Name: StringPlcTag;
	_I_delay: TimeMsPlcTag;
	_O_alarmActive: BoolPlcTag;
	_prevBeat: WordlcTag;
	_delay: TON_TIME;

}