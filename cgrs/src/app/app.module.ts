import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { GamesTableComponent } from './games-table/games-table.component';
import { CategoriesService } from './services/categories.service';
import { GamesService } from './services/games.service';
import { UserRegistrationComponent } from './user-registration/user-registration/user-registration.component';

@NgModule({
  declarations: [
    AppComponent,
    GamesTableComponent,
    UserRegistrationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    CategoriesService,
    GamesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
