import { IAsyncOperation } from '@revotechiscool/revo-tech-core-lib';

export interface IHttpActionPayload {
	asyncOperationsState?: IAsyncOperation[];
	httpMethode: httpMethode;
	url: string;
	body: {};
	queryParameters: string;
	actionSuccess: string;
	actionError: string;
}

export enum httpMethode {
	GET,
	PUT,
	POST,
	DELETE
}

export interface IHttpActionResult {
	type: string;
	payload: any;
	asyncOperationsState?: IAsyncOperation[];
}
