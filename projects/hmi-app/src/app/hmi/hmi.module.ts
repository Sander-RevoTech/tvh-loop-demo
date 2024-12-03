import { NgModule } from '@angular/core';

import { CoreModule } from '@revotechiscool/revo-tech-core-lib';
import { HmiModule } from '@revotechiscool/revo-tech-hmi-lib';

import { HmiRouterModule } from './hmi.router.module';

import {
	PlcInterfaceInfoDbComponent,
	HmiWrapperComponent,
	StartupComponent,
	AlarmWrapperComponent,
	MotorListComponent,
	SensorListComponent
} from './components';
import { SharedModule } from '../shared/sharedModule';
import { Clipboard, ClipboardModule } from '@angular/cdk/clipboard';

@NgModule({
	declarations: [
		HmiWrapperComponent,
		PlcInterfaceInfoDbComponent,
		StartupComponent,
		AlarmWrapperComponent,
		MotorListComponent,
		SensorListComponent
	],
	imports: [
		HmiRouterModule,
		SharedModule,
		CoreModule,
		HmiModule,
		ClipboardModule
	]
})
export class HmiAppModule {}
