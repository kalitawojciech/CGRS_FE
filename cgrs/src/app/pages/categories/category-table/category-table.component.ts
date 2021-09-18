import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
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
  displayedColumns: string[] = ['name', 'description', 'edit', 'status', 'delete'];

  categories: ICategory[] = [];
  dataSource: MatTableDataSource<ICategory>;
  isLoadingResults: boolean = true;
  resultsCount: number;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private categoriesService: CategoriesService) { 
      this.getCategories();
    }

  ngOnInit(): void {

  }

  getCategories(): void {
    this.sub = this.categoriesService.getAllCategories().subscribe({
      next: categories => {
        this.categories = categories;
        this.dataSource = new MatTableDataSource<ICategory>(this.categories);
        this.isLoadingResults = false;
        this.resultsCount = categories.length;
        this.dataSource.paginator = this.paginator;
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

  changeCategoryStatus(id: string): void {
    this.sub = this.categoriesService.changeCategoryStatus(id).subscribe({
      next: () => {
        this.getCategories();
      }
    })
  }
}