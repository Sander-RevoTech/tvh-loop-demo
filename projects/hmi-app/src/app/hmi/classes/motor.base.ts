import {
	Motor_DOL_UDT,
	ConveyLinx_FullPLC_Single,
	EasySystems_LineairMotor_ConveyLinx_FullPLC_Single,
	ConveyLinx_FullPLC_Single_Mini,
	FLOWSORT_TWISTER_UDT,
	G115D_DRIVE_UDT,
	Nord_Drive_UDT
} from 'plc/PLC_MAIN';

import {
	ComponentIdBase,
	IPollingRequest
} from '@revotechiscool/revo-tech-hmi-lib';
import { BoolPlcTag } from '@revotechiscool/revo-tech-automation-types';

export type IMotor =
	| Nord_Drive_UDT
	| Motor_DOL_UDT
	| ConveyLinx_FullPLC_Single_Mini
	| ConveyLinx_FullPLC_Single
	| EasySystems_LineairMotor_ConveyLinx_FullPLC_Single
	| FLOWSORT_TWISTER_UDT
	| G115D_DRIVE_UDT;

export interface IMotorStatus {
	alarmActive: boolean;
	running: boolean | Boolean;
	name: string;
	enableManualCommands: boolean | Boolean;
}

export class MotorBase {
	static getStatus(motor: IMotor): IMotorStatus {
		if (motor.Type === Motor_DOL_UDT.Design) {
			const mot = motor as Motor_DOL_UDT;
			return {
				alarmActive: mot._Alarms._AlarmStatus.Value > 0,
				name: mot.Name,
				running: mot._Status._Running.Value,
				enableManualCommands: !mot._Status._ManualCommandsDisabled.Value
			};
		}

		// if (motor.Type === Nord_ASI_SoftStarter_UDT.Design) {
		// 	const mot = motor as Nord_ASI_SoftStarter_UDT;
		// 	return {
		// 		alarmActive: mot._Alarms._AlarmStatus.Value > 0,
		// 		name: mot.Name,
		// 		running: mot._Status._Running.Value,
		// 		enableManualCommands: !mot._Status._ManualCommandsDisabled.Value
		// 	};
		// }

		if (motor.Type === Nord_Drive_UDT.Design) {
			const mot = motor as Nord_Drive_UDT;
			return {
				alarmActive: mot._Alarms._AlarmStatus.Value as number > 0,
				name: mot.Name,
				running: mot._Status._Running.Value,
				enableManualCommands: !mot._Status._ManualCommandsDisabled.Value
			};
		}
		if (motor.Type === ConveyLinx_FullPLC_Single.Design) {
			const mot = motor as ConveyLinx_FullPLC_Single;
			return {
				alarmActive: mot._Alarms._Status_1.Value > 0,
				name: mot.Name,
				running: mot._Status._Running.Value,
				enableManualCommands: !mot._Status._ManualCommandsDisabled.Value
			};
		}

		if (motor.Type === ConveyLinx_FullPLC_Single_Mini.Design) {
			const mot = motor as ConveyLinx_FullPLC_Single_Mini;
			return {
				alarmActive: mot._Alarms._Status_1.Value > 0,
				name: mot.Name,
				running: mot._Status._Running.Value,
				enableManualCommands: !mot._Status._ManualCommandsDisabled.Value
			};
		}

		if (
			motor.Type === EasySystems_LineairMotor_ConveyLinx_FullPLC_Single.Design
		) {
			const mot = motor as EasySystems_LineairMotor_ConveyLinx_FullPLC_Single;
			return {
				alarmActive: mot._Alarms._Status.Value > 0,
				name: mot.Name,
				running: mot._Status._Running.Value,
				enableManualCommands: !mot._Status._ManualCommandsDisabled.Value
			};
		}

		if (motor.Type === FLOWSORT_TWISTER_UDT.Design) {
			const mot = motor as FLOWSORT_TWISTER_UDT;
			return {
				alarmActive: mot._Alarms._Status.Value > 0,
				name: mot.Name,
				running: mot._Status._Running.Value,
				enableManualCommands: !mot._Status._ManualCommandsDisabled.Value
			};
		}

		if (motor.Type === G115D_DRIVE_UDT.Design) {
			const mot = motor as G115D_DRIVE_UDT;
			return {
				alarmActive: mot._Alarms._Status.Value > 0,
				name: mot.Name,
				running: mot._Status._Running.Value,
				enableManualCommands: !mot._Status._ManualCommandsDisabled.Value
			};
		}

		return null;
	}

	static getStatusIds(motor: IMotor, id: ComponentIdBase): IPollingRequest[] {
		if (motor.Type === Motor_DOL_UDT.Design) {
			const mot = motor as Motor_DOL_UDT;
			const running: IPollingRequest = {
				id: mot._Status._Running.Id,
				requesterId: id.id,
				plcMemoryType: motor.PlcMemoryType
			};
			const alarm: IPollingRequest = {
				id: mot._Alarms._AlarmStatus.Id,
				requesterId: id.id,
				plcMemoryType: motor.PlcMemoryType
			};

			const commandAllowed: IPollingRequest = {
				id: mot._Status._ManualCommandsDisabled.Id,
				requesterId: id.id,
				plcMemoryType: motor.PlcMemoryType
			};

			return [running, alarm, commandAllowed];
		}

		// if (motor.Type === Nord_ASI_SoftStarter_UDT.Design) {
		// 	const mot = motor as Nord_ASI_SoftStarter_UDT;
		// 	const running: IPollingRequest = {
		// 		id: mot._Status._Running.Id,
		// 		requesterId: id.id,
		// 		plcMemoryType: motor.PlcMemoryType
		// 	};
		// 	const alarm: IPollingRequest = {
		// 		id: mot._Alarms._AlarmStatus.Id,
		// 		requesterId: id.id,
		// 		plcMemoryType: motor.PlcMemoryType
		// 	};
		// 	const commandAllowed: IPollingRequest = {
		// 		id: mot._Status._ManualCommandsDisabled.Id,
		// 		requesterId: id.id,
		// 		plcMemoryType: motor.PlcMemoryType
		// 	};

		// 	return [running, alarm, commandAllowed];
		// }
		if (motor.Type === Nord_Drive_UDT.Design) {
			const mot = motor as Nord_Drive_UDT;
			const running: IPollingRequest = {
				id: mot._Status._Running.Id,
				requesterId: id.id,
				plcMemoryType: motor.PlcMemoryType
			};
			const alarm: IPollingRequest = {
				id: mot._Alarms._AlarmStatus.Id,
				requesterId: id.id,
				plcMemoryType: motor.PlcMemoryType
			};
			const commandAllowed: IPollingRequest = {
				id: mot._Status._ManualCommandsDisabled.Id,
				requesterId: id.id,
				plcMemoryType: motor.PlcMemoryType
			};

			return [running, alarm, commandAllowed];
		}
		if (motor.Type === ConveyLinx_FullPLC_Single.Design) {
			const mot = motor as ConveyLinx_FullPLC_Single;
			const running: IPollingRequest = {
				id: mot._Status._Running.Id,
				requesterId: id.id,
				plcMemoryType: motor.PlcMemoryType
			};
			const alarm: IPollingRequest = {
				id: mot._Alarms._Status_1.Id,
				requesterId: id.id,
				plcMemoryType: motor.PlcMemoryType
			};
			const commandAllowed: IPollingRequest = {
				id: mot._Status._ManualCommandsDisabled.Id,
				requesterId: id.id,
				plcMemoryType: motor.PlcMemoryType
			};

			return [running, alarm, commandAllowed];
		}

		if (motor.Type === FLOWSORT_TWISTER_UDT.Design) {
			const mot = motor as FLOWSORT_TWISTER_UDT;
			const running: IPollingRequest = {
				id: mot._Status._Running.Id,
				requesterId: id.id,
				plcMemoryType: motor.PlcMemoryType
			};
			const alarm: IPollingRequest = {
				id: mot._Alarms._Status.Id,
				requesterId: id.id,
				plcMemoryType: motor.PlcMemoryType
			};
			const commandAllowed: IPollingRequest = {
				id: mot._Status._ManualCommandsDisabled.Id,
				requesterId: id.id,
				plcMemoryType: motor.PlcMemoryType
			};

			return [running, alarm, commandAllowed];
		}

		if (motor.Type === ConveyLinx_FullPLC_Single_Mini.Design) {
			const mot = motor as ConveyLinx_FullPLC_Single_Mini;
			const running: IPollingRequest = {
				id: mot._Status._Running.Id,
				requesterId: id.id,
				plcMemoryType: motor.PlcMemoryType
			};
			const alarm: IPollingRequest = {
				id: mot._Alarms._Status_1.Id,
				requesterId: id.id,
				plcMemoryType: motor.PlcMemoryType
			};
			const commandAllowed: IPollingRequest = {
				id: mot._Status._ManualCommandsDisabled.Id,
				requesterId: id.id,
				plcMemoryType: motor.PlcMemoryType
			};

			return [running, alarm, commandAllowed];
		}

		if (
			motor.Type === EasySystems_LineairMotor_ConveyLinx_FullPLC_Single.Design
		) {
			const mot = motor as EasySystems_LineairMotor_ConveyLinx_FullPLC_Single;
			const running: IPollingRequest = {
				id: mot._Status._Running.Id,
				requesterId: id.id,
				plcMemoryType: motor.PlcMemoryType
			};
			const alarm: IPollingRequest = {
				id: mot._Alarms._Status.Id,
				requesterId: id.id,
				plcMemoryType: motor.PlcMemoryType
			};
			const commandAllowed: IPollingRequest = {
				id: mot._Status._ManualCommandsDisabled.Id,
				requesterId: id.id,
				plcMemoryType: motor.PlcMemoryType
			};

			return [running, alarm, commandAllowed];
		}

		if (motor.Type === G115D_DRIVE_UDT.Design) {
			const mot = motor as G115D_DRIVE_UDT;
			const running: IPollingRequest = {
				id: mot._Status._Running.Id,
				requesterId: id.id,
				plcMemoryType: motor.PlcMemoryType
			};
			const alarm: IPollingRequest = {
				id: mot._Alarms._Status.Id,
				requesterId: id.id,
				plcMemoryType: motor.PlcMemoryType
			};
			const commandAllowed: IPollingRequest = {
				id: mot._Status._ManualCommandsDisabled.Id,
				requesterId: id.id,
				plcMemoryType: motor.PlcMemoryType
			};

			return [running, alarm, commandAllowed];
		}
	}

	static getResetTag(motor: IMotor): BoolPlcTag {
		if (motor.Type === Motor_DOL_UDT.Design) {
			const mot = motor as Motor_DOL_UDT;
			return mot._Cmd._Reset;
		}

		// if (motor.Type === Nord_ASI_SoftStarter_UDT.Design) {
		// 	const mot = motor as Nord_ASI_SoftStarter_UDT;
		// 	return mot._Cmd._Reset;
		// }
		if (motor.Type === Nord_Drive_UDT.Design) {
			const mot = motor as Nord_Drive_UDT;
			return mot._Cmd._Reset;
		}
		if (motor.Type === ConveyLinx_FullPLC_Single.Design) {
			const mot = motor as ConveyLinx_FullPLC_Single;
			return mot._Cmd._Reset;
		}

		if (motor.Type === ConveyLinx_FullPLC_Single_Mini.Design) {
			const mot = motor as ConveyLinx_FullPLC_Single_Mini;
			return mot._Cmd._Reset;
		}

		if (
			motor.Type === EasySystems_LineairMotor_ConveyLinx_FullPLC_Single.Design
		) {
			const mot = motor as EasySystems_LineairMotor_ConveyLinx_FullPLC_Single;
			return mot._Cmd._Reset;
		}

		if (motor.Type === FLOWSORT_TWISTER_UDT.Design) {
			const mot = motor as FLOWSORT_TWISTER_UDT;
			return mot._Cmd._Reset;
		}

		if (motor.Type === G115D_DRIVE_UDT.Design) {
			const mot = motor as G115D_DRIVE_UDT;
			return mot._Cmd._Reset;
		}

		return null;
	}

	static getStartStopTag(motor: IMotor): BoolPlcTag {
		if (motor.Type === Motor_DOL_UDT.Design) {
			const mot = motor as Motor_DOL_UDT;
			return mot._Cmd._OnManual;
		}

		// if (motor.Type === Nord_ASI_SoftStarter_UDT.Design) {
		// 	const mot = motor as Nord_ASI_SoftStarter_UDT;
		// 	return mot._Cmd._OnManual;
		// }
		if (motor.Type === Nord_Drive_UDT.Design) {
			const mot = motor as Nord_Drive_UDT;
			return mot._Cmd._OnManual;
		}
		if (motor.Type === ConveyLinx_FullPLC_Single.Design) {
			const mot = motor as ConveyLinx_FullPLC_Single;
			return mot._Cmd._RunManual;
		}

		if (motor.Type === ConveyLinx_FullPLC_Single_Mini.Design) {
			const mot = motor as ConveyLinx_FullPLC_Single_Mini;
			return mot._Cmd._RunManual;
		}

		if (motor.Type === G115D_DRIVE_UDT.Design) {
			const mot = motor as G115D_DRIVE_UDT;
			return mot._Cmd._OnManual;
		}

		return null;
	}
}
