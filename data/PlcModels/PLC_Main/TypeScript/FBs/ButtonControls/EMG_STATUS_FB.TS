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
export class EMG_STATUS_FB extends PlcTagBase {
	public static Design = 'EMG_STATUS_FB'
	_I_BTTN_STATUS_OK: BoolPlcTag;
	_I_AlarmInfoBttnPressed: StringPlcTag;
	_I_EMG_ACTIVATED: BoolPlcTag;
	_I_EmgName: StringPlcTag;
	_I_UseBttnPressedALarm: BoolPlcTag;
	_I_UseEmgNotActiveAlarm: BoolPlcTag;
	_O_AlarmActive: BoolPlcTag;
	_IO_STATUS: EMG_Status_UDT;
	_T_ButtonActive: BoolPlcTag;
	_T_EmgActive: BoolPlcTag;

}