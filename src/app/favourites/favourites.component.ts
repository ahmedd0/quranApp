import { Component, OnInit } from '@angular/core';
import { FavoriteReciterService } from './../favorite-reciter.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss'],
})
export class FavouritesComponent implements OnInit {
  constructor(public _FavoriteReciterService: FavoriteReciterService) {}

  ngOnInit(): void {}
}
