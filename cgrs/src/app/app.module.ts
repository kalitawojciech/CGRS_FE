import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { FormlyMatDatepickerModule } from '@ngx-formly/material/datepicker';

import { AppComponent } from './app.component';
import { GamesTableComponent } from './pages/games/games-table/games-table.component';
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
import { AddGameComponent } from './pages/games/add-game/add-game.component';
import { EditGameComponent } from './pages/games/edit-game/edit-game.component';
import { JwtInterceptor } from './helpers/jwt.interceptor';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ErrorInterceptor } from './helpers/error.interceptor';
import { AddGameMarkComponent } from './pages/main-page/add-game-mark/add-game-mark.component';
import { EditGameMarkComponent } from './pages/main-page/edit-game-mark/edit-game-mark.component';
import { GameMarkService } from './services/game-mark.service';
import { GameCommentService } from './services/game-comment.service';
import { RecommendedGamesComponent } from './pages/games/recommended-games/recommended-games.component';
import { GameDetailsComponent } from './pages/games/game-details/game-details.component';
import { AddCommentComponent } from './pages/games/game-details/add-comment/add-comment.component';
import { EditCommentComponent } from './pages/games/game-details/edit-comment/edit-comment.component';

@NgModule({
  declarations: [
    AppComponent,
    GamesTableComponent,
    UserRegistrationComponent,
    LoginComponent,
    CreateCategoryComponent,
    EditCategoryComponent,
    CategoryTableComponent,
    AddGameComponent,
    EditGameComponent,
    NavbarComponent,
    MainPageComponent,
    AddGameMarkComponent,
    EditGameMarkComponent,
    RecommendedGamesComponent,
    GameDetailsComponent,
    AddCommentComponent,
    EditCommentComponent,
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
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    CategoriesService,
    GamesService,
    UsersService,
    GameMarkService,
    GameCommentService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
