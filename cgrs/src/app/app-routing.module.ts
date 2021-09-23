import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { Role } from './models/role';

import { CategoryTableComponent } from './pages/categories/category-table/category-table.component';
import { CreateCategoryComponent } from './pages/categories/create-category/create-category.component';
import { EditCategoryComponent } from './pages/categories/edit-category/edit-category.component';
import { AddGameComponent } from './pages/games/add-game/add-game.component';
import { EditGameComponent } from './pages/games/edit-game/edit-game.component';
import { GamesTableComponent } from './pages/games/games-table/games-table.component';
import { LoginComponent } from './pages/login/login.component';
import { UserRegistrationComponent } from './pages/user-registration/user-registration.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { RecommendedGamesComponent } from './pages/games/recommended-games/recommended-games.component';

const appRoutes: Routes = [
  {
    path: '',
    component: MainPageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'register',
    component: UserRegistrationComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'category/edit/:id',
    component: EditCategoryComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.Admin] }
  },
  {
    path: 'category/new',
    component: CreateCategoryComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.Admin] }
  },
  {
    path: 'category',
    component: CategoryTableComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.Admin] }
  },
  {
    path: 'game/edit/:id',
    component: EditGameComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.Admin] }
  },
  {
    path: 'recommended',
    component: RecommendedGamesComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'game/new',
    component: AddGameComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.Admin] }
  },
  {
    path: 'game',
    component: GamesTableComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.Admin] }
  },
  {
    path: '**', redirectTo: '', pathMatch: 'full'}
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
