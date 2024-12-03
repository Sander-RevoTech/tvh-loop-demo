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
export class Simulation_DB_DB30 {

	KeyName : string;
	Name: string;
	Number: number;
	Id: number;
	public static Design = 'Simulation_DB_DB30'
	_Simulation_On: BoolPlcTag;
	_EMG_OK: BoolPlcTag;
	_ScannerSimulation: BoolPlcTag;
	_MesDestinationSimulation: UInt16PlcTag;
	_ByPassGravityConv: BoolPlcTag;
	_barcode_sim: BoolPlcTag;
	_gateClosed: BoolPlcTag;
	_exitNumber: Int16PlcTag;
	_resetEmg: BoolPlcTag;

	Constructor(){
	this.KeyName = "Simulation_DB_DB30"	}
}