import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { FormlyMatDatepickerModule } from '@ngx-formly/material/datepicker';

import { AppComponent } from './app.component';
import { GamesTableComponent } from './pages/games-table/games-table.component';
import { CategoriesService } from './services/categories.service';
import { GamesService } from './services/games.service';
import { UserRegistrationComponent } from './pages/user-registration/user-registration.component';
import { UsersService } from './services/users.service';
import { AngularMaterialModule } from './angular-material.module';
import { LoginComponent } from './pages/login/login.component';
import { CreateCategoryComponent } from './pages/categories/create-category/create-category.component';
import { EditCategoryComponent } from './pages/categories/edit-category/edit-category.component';
import { CategoryTableComponent } from './pages/categories/category-table/category-table.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    GamesTableComponent,
    UserRegistrationComponent,
    LoginComponent,
    CreateCategoryComponent,
    EditCategoryComponent,
    CategoryTableComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    FormlyModule.forRoot({ extras: { lazyRender: true } }),
    FormlyMaterialModule,
    FormlyMatDatepickerModule,
    AppRoutingModule,
  ],
  providers: [
    CategoriesService,
    GamesService,
    UsersService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
