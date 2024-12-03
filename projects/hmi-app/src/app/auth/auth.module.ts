import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticateComponent } from './components/authenticate/authenticate.component';
import { AuthRouterModule } from './auth.router.module';
import { SharedModule } from '@hmi-app/shared';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor, AuthGuard } from './services';

@NgModule({
	imports: [CommonModule, AuthRouterModule, SharedModule],
	declarations: [AuthenticateComponent],
	providers: [
		AuthGuard,
		{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
	],
	exports: []
})
export class AuthModule {}
