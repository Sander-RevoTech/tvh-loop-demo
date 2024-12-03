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
} from '../BaseTypes';
import { GXXX_EXTENSION_INPUT_UDT } from './GXXX_EXTENSION_INPUT_UDT';
export class G115D_INPUT_UDT extends PlcTagBase {
	public static Design = 'G115D_INPUT_UDT'
	_status: {
		_RunningAtSpeed: BoolPlcTag;
		_ControlRequest: BoolPlcTag;
		_MaxSpeedExceeded: BoolPlcTag;
		_TorQueOk: BoolPlcTag;
		_MotorHoldingBrakeOPen: BoolPlcTag;
		_TemperatureOk: BoolPlcTag;
		_MotorRotating: BoolPlcTag;
		_CurrentOk: BoolPlcTag;
		_readyForSwitchOn: BoolPlcTag;
		_Ready: BoolPlcTag;
		_OperationEnabled: BoolPlcTag;
		_FaultActive: BoolPlcTag;
		_CoastDownActive: BoolPlcTag;
		_QuickStopActive: BoolPlcTag;
		_InhibitedActive: BoolPlcTag;
		_AlarmActive: BoolPlcTag;
		};
	_Speed: WordlcTag;
	_Current: WordlcTag;
	_Torque: WordlcTag;
	_WarnCode: WordlcTag;
	_FaultCode: WordlcTag;
	_extension: GXXX_EXTENSION_INPUT_UDT;

}