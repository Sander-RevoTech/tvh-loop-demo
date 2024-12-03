import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { marker as $ } from '@biesbjerg/ngx-translate-extract-marker';

import { AuthenticateComponent } from './components/authenticate';

const routes: Routes = [
	{
		path: 'login',
		component: AuthenticateComponent,
		data: { title: $('Authenticate') }
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class AuthRouterModule {}
