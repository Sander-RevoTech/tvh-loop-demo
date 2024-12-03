import {
	ConnectionStatus,
	ConnectionStatusPLC
} from '@revotechiscool/revo-tech-automation-functions';
import {
	ConnectionType,
	IConnections
} from '@revotechiscool/revo-tech-automation-types';
import { Router } from 'express';
import { Request, Response } from 'express-serve-static-core';

const router: Router = Router();

router.get('/status', async (req: Request, res: Response) => {
	try {
		let tcpConnections = ConnectionStatus.Connections().map(c => {
			if (c.ConnectionType === ConnectionType.TCP_IP) {
				return c.Status;
			}
		});
		tcpConnections = tcpConnections.filter(o => o !== null && o !== undefined);

		const s7Connections = ConnectionStatusPLC.PlcConnections().map(
			c => c.Status
		);

		const result: IConnections = {
			s7: s7Connections,
			tcpIp: tcpConnections
		};

		return res.json(result);
	} catch (error) {
		res.status(500);
		return res.json(error);
	}
});

export const StateController = router;
