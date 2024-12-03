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
export class CLXAiPLCmini_OUT_UDT extends PlcTagBase {
	public static Design = 'CLXAiPLCmini_OUT_UDT'
	_LeftMDRasDIO: {
		_Reserved: BoolPlcTag;
		_Reserved1: BoolPlcTag;
		_Reserved2: BoolPlcTag;
		_Reserved3: BoolPlcTag;
		_Reserved4: BoolPlcTag;
		_Reserved5: BoolPlcTag;
		_Reserved6: BoolPlcTag;
		_SetMotDIO: BoolPlcTag;
		_Reserved8: BoolPlcTag;
		_DrivePIN4: BoolPlcTag;
		_DrivePIN3: BoolPlcTag;
		_Reserved11: BoolPlcTag;
		_Reserved12: BoolPlcTag;
		_Reserved13: BoolPlcTag;
		_Reserved14: BoolPlcTag;
		_Reserved15: BoolPlcTag;
		};
	_RightMDRasDIO: {
		_Reserved0: BoolPlcTag;
		_Reserved1: BoolPlcTag;
		_Reserved2: BoolPlcTag;
		_Reserved3: BoolPlcTag;
		_Reserved4: BoolPlcTag;
		_Reserved5: BoolPlcTag;
		_Reserved6: BoolPlcTag;
		_SetMotDIO: BoolPlcTag;
		_DrivePIN2: BoolPlcTag;
		_Reserved9: BoolPlcTag;
		_DrivePIN3: BoolPlcTag;
		_Reserved11: BoolPlcTag;
		_Reserved12: BoolPlcTag;
		_Reserved13: BoolPlcTag;
		_Reserved14: BoolPlcTag;
		_Reserved15: BoolPlcTag;
		};
	_SensorPortsDO: {
		_Reserved_0_: BoolPlcTag;
		_Reserved_1_: BoolPlcTag;
		_Reserved_2_: BoolPlcTag;
		_Reserved_3_: BoolPlcTag;
		_Reserved_4_: BoolPlcTag;
		_Reserved_5_: BoolPlcTag;
		_Reserved_6_: BoolPlcTag;
		_Reserved_7_: BoolPlcTag;
		_DriveLeftPIN2: BoolPlcTag;
		_DriveRightPIN2: BoolPlcTag;
		_Reserved_10_: BoolPlcTag;
		_Reserved_11_: BoolPlcTag;
		_Reserved_12_: BoolPlcTag;
		_SetLeftPIN2asDO: BoolPlcTag;
		_SetRightPIN2asDO: BoolPlcTag;
		_Reserved_15_: BoolPlcTag;
		};
	_LeftMDRControl: {
		_MDR_Direction: BoolPlcTag;
		_Reserved_1_: BoolPlcTag;
		_Reserved_2_: BoolPlcTag;
		_Reserved_3_: BoolPlcTag;
		_Reserved_4_: BoolPlcTag;
		_Reserved_5_: BoolPlcTag;
		_Reserved_6_: BoolPlcTag;
		_Reserved_7_: BoolPlcTag;
		_Run_MDR: BoolPlcTag;
		_Reserved_9_: BoolPlcTag;
		_Reserved_10_: BoolPlcTag;
		_Reserved_11_: BoolPlcTag;
		_Reserved_12_: BoolPlcTag;
		_Reserved_13_: BoolPlcTag;
		_Reserved_14_: BoolPlcTag;
		_Reserved_15_: BoolPlcTag;
		};
	_RightMDRControl: {
		_MDR_Direction: BoolPlcTag;
		_Reserved_1_: BoolPlcTag;
		_Reserved_2_: BoolPlcTag;
		_Reserved_3_: BoolPlcTag;
		_Reserved_4_: BoolPlcTag;
		_Reserved_5_: BoolPlcTag;
		_Reserved_6_: BoolPlcTag;
		_Reserved_7_: BoolPlcTag;
		_Run_MDR: BoolPlcTag;
		_Reserved_9_: BoolPlcTag;
		_Reserved_10_: BoolPlcTag;
		_Reserved_11_: BoolPlcTag;
		_Reserved_12_: BoolPlcTag;
		_Reserved_13_: BoolPlcTag;
		_Reserved_14_: BoolPlcTag;
		_Reserved_15_: BoolPlcTag;
		};
	_LeftMDRSpeed: Int16PlcTag;
	_RightMDRSpeed: Int16PlcTag;
	_ClearMDRError: WordlcTag;

}