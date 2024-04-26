import { Component, OnInit } from '@angular/core';
import { NgOptimizedImage, CommonModule } from '@angular/common';
import { Service } from '../model/service';
import { ServiceService } from '../service.service';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { ServiceDetailsComponent } from './service-details/service-details.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ServicePipe } from '../service.pipe';

@Component({
  selector: 'app-service',
  standalone: true,
  templateUrl: './service.component.html',
  styleUrl: './service.component.css',
  imports:[
    CommonModule,
    RouterLink,
    ServiceDetailsComponent,
    RouterModule,
    FormsModule,
    ServicePipe
  ]
})
export class ServiceComponent implements OnInit{

  searchValue: any;
  services: Service[] = [];

  constructor(
    private service: ServiceService,
    private router: Router
  ){}


  ngOnInit(): void {
    this.service.findAll().subscribe(response => this.services = response)
  }

}
