import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { ServiceComponent } from './service/service.component';
import { ProductComponent } from './product/product.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    HomeComponent,
    ServiceComponent,
    LoginComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    RouterModule,
  ],
  providers:[
    HttpClientModule
  ]
})
export class PagesModule { }
