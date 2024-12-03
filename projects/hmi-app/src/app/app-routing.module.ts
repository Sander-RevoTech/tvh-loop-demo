import { Routes, RouterModule, Route } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './pages';
import { marker as $ } from '@biesbjerg/ngx-translate-extract-marker';

export const routes: Routes = [
	{ path: '', redirectTo: '/login', pathMatch: 'full' },
	{
		path: 'home',
		data: { title: $('Home') },
		component: HomeComponent
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes, { useHash: true })],
	exports: [RouterModule]
})
export class AppRoutingModule {}
