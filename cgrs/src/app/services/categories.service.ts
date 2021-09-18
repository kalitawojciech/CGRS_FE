import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { ICategory } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: HttpClient) { }

  getAllCategories(): Observable<ICategory[]> {
    return this.http.get<ICategory[]>(environment.apiUrl + 'categories');
  }

  getCategoryById(id: string): Observable<ICategory> {
    return this.http.get<ICategory>(environment.apiUrl + 'categories/' + id);
  }

  addCategory(catgory: any) {
    return this.http.post(environment.apiUrl + 'categories', catgory);
  }

  updateCategory(catgory: any) {
    return this.http.put(environment.apiUrl + 'categories', catgory);
  }

  deleteCategory(id: string) {
    return this.http.delete(environment.apiUrl + 'categories/' + id);
  }

  changeCategoryStatus(id: string) {
    return this.http.put(environment.apiUrl + 'categories/change-status/' + id, { });
  }
}
