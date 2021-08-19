import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { ICategory } from '../../../models/category';
import { CategoriesService } from '../../../services/categories.service';
import { GamesService } from '../../../services/games.service';

@Component({
  selector: 'app-edit-game',
  templateUrl: './edit-game.component.html',
  styleUrls: ['./edit-game.component.scss']
})
export class EditGameComponent implements OnInit {
  sub!: Subscription;
  form = new FormGroup({});
  categories: ICategory[] = [];
  model = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'name',
      type: 'input',
      templateOptions: {
        label: 'Game name',
        placeholder: 'Enter game name',
        required: true,
      }
    },
    {
      key: 'description',
      type: 'input',
      templateOptions: {
        label: 'Game description',
        placeholder: 'Enter game description',
        required: true,
      }
    },
    {
      key: 'categoryId',
      type: 'select',
      templateOptions: {
        label: 'Game category',
        options: this.categoriesService.getAllCategories().pipe(map(categories => {return categories})),
        valueProp: 'id',
        labelProp: 'name',
        required: true,
      }
    },
    {
      key: 'isAdultOnly',
      defaultValue: false,
      type: 'checkbox',
      templateOptions: {
        label: 'Is for adults',
      }
    }
  ];

  constructor(   
    private router: Router,
    private route: ActivatedRoute,
    private gamesService: GamesService,
    private categoriesService: CategoriesService
    ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(typeof(id));

    if(id)
    {
      this.sub = this.gamesService.getGameById(id).subscribe({
        next: game => {
          this.model = game;
        }
      });
    }
  }

  onSubmit(): void {
    console.log(this.model);

    this.gamesService.updateGame(this.model)
      .pipe()
      .subscribe({
        next: () => {
          this.router.navigate(['game'])
        },
        error: err => {
          console.log(err.error);
        }
      });
  }
}
