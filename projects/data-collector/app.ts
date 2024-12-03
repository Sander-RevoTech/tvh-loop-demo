import 'module-alias/register';
import * as express from 'express';
import * as https from 'https';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as passport from 'passport';
import * as helmet from 'helmet';
import * as path from 'path';
// import * as passportConfig from './config/passport';
import { Request, Response, Application } from 'express';
import * as mongo from 'mongoose';
import { readFileSync } from 'fs';

import { Routes, Settings, ProcessMode } from '@data-collector/config';
import { StateCore, IGlobal } from '@data-collector/modules';
import { CrudDbAccess } from '@revotechiscool/revo-tech-dynamic-lib';
import { mkdirExist } from '@revotechiscool/revo-tech-automation-backend';

console.log('starting up....');
Settings.setSettings();

const PORT = Settings.SERVER.Port;
const ID = Settings.SERVER.Ip;

export class App {
	public app: Application = express();
	private state: StateCore;
	public https: https.Server;
	public router: express.Router = express.Router();
	public routes: Routes = new Routes(this.app, ID, PORT);

	private key: string | Buffer = '';
	private certificate: string | Buffer = '';

	public credentials: https.ServerOptions = {
		key: this.key,
		cert: this.certificate
	};

	constructor() {
		process.env.ROOTDIR = path.resolve(__dirname);
		try {
			console.log('construction server...');
			this.setupGlobal();
			this.SetExpressSetting();
			this.ConnectToMongo();
			this.setupState();
			// this.SetUpPassport();
			this.SetupCors();
			this.routes.initRoutes();
			// this.GetKeyAndCertificate();
			this.setupDynamicCrud();
			this.LaunchApp();
		} catch (error) {
			console.error(error);
		}
	}

	setupGlobal() {
		(global as IGlobal).appRoot = path.resolve(__dirname);
		(global as IGlobal).resources = 'resources';
		mkdirExist(
			path.join((global as IGlobal).appRoot, (global as IGlobal).resources)
		);
	}

	setupState() {
		this.state = new StateCore();
		(global as IGlobal).state = this.state;
	}

	setupDynamicCrud() {
		CrudDbAccess.uploadSwitch = Routes.uploadSwitch;
	}

	SetExpressSetting() {
		// this.app.use(express.static(__dirname + "/../angular/www/"));
		this.app.use(bodyParser.json());
	}

	SetUpPassport() {
		this.app.use(passport.initialize());
		this.app.use(passport.session());
		// passportConfig.init(passport);
	}

	SetupCors() {
		this.app.use(cors());
		this.app.use((req: Request, res: Response, next) => {
			res.header('Access-Control-Allow-Origin', '*');
			res.header(
				'Access-Control-Allow-Headers',
				'Origin, X-Requested-With, Content-Type, Accept'
			);
			next();
		});
		this.app.options('*', cors());
	}

	ConnectToMongo() {
		const uri = 'mongodb://127.0.0.1:27017/RTSCADA_TVHLOOP_DEMO';

		mongo.connect(uri, (err: any) => {
			if (err) {
				console.log(err.message);
			} else {
				console.log('Succesfully Connected to mongo database!');
			}
		});
	}

	GetKeyAndCertificate() {
		const keyPath = path.join(__dirname, '../utils/keys', 'https/server.key');
		this.key = readFileSync(keyPath);
		const certPath = path.join(__dirname, '../utils/keys', 'https/server.crt');
		this.certificate = readFileSync(certPath);
		this.credentials = {
			key: this.key,
			cert: this.certificate
		};
	}

	async LaunchApp() {
		// this.app.use(helmet());
		// this.https= https.createServer(this.credentials,this.app);
		console.log('launching server...');
		await this.state.Init();
		this.app.listen(PORT, ID, () => {
			console.log('Server is launched on port: ' + PORT);
			console.log('Server is launched on ID: ' + ID);
		});
	}
}
