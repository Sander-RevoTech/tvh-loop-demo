import { Ienvironment } from '.';

export const environment: Ienvironment = {
	showNotifications: true,
	initialized: false,
	plcConnected: false,
	disableGuards: false,
	production: true,
	tagServer: {
		Ip: 'http://' + window.document.location.hostname,
		Port: 5001,
		Name: 'Tag Server',
		Connected: false
	},
	dataCollector: {
		Ip: 'http://' + window.document.location.hostname,
		Port: 6001,
		Name: 'Data Collector',
		Connected: false
	},
	authenticate: {
		Ip: 'http://' + window.document.location.hostname,
		Port: 4202,
		Name: 'Authenticate',
		Connected: true
	}
};
