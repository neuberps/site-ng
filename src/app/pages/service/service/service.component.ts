import { Component, OnInit } from '@angular/core';
import { NgOptimizedImage, CommonModule } from '@angular/common';
import { Service } from '../model/service';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-service',
  standalone: true,
  templateUrl: './service.component.html',
  styleUrl: './service.component.css',
  imports:[NgOptimizedImage, CommonModule]
})
export class ServiceComponent implements OnInit{


  services: Service[] = [];

  constructor(
    private service: ServiceService,
    private router: Router
  ){}


  ngOnInit(): void {
    this.service.findAll().subscribe(response => this.services = response)
  }

  viewService(){
    this.router.navigate(['/service-services'])
  }

}
