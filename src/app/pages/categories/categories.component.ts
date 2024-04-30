import { Component, inject } from '@angular/core';
import { Category } from './category';
import { CategoryService } from './category.service';
import { CommonModule } from '@angular/common';
import { SearchFilterPipe } from './search-filter.pipe';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule, RouterLink} from '@angular/router';
import { ServiceService } from '../service/service/service.service';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule, SearchFilterPipe, FormsModule, RouterLink],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {
  private categoryService = inject(CategoryService);
  private serviceService = inject(ServiceService);

  searchValue: string = '';
  searchBy: string = '';

  constructor(private router: Router) {}

  ngOnInit():void {
    this.loadAll();
  }

  categories: Category[] = [];

  loadAll() {
    this.categoryService.listAll()
    .subscribe(categories => {
      this.categories = categories;
    });
  }



  goHome() {
    this.router.navigate(['/home']);
  }

  goItem(category: Category) {
    if(category.type === 1) {
      this.router.navigate(['/service', { id: category.id }]);
      // serviceService.findByCategory(category.id)
    } else {
      this.router.navigate(['/product']);
    }
  }
}
