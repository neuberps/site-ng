import { Component, inject } from '@angular/core';
import { Category } from './category';
import { CategoryService } from './category.service';
import { CommonModule } from '@angular/common';
import { SearchFilterPipe } from './search-filter.pipe';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule, RouterLink} from '@angular/router';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule, SearchFilterPipe, FormsModule, RouterLink],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {
  private categoryService = inject(CategoryService);

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

}
