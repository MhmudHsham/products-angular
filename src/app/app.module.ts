import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { TopHeaderComponent } from './core/header/top-header/top-header.component';
import { MiddleHeaderComponent } from './core/header/middle-header/middle-header.component';
import { EndHeaderComponent } from './core/header/end-header/end-header.component';
import { LoginComponent } from './features/login/login.component'; 
import { ProductsComponent } from './features/products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopHeaderComponent,
    MiddleHeaderComponent,
    EndHeaderComponent,
    LoginComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
