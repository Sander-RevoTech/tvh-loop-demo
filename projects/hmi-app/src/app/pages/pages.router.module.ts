import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { marker as $ } from '@biesbjerg/ngx-translate-extract-marker';

import {
	InstallationControlComponent,
	ServersDetailComponent,
	GlobalSettingsComponent,
	PlaygroundComponent,
	MaintenanceComponent,
	Zone100Component,
} from './components';
import {
	ConveyorDetailComponent,
	IpcComponent,
	ConveyLinxMiniPLCSingleMotorComponent,
	CylinderDetailComponent,
	ConveyLinxFullPLCSingleMotorComponent,
	BarcodeScannerDetailComponent,
	ScaleDetailComponent,
	SiemensDriveDetailComponent,
	MotorDolDetailComponent,
	EasySystemsTransferUnitDetailComponent,
	NordDriveDetailComponent
} from '../shared';
import { controlPages, pages } from './route-names';

export const routes: Routes = [
	{
		path: 'installation-control',
		data: { title: $('Control') },
		component: InstallationControlComponent
	},
	{
		path: 'global-settings',
		data: { title: $('Settings') },
		component: GlobalSettingsComponent
	},
	{
		path: 'servers-detail',
		data: { title: $('Equipment status') },
		component: ServersDetailComponent
	},
	{
		path: 'maintenance',
		data: { title: $('Maintenance') },
		component: MaintenanceComponent
	},
	{
		path: pages.zone100.name,
		data: { title: pages.zone100.title },
		component: Zone100Component
	},
	{
		path: 'playground',
		data: { title: $('PLAYGROUND') },
		component: PlaygroundComponent
	},
	{
		path: 'conveylinx-mini-plc-motor-control',
		data: { title: $('Convyelinx mini control') },
		component: ConveyLinxMiniPLCSingleMotorComponent
	},
	{
		path: 'conveylinx-full-plc-motor-control',
		data: { title: $('Convyelinx mini control') },
		component: ConveyLinxFullPLCSingleMotorComponent
	},

	{
		path: 'conveyor',
		data: { title: $('Conveyor control') },
		component: ConveyorDetailComponent
	},

	{
		path: 'ipc-detail',
		data: { title: $('SORTING DETAIL') },
		component: IpcComponent
	},

	{
		path: 'cylinder-detail',
		data: { title: $('CYLINER DETAIL') },
		component: CylinderDetailComponent
	},
	{
		path: controlPages.barcodeScannerDetail,
		data: { title: $('SCANNER') },
		component: BarcodeScannerDetailComponent
	},
	{
		path: controlPages.scaleDetail,
		data: { title: $('SCALE DETAIL') },
		component: ScaleDetailComponent
	},
	{
		path: controlPages.siemensDrive,
		data: { title: $('DRIVE DETAIL') },
		component: SiemensDriveDetailComponent
	},
	{
		path: controlPages.upDownControl,
		data: { title: $('DRIVE DETAIL') },
		component: EasySystemsTransferUnitDetailComponent
	},
	{
		path: controlPages.dolControl,
		data: { title: $('DRIVE DETAIL') },
		component: MotorDolDetailComponent
	},
	{
		path: controlPages.nordControl,
		data: { title: $('NORD DETAIL') },
		component: NordDriveDetailComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class PagesRouterModule { }
