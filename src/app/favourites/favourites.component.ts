import { Component, OnInit } from '@angular/core';
import { FavoriteReciterService } from './../favorite-reciter.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss'],
})
export class FavouritesComponent implements OnInit {
  constructor(
    public _FavoriteReciterService: FavoriteReciterService,
    public _NgxSpinnerService: NgxSpinnerService
  ) {
    this._NgxSpinnerService.show();
  }

  ngOnInit(): void {
    setTimeout(() => {
      this._NgxSpinnerService.hide();
    }, 600);
  }
}
