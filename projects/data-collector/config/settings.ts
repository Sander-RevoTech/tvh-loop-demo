import { IConnectionStatus } from '@revotechiscool/revo-tech-automation-types';

export interface IMainServer {
	rootUrl: string;
	port: number;
	dbInitApi: string;
	tagServerStatusApi: string;
	plcHub: string;
}

export enum ProcessMode {
	dev = 'dev',
	test = 'test',
	testLocal = 'testLocal',
	prod = 'prod',
	RevoTech = 'revo-tech'
}

export class Settings {
	static SERVER: IConnectionStatus;
	static MAINSERVER: IMainServer;

	static setSettings() {
		let env = 'prod';
		console.log(process.argv, 'arguments...');
		if (process.argv.length === 2) {
			console.error('No environment given');
			console.error('Choose dev, test or prod');
			console.error('Continue on prod mode');
			// process.exit();
		} else {
			env = process.argv[2];
		}
		console.log(env);

		switch (env) {
			case 'dev':
				this.setProcessMode(ProcessMode.dev);
				this.SERVER = {
					Ip: '127.0.0.1',
					Port: 6000,
					Name: 'DATA COLLECTOR DEV'
				};

				this.MAINSERVER = {
					rootUrl: 'http://192.168.10.2:5001',
					dbInitApi: '/api/PlcDb',
					port: 5001,
					tagServerStatusApi: '/api/plcinfo',
					plcHub: '/plcHub'
				};

				break;

			case 'prod':
				this.setProcessMode(ProcessMode.prod);

				this.SERVER = {
					Ip: '0.0.0.0',
					Port: 6001,
					Name: 'DATA COLLECTOR PROD'
				};

				this.MAINSERVER = {
					rootUrl: 'http://192.168.10.2:5001',
					dbInitApi: '/api/PlcDb',
					port: 81,
					tagServerStatusApi: '/api/plcinfo',
					plcHub: '/plcHub'
				};
				break;
		}
	}

	static setProcessMode(processMode: ProcessMode) {
		process.env.MODE = processMode;
	}

	static getProcessMode() {
		return process.env.MODE;
	}
}
