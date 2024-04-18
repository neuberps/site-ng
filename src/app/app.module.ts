import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductModule } from './product/product.module';
import { ServiceModule } from './service/service.module';
import { HomeModule } from './home/home.module';
import { LoginModule } from './login/login.module';
import { AppRoutingModule } from './app.routes';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AppRoutingModule,
    HomeModule,
    LoginModule,
    ServiceModule,
    ProductModule
  ]
})
export class AppModule { }
