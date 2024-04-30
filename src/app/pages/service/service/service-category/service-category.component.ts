import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink, RouterModule } from '@angular/router';
import { Service } from '../../model/service';
import { ServiceService } from '../service.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-service-category',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, RouterLink, HttpClientModule],
  templateUrl: './service-category.component.html',
  styleUrl: './service-category.component.css'
})
export class ServiceCategoryComponent implements OnInit{
  // serviceList: Service[] = [];
  services: Service = new Service;
  idCategory: string = '';

  constructor(
    public service: ServiceService,
    public route: ActivatedRoute) {}

    ngOnInit(): void {

      const getCategory = this.route.snapshot.paramMap.get('idCategory')

      if(getCategory){
        this.service.findByIdCategory(getCategory).subscribe(response => this.services = response);
      }
    }

}
