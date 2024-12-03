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
export class PLC_IPC_Status_FB extends PlcTagBase {
	public static Design = 'PLC_IPC_Status_FB'
	_I_Snooze: BoolPlcTag;
	_I_delay: TimeMsPlcTag;
	_I_Reset: BoolPlcTag;
	_O_Status: BoolPlcTag;
	_IO_State: BoolPlcTag;
	_IO_Alarm: BoolPlcTag;
	_delay: TON_TIME;

}