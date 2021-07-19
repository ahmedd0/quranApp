import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { A7adesComponent } from './a7ades/a7ades.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { ElsourComponent } from './elsour/elsour.component';
import { A7adethItemComponent } from './a7adeth-item/a7adeth-item.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'home/:id', component: ElsourComponent },

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'a7adeth', component: A7adesComponent },
  { path: 'a7adeth/:id', component: A7adethItemComponent },

  { path: 'favourites', component: FavouritesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
