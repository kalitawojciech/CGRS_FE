import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { Subscription } from 'rxjs';
import { CategoriesService } from '../../../services/categories.service';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.scss']
})
export class EditCategoryComponent implements OnInit {
  sub!: Subscription;
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
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private categoriesService: CategoriesService,
    ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(typeof(id));

    if(id)
    {
      this.sub = this.categoriesService.getCategoryById(id).subscribe({
        next: category => {
          this.model = category;
        }
      });
    }
  }

  onSubmit(): void {
    console.log(this.model);

    this.sub = this.categoriesService.updateCategory(this.model)
      .pipe()
      .subscribe({
        next: () => {
          
        },
        error: err => {
          console.log(err.error);
        }
      });
  }
}
