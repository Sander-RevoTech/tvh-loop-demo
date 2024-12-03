import { Router, Request, Response, Application } from 'express';
import * as path from 'path';

import { StateController } from '@data-collector/modules';
import { CrudController } from '@revotechiscool/revo-tech-dynamic-lib';

import { Workbook } from 'exceljs';
import { PlcWebAlarmController } from '@revotechiscool/revo-tech-automation-backend';
import {
	ICrudRequest,
	ISettingsStatusMessages
} from '@revotechiscool/revo-tech-core-types';

export class Routes {
	private router: Router = Router();
	private ID: string;
	private PORT: number;
	private app: Application;

	constructor(express: Application, ID: string, PORT: number) {
		this.app = express;
		this.ID = ID;
		this.PORT = PORT;
	}

	initRoutes() {
		// this.ServeMainPage();
		this.app.use('/alarms', PlcWebAlarmController);
		this.app.use('/crud', CrudController);
		this.app.use('/state', StateController);
	}

	ServeMainPage() {
		this.app.get('/', (req: Request, res: Response) => {
			res.sendFile(path.join(__dirname, 'static/index.html'));
		});
	}

	static async uploadSwitch(
		request: ICrudRequest,
		workbook: Workbook
	): Promise<ISettingsStatusMessages> {
		switch (request.collection) {
			default:
				return null;
		}
	}
}
