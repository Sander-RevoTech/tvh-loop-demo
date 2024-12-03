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
export class Nord_Drive_SK5xx_Out_Data_UDT extends PlcTagBase {
	public static Design = 'Nord_Drive_SK5xx_Out_Data_UDT'
	_xStart48011_Takt: BoolPlcTag;
	_xStart48012_Home: BoolPlcTag;
	_xCrtlData: BoolPlcTag;
	_CmdRightDirection: BoolPlcTag;
	_CmdLeftDirection: BoolPlcTag;
	_Reserve_1: BoolPlcTag;
	_Parameterset_LSB: BoolPlcTag;
	_Parameterset_MSB: BoolPlcTag;
	_CmdReadyForOPeration: BoolPlcTag;
	_ActivatePower: BoolPlcTag;
	_EmergencyOk: BoolPlcTag;
	_EnableOperation: BoolPlcTag;
	_EnableRampGenerator: BoolPlcTag;
	_EnableSetPointRampGenerator: BoolPlcTag;
	_xEnSetp: BoolPlcTag;
	_ResetError: BoolPlcTag;
	_MotorSetpointSpeed: Int16PlcTag;
	_DigitalOutputs: {
		_spare_7: BytePlcTag;
		_Relay_1: BoolPlcTag;
		_Relay_2: BoolPlcTag;
		_Output_1: BoolPlcTag;
		_Output_2: BoolPlcTag;
		_spare_3: BoolPlcTag;
		_spare_4: BoolPlcTag;
		_spare_5: BoolPlcTag;
		_spare_6: BoolPlcTag;
		};
	_Reserve_2: Int16PlcTag;

}