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
import { EVO_LABEL_STATUS_UDT } from '../../Types/Evo_Label/EVO_LABEL_STATUS_UDT';
import { EVO_LABEL_UDT } from '../../Types/Evo_Label/EVO_LABEL_UDT';
import { AlarmInfo_UDT } from '../../Types/Alarms/AlarmInfo_UDT';
import { PLC_IPC_Status_FB } from './PLC_IPC_Status_FB';
import { ApplicationState_UDT } from '../../Types/appstate/ApplicationState_UDT';
import { ZoneInfo } from '../../Types/appstate/ZoneInfo';
export class EvoLabel_FB extends PlcTagBase {
	public static Design = 'EvoLabel_FB'
	_IO_EvoStatus: EVO_LABEL_STATUS_UDT;
	_IO_Printer: EVO_LABEL_UDT;
	_alarm: AlarmInfo_UDT;
	_offline: PLC_IPC_Status_FB;
	_markerError: PLC_IPC_Status_FB;
	_applicatorError: PLC_IPC_Status_FB;
	_T_Appstate: ApplicationState_UDT;
	_T_Zone: ZoneInfo;

}