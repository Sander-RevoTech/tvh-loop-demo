import { NgModule } from '@angular/core';

import {
	CoreModule,
	GridDirective,
	PosAbsXyDirective
} from '@revotechiscool/revo-tech-core-lib';
import { HmiModule } from '@revotechiscool/revo-tech-hmi-lib';

import { SharedModule } from '../shared/sharedModule';

import {
	InstallationControlComponent,
	InstallationControlButtonsComponent,
	InstallationControlStateComponent,
	ServersDetailComponent,
	GlobalSettingsComponent,
	PlaygroundComponent,
	MaintenanceComponent,
	HomeComponent,
} from './components';

import { PagesRouterModule } from './pages.router.module';
import { Zone100Component } from './components/zone-100';

@NgModule({
	declarations: [
		HomeComponent,
		InstallationControlComponent,
		InstallationControlButtonsComponent,
		InstallationControlStateComponent,
		GlobalSettingsComponent,
		PlaygroundComponent,
		MaintenanceComponent,
		ServersDetailComponent,

		//Custom pages
		Zone100Component,

	],
	imports: [SharedModule, CoreModule, HmiModule, PagesRouterModule]
})
export class PagesModule { }
