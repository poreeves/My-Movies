import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavComponent } from './nav/nav.component';
import { RegistrationComponent } from './registration/registration.component';
import { CategoriesComponent } from './categories/categories.component';
import { InTheatersComponent } from './in-theaters/in-theaters.component';
import { SearchComponent } from './search/search.component';
import { DisplayComponent } from './display/display.component';
import { FavoritesComponent } from './favorites/favorites.component';

export const router: Routes = [
    { path: '', redirectTo: 'inTheaters', pathMatch: 'full' },
    { path: 'inTheaters', component: InTheatersComponent },
    { path: 'registration', component: RegistrationComponent },
    { path: 'categories', component: CategoriesComponent},
    { path: 'search', component: SearchComponent},
    { path: 'display', component: DisplayComponent},
    { path: 'favorites', component: FavoritesComponent}
];
export const routes: ModuleWithProviders = RouterModule.forRoot(router);