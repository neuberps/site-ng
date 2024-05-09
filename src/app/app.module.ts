import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { LOCALE_ID, DEFAULT_CURRENCY_CODE } from '@angular/core';
import pt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';


registerLocaleData(pt);

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
  providers: [
    { provide: LOCALE_ID, useValue: 'pt' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' },
  ]
})

export class AppModule {}
