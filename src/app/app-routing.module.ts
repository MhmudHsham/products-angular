import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsComponent } from './features/products/products.component';
import { LoginComponent } from './features/login/login.component';
import { RegisterComponent } from './features/register/register.component';
import { ProductDetailsComponent } from './features/product-details/product-details.component';
import { AddProductComponent } from './features/add-product/add-product.component';

const routes: Routes = [
	{path: 'home', component: ProductsComponent},
	{path: 'login', component: LoginComponent},
	{path: 'register', component: RegisterComponent},
	{path: 'products/details', component: ProductDetailsComponent},
	{path: 'products/add', component: AddProductComponent},
	{path: '', redirectTo: 'home', pathMatch: 'full'},
	{path: '**', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
