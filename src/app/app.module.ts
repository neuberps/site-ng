import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app.routes';
import { HomeModule } from './home/home.module';
import { NavbarModule } from './template/navbar.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AppRoutingModule,
    RouterModule,
    NavbarModule,
    FormsModule,
    HomeModule,
  ],
})
export class AppModule {}
