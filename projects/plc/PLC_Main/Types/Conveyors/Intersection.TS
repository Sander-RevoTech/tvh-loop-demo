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
export class Intersection extends PlcTagBase {
	public static Design = 'Intersection'
	_UpstreamIndex: Int16PlcTag;
	_DownstreamIndex: Int16PlcTag;
	_ReceivePosition: Int16PlcTag;
	_SendingPosition: Int16PlcTag;
	_ReceiveConveyorIndex: Int16PlcTag;
	_SendingConveyorIndex: Int16PlcTag;
	_InverseFlowReceiving: BoolPlcTag;
	_InverseFlowSending: BoolPlcTag;
	_ReceiveNoEndSensor: BoolPlcTag;
	_TargetConveyor: Int16PlcTag;
	_RequestingConveyor: Int16PlcTag;
	_Algin: {
		_active: BoolPlcTag;
		_speed: RealPlcTag;
		_direction: BoolPlcTag;
		_AlginPosition: Int16PlcTag;
		_conveyorIndex: UInt16PlcTag;
		_distnace: RealPlcTag;
		};

}