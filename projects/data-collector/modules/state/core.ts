import * as axios from 'axios';
const ax = axios.default;

import {
	ConnectionStatus,
	ConnectionStatusPLC,
	GetPlcDbToInit,
	initializeDBsObjects,
	sleep
} from '@revotechiscool/revo-tech-automation-functions';
import { PlcWebAlarmsService } from '@revotechiscool/revo-tech-automation-backend';
import {
	IConnectionStatus,
	IConnectionStatusPLC
} from '@revotechiscool/revo-tech-automation-types';
import { IPlcCollectionDatCol, PlcInboundDataCol } from 'plc/plc-collection';
import { Elanguage } from '@revotechiscool/revo-tech-core-types';

import { Settings } from '@data-collector/config';

export class StateCore {
	private initialzed = false;
	private store: IPlcCollectionDatCol;
	private tagServerConnection: ConnectionStatus;
	private plcAlarmConnection: IConnectionStatus;
	private tagServerPlcConnections: ConnectionStatusPLC[] = [];
	alarmService: PlcWebAlarmsService;

	public get Store(): IPlcCollectionDatCol {
		return { ...this.store };
	}

	constructor() {
		this.store = {
			plcMain: new PlcInboundDataCol()
		};

		this.tagServerConnection = new ConnectionStatus({
			Ip: Settings.MAINSERVER.rootUrl,
			Name: 'TAG SERVER',
			Connected: false,
			Port: Settings.MAINSERVER.port
		});

		this.plcAlarmConnection = {
			Ip: this.store.plcMain.IP,
			Name: 'Alarms server: ' + this.store.plcMain.NAME,
			Connected: false,
			Port: null
		};
	}

	public async Init() {
		await this.InitDbs();
		this.alarmService = new PlcWebAlarmsService(this.plcAlarmConnection, [
			Elanguage.enUS,
			Elanguage.frBE
		]);

		await this.CheckTagServerStatus();
		await this.initPlc();
	}

	private async initPlc() {

	}

	private async InitDbs(): Promise<void> {
		while (!this.initialzed) {
			try {
				const PlcDb = GetPlcDbToInit(null, this.store);
				if (PlcDb === null) {
					this.initialzed = true;
				} else {
					const params: axios.AxiosRequestConfig = {
						baseURL:
							Settings.MAINSERVER.rootUrl + Settings.MAINSERVER.dbInitApi,
						params: '/' + PlcDb
					};
					const response = await ax.get(
						Settings.MAINSERVER.rootUrl +
						Settings.MAINSERVER.dbInitApi +
						'/' +
						PlcDb.plcId +
						'/' +
						PlcDb.dbName
					);
					const result = initializeDBsObjects(response.data as any, this.store);
					this.store = result.PLCs;
					this.initialzed = result.initialized;
				}
			} catch (ex) {
				console.log(ex);
				await sleep(5000);
			}
		}
	}


	private async CheckTagServerStatus() {
		try {
			const response = await ax.get(
				Settings.MAINSERVER.rootUrl + Settings.MAINSERVER.tagServerStatusApi
			);
			this.tagServerConnection.Connected = true;
			this.AddTagServerPlcs(response.data as IConnectionStatusPLC[]);
		} catch (error) {
			console.error(error);
			this.tagServerConnection.Connected = false;
		}

		setTimeout(async () => {
			await this.CheckTagServerStatus();
		}, 10000);
	}

	private AddTagServerPlcs(plcs: IConnectionStatusPLC[]) {
		for (const plc of plcs) {
			let found = false;
			for (const statePlc of this.tagServerPlcConnections) {
				if (statePlc.Name === plc.Name) {
					found = true;
					statePlc.Connected = plc.Connected;
				}
			}
			if (!found) {
				this.tagServerPlcConnections.push(
					new ConnectionStatusPLC({
						Ip: plc.Ip,
						Name: plc.Name,
						Connected: plc.Connected
					})
				);
			}
		}
	}
}
