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
import { CLXAiPLCmini_IN_UDT } from '../../Types/ConveyLinx/CLXAiPLCmini_IN_UDT';
import { ConveyLinx_FullPLC_Single_Mini } from '../../Types/ConveyLinx/ConveyLinx_FullPLC_Single_Mini';
import { CLXAiPLCmini_OUT_UDT } from '../../Types/ConveyLinx/CLXAiPLCmini_OUT_UDT';
import { TON_TIME } from '../TON_TIME';
import { CycleRun } from '../Tools/CycleRun';
import { AlarmInfo_UDT } from '../../Types/Alarms/AlarmInfo_UDT';
import { ApplicationState_UDT } from '../../Types/appstate/ApplicationState_UDT';
import { ZoneInfo } from '../../Types/appstate/ZoneInfo';
export class ConveyLinxController_FullPLC_Mini extends PlcTagBase {
	public static Design = 'ConveyLinxController_FullPLC_Mini'
	_I_MotorData: CLXAiPLCmini_IN_UDT;
	_I_RunOverride: BoolPlcTag;
	_I_OVerrideDirection: BoolPlcTag;
	_I_ControlLeftMotorConveyLInx: BoolPlcTag;
	_I_ControlRightMotorConveyLinx: BoolPlcTag;
	_IO_MotorStatus: ConveyLinx_FullPLC_Single_Mini;
	_IO_MotorOutput: CLXAiPLCmini_OUT_UDT;
	_S_NotConnected: TON_TIME;
	_cycleRun: CycleRun;
	_AlarmInfo: AlarmInfo_UDT;
	_T_AppState: ApplicationState_UDT;
	_T_ZoneInfo: ZoneInfo;

}