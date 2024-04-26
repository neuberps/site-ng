import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app.routes';

import { RouterModule } from '@angular/router';
import { NavbarModule } from './template/navbar.module';
import { PagesModule } from './pages/pages.module';
import { FormsModule } from '@angular/forms';
import { ProductComponent } from './pages/product/product.component';


@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    RouterModule,
    NavbarModule,
    PagesModule,
    FormsModule
  ]
})
export class AppModule { }
