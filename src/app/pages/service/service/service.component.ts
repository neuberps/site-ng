import { Component, OnInit } from '@angular/core';
import { NgOptimizedImage, CommonModule } from '@angular/common';
import { Service } from '../model/service';
import { ServiceService } from '../service.service';


@Component({
  selector: 'app-service',
  standalone: true,
  templateUrl: './service.component.html',
  styleUrl: './service.component.css',
  imports:[NgOptimizedImage, CommonModule]
})
export class ServiceComponent implements OnInit{

  services: Service[] = [];

  constructor(private service: ServiceService){}


  ngOnInit(): void {
    this.service.findAll().subscribe(response => this.services = response)
  }


}
