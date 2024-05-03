import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from './home/home.module';
import { AppRoutingModule } from './app.routes';
import { RouterModule } from '@angular/router';
import { NavbarModule } from './template/navbar.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AppRoutingModule,
    RouterModule,
    NavbarModule,
    FormsModule,
    HomeModule
  ]
})
export class AppModule { }
