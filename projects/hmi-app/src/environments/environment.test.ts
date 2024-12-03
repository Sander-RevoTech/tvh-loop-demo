// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { Ienvironment } from '.';

export const environment: Ienvironment = {
	showNotifications: true,
	initialized: false,
	plcConnected: false,
	disableGuards: false,
	production: false,
	tagServer: {
		Ip: 'http://' + window.document.location.hostname,
		Port: 5000,
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

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
