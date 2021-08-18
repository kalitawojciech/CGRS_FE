import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { CategoriesService } from '../../../services/categories.service';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.scss']
})
export class CreateCategoryComponent implements OnInit {
  form = new FormGroup({});
  model = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'name',
      type: 'input',
      templateOptions: {
        label: 'Category name',
        placeholder: 'Enter category name',
        required: true,
      }
    },
    {
      key: 'description',
      type: 'input',
      templateOptions: {
        label: 'Category description',
        placeholder: 'Enter category description',
        required: true,
      }
    }
  ];

  constructor(   
    private router: Router,
    private formBuilder: FormBuilder,
    private categoriesService: CategoriesService
    ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.model);

    this.categoriesService.addCategory(this.model)
      .pipe()
      .subscribe({
        next: () => {
          this.router.navigate(['category'])
        },
        error: err => {
          console.log(err.error);
        }
      });
  }
}