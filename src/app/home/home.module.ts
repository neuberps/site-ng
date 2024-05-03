import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HomeComponent
  ],
  exports: [HomeComponent],
})
export class HomeModule { }

