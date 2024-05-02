import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { RouterLink, RouterModule } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServicePipe } from './service/service/service.pipe';

@NgModule({
  declarations: [
    HomeComponent

  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    RouterModule,
    FormsModule,
    ServicePipe,
    RouterLink,
    ReactiveFormsModule
  ]
})

export class PagesModule { }
