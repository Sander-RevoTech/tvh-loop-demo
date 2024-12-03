const { spawn } = require('child_process');
var readline = require('readline');
var ncp = require('ncp').ncp;
const { argv } = require('yargs');
var path = require('path');
var ftpClient = require('promise-ftp');
var fs = require('fs');

const local = {
	targetDir: 'c://www/local'
};

const test = {
	targetDir: 'c://www/test',
	ftpIp: '127.0.0.1',
	ftpPath: 'revo-tech-hmi-hitachi-char',
	user: 'admin',
	passw: 'admin'
};

const prod = {
	targetDir: 'c://www/prod',
	ftpIp: '192.168.10.2',
	//ftpIp: '10.10.10.33',
	ftpPath: 'revo-tech-hmi-hitachi-char',
	user: 'admin',
	passw: 'admin'
};

let settings = {};
console.log(argv);
switch (argv.c) {
	case 'local':
		settings = local;
		break;
	case 'test':
		settings = test;
		break;
	default:
		settings = prod;
		break;
}
console.log('settings', settings);
console.log('cwd', __dirname);

const root = path.resolve(__dirname, '..');
const dist = path.join(root, 'dist', 'www');
const dataDir = path.join(root, 'data');
const targetDataDir = path.join(settings.targetDir);
console.log('dist', dist);

if (!argv.copy) argv.copy = 'fe,data';

let copyfound = false;
if (argv.copy) {
	if (argv.copy.includes('fe')) {
		copyfound = true;
		copyHmi();
		if (settings.ftpIp) {
			copyWebRootHmitoFtpServer();
		}
		console.log('done copy HMI');
	}

	if (argv.copy.includes('data')) {
		copy = true;
		copyPlcModels();
		if (settings.ftpIp) {
			copyPlcDatatoFtpServer();
		}
		console.log('done copy PLC data');
	}

	if (argv.copy.includes('all')) {
		copyfound = true;
		dotNetPublish();
	}
}

function copyPlcModels() {
	if (fs.existsSync(targetDataDir)) {
		fs.rmdirSync(targetDataDir, { recursive: true });
	}
	fs.mkdirSync(targetDataDir, { recursive: true });

	ncp.limit = 20;
	ncp(
		dataDir,
		targetDataDir,
		{
			filter: file => {
				if (file.endsWith('.xml') || file.endsWith('TS')) {
					return false;
				}
				return true;
			}
		},
		err => {
			if (err) {
				console.log(err);
			}
		}
	);
}

function copyHmi() {
	ncp.limit = 5;
	const hmiDir = dist;
	const target = path.join(settings.targetDir, 'www');
	if (fs.existsSync(target)) {
		fs.rmdirSync(target, { recursive: true });
	}
	fs.mkdirSync(target, { recursive: true });
	ncp(
		hmiDir,
		target,
		{
			filter: file => {
				if (file.endsWith('.TS')) {
					return false;
				}
				return true;
			}
		},
		err => {
			if (err) {
				console.log(err);
			}
		}
	);
}

async function copyWebRootHmitoFtpServer() {
	let ftp = new ftpClient();
	await ftp.connect({
		user: settings.user,
		password: settings.passw,
		host: settings.ftpIp,
		port: 21
	});

	const source = settings.targetDir + '/www';
	const target = '/' + settings.ftpPath + '/www';

	console.log('source path hmi: ' + source);
	console.log('target path hmi: ' + target);

	try {
		await ftp.rmdir(target, { includeContents: true });
	} catch (error) {
		console.log(error);
	}
	await ftpCopyDir(source, target, ftp);
	ftp.end();
}

async function copyPlcDatatoFtpServer() {
	let ftp = new ftpClient();
	await ftp.connect({
		user: settings.user,
		password: settings.passw,
		host: settings.ftpIp
	});

	const source = path.join(settings.targetDir);
	const target = '/' + settings.ftpPath;

	try {
		await ftp.rmdir(target, { includeContents: true });
	} catch (error) {
		console.log(error);
	}
	await ftpCopyDir(source, target, ftp);
	ftp.end();
}

async function ftpCopyDir(source, dest, ftp) {
	await ftp.mkdir(dest, { recursive: true });
	const res = fs.readdirSync(source, { withFileTypes: true, encoding: 'utf8' });
	for (let i = 0; i < res.length; i++) {
		const element = res[i];
		if (element.isFile()) {
			const fullPath = path.join(source, element.name);
			const ftpTarget = dest + '/' + element.name;
			await putFile(fullPath, ftpTarget, ftp);
		}
		if (element.isDirectory()) {
			const fullPath = path.join(source, element.name);
			const ftpTarget = dest + '/' + element.name;
			await ftpCopyDir(fullPath, ftpTarget, ftp);
		}
	}
}

async function putFile(source, dest, ftp) {
	return new Promise((resolve, err) => {
		try {
			const res = ftp.put(source, dest).then(() => {
				console.log('done copy file', dest);
				resolve(true);
			});
		} catch (error) {
			err(error);
		}
	});
}
