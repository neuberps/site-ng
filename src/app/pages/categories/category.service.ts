import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Category } from "./category";

@Injectable({
  providedIn: 'root'
})

export class CategoryService {
  private http = inject(HttpClient);

  create(category: Category) {
    return this.http.post<Category>('http://localhost:9001/api/category/create', category);
  }

  listAll() {
    return this.http.get<Category[]>('http://localhost:9001/api/category/findAll');
  }

  listServices() {
    return this.http.get<Category[]>('http://localhost:9001/api/category/findByTypeService');
  }

  listProducts() {
    return this.http.get<Category[]>('http://localhost:9001/api/category/findByTypeProduct');
  }

  getById(id: string) {
    return this.http.get<Category>(`http://localhost:9001/api/category/search/${id}`);
  }

  update(id: string, category: Category) {
    return this.http.put<Category>(`http://localhost:9001/api/category/update/${id}`, category);
  }

  delete(id: string) {
    return this.http.delete<void>(`http://localhost:9001/api/category/delete/${id}`);
  }
}
