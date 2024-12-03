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
} from './BaseTypes';
export class LHTTP_typeTLS extends PlcTagBase {
	public static Design = 'LHTTP_typeTLS'
	_validateServerIdentity: BoolPlcTag;
	_serverCert: UDIntPlcTag;
	_clientCert: UDIntPlcTag;

}