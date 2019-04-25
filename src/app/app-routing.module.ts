import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsComponent } from './features/products/products.component';
import { LoginComponent } from './features/login/login.component';

const routes: Routes = [
	{path: 'home', component: ProductsComponent},
	{path: '', redirectTo: 'home', pathMatch: 'full'},
	{path: '**', redirectTo: 'home', pathMatch: 'full'},
	{path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
