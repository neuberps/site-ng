import { Component, OnInit } from '@angular/core';
import { Service } from '../model/service';
import { ServiceService } from './service.service';

@Component({
  selector: 'app-service',
  standalone: true,
  templateUrl: './service.component.html',
  styleUrl: './service.component.css',
})

export class ServiceComponent implements OnInit{
  searchValue: string = '';
  services: Service[] = [];
  filteredService: Service[] = []

  constructor(private service: ServiceService){}

  ngOnInit(): void {
    this.service.findAll().subscribe(response => {
      this.services = response;
      this.filteredService = this.services;
    })
  }
}
