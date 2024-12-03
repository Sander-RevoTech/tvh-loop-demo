export enum PlcMemoryType {
	DB,M,I,Q,PIW,PQW,PID,PQD,IW,ID,QW,QD,IDB,SDB,
}
export class PlcTagBase {
	TypeTypeScript: string;
	ParentTag: Boolean;
	Value: Object;
	WriteValue: Object;
	WriteMessage: string;
	Name: string;
	Id: [Number];
	Type: string;
	Comment: string;
	OpcNode: string;
	DbName: string;
	ByteAdress: Number;
	BitAdress: Number;
	DbNumber: Number;
	PlcMemoryType: PlcMemoryType;
	LengthBits: Number;
	Lengthytes: Number;
	StartAdressBits: Number;
	EndAdressBits: Number;
}

export class BoolPlcTag extends PlcTagBase {
	Value: Boolean;
	WriteValue: Boolean;
}
export class BytePlcTag extends PlcTagBase {
	Value: Int8Array;
	WriteValue: Int8Array;
}
export class CharPlcTag extends PlcTagBase {
	Value: string;
	WriteValue: string;
}
export class USIntPlcTag extends PlcTagBase {
	Value: Int8Array;
	WriteValue: Int8Array;
}
export class HwAnyPlcTag extends PlcTagBase {
	Value: Number;
	WriteValue: Number;
}
export class HwioPlcTag extends PlcTagBase {
	Value: Number;
	WriteValue: Number;
}
export class Int16PlcTag extends PlcTagBase {
	Value: Number;
	WriteValue: Number;
}
export class UInt16PlcTag extends PlcTagBase {
	Value: Number;
	WriteValue: Number;
}
export class WordlcTag extends PlcTagBase {
	Value: Number;
	WriteValue: Number;
}
export class DWordPlcTag extends PlcTagBase {
	Value: Number;
	WriteValue: Number;
}
export class DIntPlcTag extends PlcTagBase {
	Value: Number;
	WriteValue: Number;
}
export class UDIntPlcTag extends PlcTagBase {
	Value: Number;
	WriteValue: Number;
}
export class RealPlcTag extends PlcTagBase {
	Value: Number;
	WriteValue: Number;
}
export class LRealPlcTag extends PlcTagBase {
	Value: Number;
	WriteValue: Number;
}
export class TimeMsPlcTag extends PlcTagBase {
	Value: Number;
	WriteValue: Number;
}
export class DatePLcTag extends PlcTagBase {
	Value: Date;
	WriteValue: Date;
}
export class Date_And_TimePlcTag extends PlcTagBase {
	Value: Date;
	WriteValue: Date;
}
export class DtlPlcTag extends PlcTagBase {
	Value: Date;
	WriteValue: Date;
}
export class StringPlcTag extends PlcTagBase {
	Value: string;
}