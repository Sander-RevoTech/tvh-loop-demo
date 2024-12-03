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
import { EMG_STATUS_FB } from '../ButtonControls/EMG_STATUS_FB';
import { ConnectionChecker_FB } from '../Tools/ConnectionChecker_FB';
export class AlarmMain extends PlcTagBase {
	public static Design = 'AlarmMain'
	_EMG_MAIN: EMG_STATUS_FB;
	_EMG_ZONE_1: EMG_STATUS_FB;
	_EMG_ZONE_2: EMG_STATUS_FB;
	_EMG_ZONE_3_4: EMG_STATUS_FB;
	_EMG_ZONE_5: EMG_STATUS_FB;
	_DataCollectorConnection: ConnectionChecker_FB;
	_T_Condition: BoolPlcTag;

}