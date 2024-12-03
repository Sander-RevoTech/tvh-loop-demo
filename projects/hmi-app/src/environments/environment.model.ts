import { IConnectionStatus } from '@revotechiscool/revo-tech-automation-types';

export interface Ienvironment {
	showNotifications: boolean;
	initialized: boolean;
	plcConnected: boolean;
	disableGuards: boolean;
	production: boolean;
	tagServer: IConnectionStatus;
	dataCollector: IConnectionStatus;
	authenticate: IConnectionStatus;
}
