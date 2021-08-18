import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ICategory } from '../../../models/category';
import { CategoriesService } from '../../../services/categories.service';

@Component({
  selector: 'app-category-table',
  templateUrl: './category-table.component.html',
  styleUrls: ['./category-table.component.scss']
})
export class CategoryTableComponent implements OnInit {
  sub!: Subscription;

  categories: ICategory[] = [];

  constructor(
    private categoriesService: CategoriesService) { }

  ngOnInit(): void {
    this.sub = this.categoriesService.getAllCategories().subscribe({
      next: categories => {
        this.categories = categories;
      },
      error: err => {
      }
    })
  }

  deleteCategory(id: string): void {
    console.log(id);
    this.sub = this.categoriesService.deleteCategory(id).subscribe({
      next: () => {
      },
      error: err => {
      }
    })
  }
}