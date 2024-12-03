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
import { ApplicationState_UDT } from '../../Types/appstate/ApplicationState_UDT';
import { HmiButton } from '../Tools/HmiButton';
import { SmartBool } from '../Tools/SmartBool';
import { TON_TIME } from '../TON_TIME';
export class InstallaitonControlInstance extends PlcTagBase {
	public static Design = 'InstallaitonControlInstance'
	_IO_Appstate: ApplicationState_UDT;
	_HmiReset: HmiButton;
	_HmiStartAutoMode: HmiButton;
	_HmiStopAutoMode: HmiButton;
	_HmiActivateManualMode: HmiButton;
	_HmiDeactivateManualMode: HmiButton;
	_HmiStartEmptyMode: HmiButton;
	_HmiStopEmptyMode: HmiButton;
	_HmiStandbyMode: HmiButton;
	_AutModeActivated: SmartBool;
	_ManualModeActivated: SmartBool;
	_EmptyModeActivated: SmartBool;
	_StandbyMode: SmartBool;
	_OnDelayAutoMode: TON_TIME;
	_AutoMode: BoolPlcTag;
	_ManualMode: BoolPlcTag;
	_EmptyMode: BoolPlcTag;
	_Standby: BoolPlcTag;
	_T_Index: Int16PlcTag;
	_T_EnableButton: BoolPlcTag;
	_T_Appstate: ApplicationState_UDT;

}