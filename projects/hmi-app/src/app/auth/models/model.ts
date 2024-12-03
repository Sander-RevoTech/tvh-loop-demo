export interface IAuthResult {
	authenticated: boolean;
	token: string;
	username: string;
}

// tslint:disable-next-line:no-empty-interface
export interface IApiAuthResult extends IAuthResult {}

export interface IUserAuthenticateBody {
	name: string;
	password: string;
}

export interface IUserAccessGroup {
	_id: string;
	levels: IAccessLevel[];
	name: string;
}

export interface IAccessLevel {
	_id: string;
	level?: number;
	name?: string;
}

export interface IUser {
	_ID: string;
	token: string;
	email: String;
	name: String;
	accessUserGroup: IUserAccessGroup[];
}
