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
export class Nord_Drive_In_Data_UDT extends PlcTagBase {
	public static Design = 'Nord_Drive_In_Data_UDT'
	_MotorRunningOnSetpoint: BoolPlcTag;
	_BusControllerActive: BoolPlcTag;
	_Function4809_HomingOk: BoolPlcTag;
	_MotorIsRunningRight: BoolPlcTag;
	_MotorIsRunningLeft: BoolPlcTag;
	_Function4810_MovementDone: BoolPlcTag;
	_ParameterSetLsB: BoolPlcTag;
	_ParameterSetMSB: BoolPlcTag;
	_ReadyToStart: BoolPlcTag;
	_ReadyForOperation: BoolPlcTag;
	_Running: BoolPlcTag;
	_ErrorActive: BoolPlcTag;
	_PowerOn: BoolPlcTag;
	_EmergencyStoPActive: BoolPlcTag;
	_CannotStartError: BoolPlcTag;
	_WarningActive: BoolPlcTag;
	_ActualSpeed: Int16PlcTag;
	_DigitalInputs: {
		_Spare_5: BytePlcTag;
		_Input_1: BoolPlcTag;
		_Input_2: BoolPlcTag;
		_Input_3: BoolPlcTag;
		_Input_4: BoolPlcTag;
		_Spare_1: BoolPlcTag;
		_Spare_2: BoolPlcTag;
		_Spare_3: BoolPlcTag;
		_Spare_4: BoolPlcTag;
		};
	_EncoderPos: Int16PlcTag;

}