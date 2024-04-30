import { Component, OnInit } from '@angular/core';
import { Service } from '../model/service';
import { ServiceService } from './service.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ServicePipe } from './service.pipe';

@Component({
  selector: 'app-service',
  standalone: true,
  templateUrl: './service.component.html',
  styleUrl: './service.component.css',
  imports: [
    CommonModule, FormsModule, RouterModule, ServicePipe
  ]
})

export class ServiceComponent implements OnInit{
  searchValue: string = '';
  services: Service[] = [];
  filteredService: Service[] = [];

  constructor(private service: ServiceService){}

  ngOnInit(): void {
    this.service.findAll().subscribe(response => {
      this.services = response;
      this.filteredService = this.services;
    })
  }

  findByCategory(id: string) {
    this.service.findByCategory(id).subscribe(response => {
      console.log('teste');
      return this.filteredService = this.services;
    })
  }
}
