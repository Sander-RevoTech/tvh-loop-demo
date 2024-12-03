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
import { PLC_IPC_STANDARD_REQ_RES_UDT } from '../../Types/IPC_STANDARD/PLC_IPC_STANDARD_REQ_RES_UDT';
import { IPC_INTERFACE_STATUS_UDT } from '../../Types/IPC_STANDARD/IPC_INTERFACE_STATUS_UDT';
import { AlarmInfo_UDT } from '../../Types/Alarms/AlarmInfo_UDT';
import { SmartBool } from '../Tools/SmartBool';
import { StepperController } from '../Tools/StepperController';
import { TON_TIME } from '../TON_TIME';
import { ZoneInfo } from '../../Types/appstate/ZoneInfo';
export class IPC_Request extends PlcTagBase {
	public static Design = 'IPC_Request'
	_I_StartRequestFlag: BoolPlcTag;
	_I_AbortResend: BoolPlcTag;
	_I_ResStatus: PLC_IPC_STANDARD_REQ_RES_UDT;
	_IO_IPC_Interface: IPC_INTERFACE_STATUS_UDT;
	_IO_ReqStatus: PLC_IPC_STANDARD_REQ_RES_UDT;
	_Alarm: AlarmInfo_UDT;
	_TriggerReader: SmartBool;
	_StepNumber: DIntPlcTag;
	_MessageID: UInt16PlcTag;
	_Step_100_SentData: StepperController;
	_Step_200_ReceiveData: StepperController;
	_Step_300_ResendingPhase: StepperController;
	_wmsError: TON_TIME;
	_T_ZoneInfo: ZoneInfo;
	_T_Condition: BoolPlcTag;
	_T_ErrorCondition: BoolPlcTag;
	_T_Res: Int16PlcTag;

}