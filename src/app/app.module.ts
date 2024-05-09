import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from './home/home.module';
import { AppRoutingModule } from './app.routes';
import { RouterModule } from '@angular/router';
import { NavbarModule } from './template/navbar.module';
import { FormsModule } from '@angular/forms';

import { LOCALE_ID, DEFAULT_CURRENCY_CODE } from '@angular/core';
import pt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';


registerLocaleData(pt);


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
  providers: [
    { provide: LOCALE_ID, useValue: 'pt' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' },
  ]
})

export class AppModule { }
