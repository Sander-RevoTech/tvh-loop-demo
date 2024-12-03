import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { controlPages } from '@hmi-src/app/pages/route-names';

import {
	Motor_DOL_UDT,
	ConveyLinx_FullPLC_Single,
	EasySystems_LineairMotor_ConveyLinx_FullPLC_Single,
	ConveyLinxController_FullPLC_Mini,
	ConveyLinx_FullPLC_Single_Mini,
	Nord_DriveController,
	FLOWSORT_TWISTER_UDT,
	G115D_DRIVE_UDT,
	Nord_Drive_UDT
} from 'plc/PLC_Main';

import { IMotor } from '../classes';
import { NordDriveDetailComponent } from '@hmi-src/app/shared';

@Injectable({
	providedIn: 'root'
})
export class MotorControlNavigatorService {
	constructor(private router: Router) {}

	navigate(motor: IMotor) {
		if (motor.Type === Motor_DOL_UDT.Design) {
			this.router.navigate([controlPages.dolControl], {
				state: motor,
				queryParams: { id: motor.Id },
				replaceUrl: false
			});
		}

		// if (motor.Type === Nord_ASI_SoftStarter_UDT.Design) {
		// 	this.router.navigate(['nord-asi-softstarter-motor-control'], {
		// 		state: motor,
		// 		queryParams: { id: motor.Id },
		// 		replaceUrl: false
		// 	});
		// }

		// if (motor.Type === Nord_ASI_Drive_UDT.Design) {
		// 	this.router.navigate(['nord-asi-drive-motor-control'], {
		// 		state: motor,
		// 		queryParams: { id: motor.Id },
		// 		replaceUrl: false
		// 	});
		// }

		if (motor.Type === ConveyLinx_FullPLC_Single.Design) {
			this.router.navigate(['conveylinx-full-plc-motor-control'], {
				state: motor,
				queryParams: { id: motor.Id },
				replaceUrl: false
			});
		}

		if (motor.Type === ConveyLinx_FullPLC_Single_Mini.Design) {
			this.router.navigate(['conveylinx-mini-plc-motor-control'], {
				state: motor,
				queryParams: { id: motor.Id },
				replaceUrl: false
			});
		}

		if (motor.Type === Nord_Drive_UDT.Design) {
			console.log('testing button');
			this.router.navigate([controlPages.nordControl], {
				state: motor,
				queryParams: { id: motor.Id },
				replaceUrl: false
			});
		}

		if (
			motor.Type === EasySystems_LineairMotor_ConveyLinx_FullPLC_Single.Design
		) {
			this.router.navigate([controlPages.upDownControl], {
				state: motor,
				queryParams: { id: motor.Id },
				replaceUrl: false
			});
		}

		if (motor.Type === G115D_DRIVE_UDT.Design) {
			this.router.navigate([controlPages.siemensDrive], {
				state: motor,
				queryParams: { id: motor.Id },
				replaceUrl: false
			});
		}

		if (motor.Type === FLOWSORT_TWISTER_UDT.Design) {
			this.router.navigate(['flow-sort-detail'], {
				state: motor,
				queryParams: { id: motor.Id },
				replaceUrl: false
			});
		}
	}
}
