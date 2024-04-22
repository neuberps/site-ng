import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app.routes';

import { RouterModule } from '@angular/router';
import { NavbarModule } from './template/navbar.module';


@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    RouterModule,
    NavbarModule

  ]
})
export class AppModule { }
