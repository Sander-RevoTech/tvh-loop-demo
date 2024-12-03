import { NgModule } from '@angular/core';
import { marker as $ } from '@biesbjerg/ngx-translate-extract-marker';

import {
	PlcInterfaceInfoDbComponent,
	AlarmWrapperComponent,
	MotorListComponent,
	SensorListComponent,
	StartupComponent,
	HmiWrapperComponent
} from './components';

import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth';

export const routes: Routes = [
	{
		path: 'loading',
		data: { title: $('Startup') },
		component: StartupComponent
	},
	{
		path: 'alarms-active',
		data: { title: $('ACTIVE ALARMS') },
		component: AlarmWrapperComponent
	},
	{
		path: 'motor-list',
		data: { title: $('MOTOR LIST') },
		component: MotorListComponent
	},
	{
		path: 'sensor-list',
		data: { title: $('SENSOR LIST') },
		component: SensorListComponent
	},
	{
		path: 'settings',
		data: { title: $('Settings HMI') },
		component: HmiWrapperComponent,
		children: [
			{
				path: 'plcdbinfo',
				data: { title: $('PLC DB info') },
				component: PlcInterfaceInfoDbComponent
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class HmiRouterModule {}
