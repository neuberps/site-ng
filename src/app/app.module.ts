import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app.routes';

import { RouterModule } from '@angular/router';
import { NavbarModule } from './template/navbar.module';
<<<<<<< Updated upstream

=======
import { PagesModule } from './pages/pages.module';
import { FormsModule } from '@angular/forms';
>>>>>>> Stashed changes

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    RouterModule,
<<<<<<< Updated upstream
    NavbarModule

=======
    NavbarModule,
    PagesModule,
    FormsModule
>>>>>>> Stashed changes
  ]
})
export class AppModule { }
