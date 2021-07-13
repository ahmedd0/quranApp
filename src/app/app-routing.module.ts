import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { A7adesComponent } from './a7ades/a7ades.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { ElsourComponent } from './elsour/elsour.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'home/:id', component: ElsourComponent },

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'a7adeth', component: A7adesComponent },
  { path: 'favourites', component: FavouritesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule],
})
export class AppRoutingModule {}
