export class PLC_Main { 

public readonly ID = 0;
public readonly NAME = 'PLC_Main';
public readonly SLOT = 0;
public readonly RACK = 0;
public readonly IP = '192.168.10.1';
public connected = false;
public initialized = false;
public Dbs: object;
public Tags: object;
}
