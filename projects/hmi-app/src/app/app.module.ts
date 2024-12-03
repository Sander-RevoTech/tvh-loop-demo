import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { HmiModule } from '@revotechiscool/revo-tech-hmi-lib';
import {
	HttpEffects,
	CoreModule,
	ModalComponent
} from '@revotechiscool/revo-tech-core-lib';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from '@hmi-app/shared';
import { PlcDbEffects, HmiAppModule } from '@hmi-app/hmi';
import { PagesModule } from '@hmi-app/pages';
import { reducers } from '@hmi-app/store';
import { AuthModule } from '@hmi-app/auth/auth.module';

import { AppComponent } from './app.component';
import { FooterComponent, HeaderComponent } from '@hmi-app/global';
import { AuthEffects } from './auth/store';
import { DynamicModule, routes } from '@revotechiscool/revo-tech-core-lib';
import { RouterModule } from '@angular/router';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

export function HttpLoaderFactory(httpClient: HttpClient) {
	return new TranslateHttpLoader(httpClient);
}

@NgModule({
	declarations: [AppComponent, HeaderComponent, FooterComponent],
	imports: [
		BrowserModule,
		CommonModule,
		TranslateModule.forRoot({
			loader: {
				provide: TranslateLoader,
				useFactory: HttpLoaderFactory,
				deps: [HttpClient]
			}
		}),
		AppRoutingModule,
		CoreModule,
		HmiModule,
		SharedModule,
		HmiAppModule,
		PagesModule,
		RouterModule.forChild(routes),
		AuthModule,
		DynamicModule,
		StoreModule.forRoot(reducers, {
			runtimeChecks: {
				strictStateImmutability: false,
				strictActionImmutability: false,
				strictActionSerializability: false,
				strictActionWithinNgZone: false,
				strictStateSerializability: false
			}
		}),
		EffectsModule.forRoot([HttpEffects, PlcDbEffects, AuthEffects])
	],
	entryComponents: [ModalComponent],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
