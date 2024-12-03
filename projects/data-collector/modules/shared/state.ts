import { StateCore } from '@data-collector/modules';

export interface IGlobal extends NodeJS.Global {
	appRoot: string;
	resources: string;
	state: StateCore;
}

export function getState(): StateCore {
	return (global as IGlobal).state;
}
