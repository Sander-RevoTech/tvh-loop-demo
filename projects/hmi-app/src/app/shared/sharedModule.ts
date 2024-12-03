import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
	CoreModule,
	DynamicModule,
	LanguageInterceptor
} from '@revotechiscool/revo-tech-core-lib';
import { HmiModule } from '@revotechiscool/revo-tech-hmi-lib';

import {
	ConveyorSimpleComponent,
	MotorSimpleComponent,
	ConveyorDetailComponent,
	LoadingControlComponentComponent,
	TransferUnitSimpleComponent,
	SimpleZoneComponent,
	IpcComponent,
	IpcSimpleComponent,
	ConveyLinxMiniPLCSingleMotorComponent,
	CylinderSimpleComponent,
	CylinderDetailComponent,
	ConveyLinxFullPLCSingleMotorComponent,
	BarcodeScannerSimpleComponent,
	BarcodeScannerDetailComponent,
	ScaleSimpleComponent,
	ScaleDetailComponent,
	MachineInterfaceComponent,
	SiemensDriveDetailComponent,
	EasySystemsTransferUnitDetailComponent,
	MotorDolDetailComponent,
	NordDriveDetailComponent
} from './components';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
	declarations: [
		ConveyLinxMiniPLCSingleMotorComponent,

		ConveyorSimpleComponent,
		ConveyorDetailComponent,
		CylinderDetailComponent,
		CylinderSimpleComponent,
		MotorSimpleComponent,
		TransferUnitSimpleComponent,
		LoadingControlComponentComponent,
		SimpleZoneComponent,
		NordDriveDetailComponent,
		IpcComponent,
		IpcSimpleComponent,

		BarcodeScannerSimpleComponent,
		BarcodeScannerDetailComponent,

		ScaleSimpleComponent,
		ScaleDetailComponent,

		ConveyLinxFullPLCSingleMotorComponent,
		EasySystemsTransferUnitDetailComponent,
		SiemensDriveDetailComponent,
		MotorDolDetailComponent,

		MachineInterfaceComponent
	],
	imports: [
		BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
		BrowserAnimationsModule,
		RouterModule,
		HttpClientModule,
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		CoreModule,
		DynamicModule,
		HmiModule,
		TranslateModule
	],
	providers: [
		{ provide: HTTP_INTERCEPTORS, useClass: LanguageInterceptor, multi: true }
	],
	exports: [
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
		HttpClientModule,
		RouterModule,
		CoreModule,
		DynamicModule,
		HmiModule,
		TranslateModule,

		ConveyLinxMiniPLCSingleMotorComponent,

		CylinderDetailComponent,
		ConveyorSimpleComponent,
		CylinderSimpleComponent,
		TransferUnitSimpleComponent,
		ConveyorDetailComponent,
		MotorSimpleComponent,
		LoadingControlComponentComponent,
		SimpleZoneComponent,
		NordDriveDetailComponent,
		ConveyLinxFullPLCSingleMotorComponent,
		EasySystemsTransferUnitDetailComponent,
		SiemensDriveDetailComponent,
		MotorDolDetailComponent,

		IpcComponent,
		IpcSimpleComponent,

		BarcodeScannerSimpleComponent,
		BarcodeScannerDetailComponent,

		ScaleSimpleComponent,
		ScaleDetailComponent,

		MachineInterfaceComponent
	]
})
export class SharedModule {}
