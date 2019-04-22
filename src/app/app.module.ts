import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MovieAppService } from './movie-app.service'
import { HttpClientModule } from '@angular/common/http';
import { NavComponent } from './nav/nav.component';


import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CategoriesComponent } from './categories/categories.component';
import { InTheatersComponent } from './in-theaters/in-theaters.component';
import { RegistrationComponent } from './registration/registration.component';

import { routes } from './app.router';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CategoriesComponent,
    InTheatersComponent,
    RegistrationComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    ClarityModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    routes
  ],
  providers: [
    MovieAppService,
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
