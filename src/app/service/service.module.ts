import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceRoutingModule } from './service-routing.module';
import { ServiceComponent } from './service/service.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ServiceRoutingModule,
    ServiceComponent
  ],
  exports:[
    ServiceComponent
  ]
})
export class ServiceModule { }
