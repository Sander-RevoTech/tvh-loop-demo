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
import { CLXAiPLC_IN_UDT } from '../../Types/ConveyLinx/CLXAiPLC_IN_UDT';
import { EasySystems_LineairMotor_ConveyLinx_FullPLC_Single } from '../../Types/ConveyLinx/EasySystems_LineairMotor_ConveyLinx_FullPLC_Single';
import { CLXAiPLC_OUT_UDT } from '../../Types/ConveyLinx/CLXAiPLC_OUT_UDT';
import { SmartBool } from '../Tools/SmartBool';
import { TON_TIME } from '../TON_TIME';
import { SR } from '../Tools/SR';
import { CycleRun } from '../Tools/CycleRun';
import { AlarmInfo_UDT } from '../../Types/Alarms/AlarmInfo_UDT';
import { ApplicationState_UDT } from '../../Types/appstate/ApplicationState_UDT';
import { ZoneInfo } from '../../Types/appstate/ZoneInfo';
export class EasySystems_TransferUnit_UpDown_Controller_FB extends PlcTagBase {
	public static Design = 'EasySystems_TransferUnit_UpDown_Controller_FB'
	_I_MotorData: CLXAiPLC_IN_UDT;
	_I_ControlLeftMotorConveyLInx: BoolPlcTag;
	_I_ControlRightMotorConveyLinx: BoolPlcTag;
	_I_UpFb: BoolPlcTag;
	_I_DownFb: BoolPlcTag;
	_I_TimeUp: TimeMsPlcTag;
	_I_TimeDown: TimeMsPlcTag;
	_I_Direction: BoolPlcTag;
	_IO_MotorStatus: EasySystems_LineairMotor_ConveyLinx_FullPLC_Single;
	_IO_MotorOutput: CLXAiPLC_OUT_UDT;
	_SensorUp: SmartBool;
	_SensorDown: SmartBool;
	_NotConnected: TON_TIME;
	_NotUp: TON_TIME;
	_NotDown: TON_TIME;
	_srUp: SR;
	_srDown: SR;
	_CycleRun: CycleRun;
	_AlarmInfo: AlarmInfo_UDT;
	_T_RunAuto: BoolPlcTag;
	_T_RunManual: BoolPlcTag;
	_T_AppState: ApplicationState_UDT;
	_T_ZoneInfo: ZoneInfo;

}