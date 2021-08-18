import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CategoryTableComponent } from './pages/categories/category-table/category-table.component';
import { CreateCategoryComponent } from './pages/categories/create-category/create-category.component';
import { EditCategoryComponent } from './pages/categories/edit-category/edit-category.component';
import { LoginComponent } from './pages/login/login.component';
import { UserRegistrationComponent } from './pages/user-registration/user-registration.component';

const appRoutes: Routes = [
  { path: '', component: UserRegistrationComponent },
  { path: 'register', component: UserRegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'category/edit/:id', component: EditCategoryComponent },
  { path: 'category/new', component: CreateCategoryComponent },
  { path: 'category', component: CategoryTableComponent },
  { path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
