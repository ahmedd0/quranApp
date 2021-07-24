import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss'],
})
export class FavouritesComponent implements OnInit {
  favReciter: any;
  favItemIndexs: any;
  constructor() {
    if (localStorage.getItem('favReciter') !== null) {
      this.favReciter = localStorage.getItem('favReciter');
      this.favReciter = JSON.parse(this.favReciter);
    } else {
      this.favReciter = [];
    }
  }

  ngOnInit(): void {}
  removeFromFav(index: any, reciter: any) {
    this.favReciter.splice(index, 1);
    localStorage.setItem('favReciter', JSON.stringify(this.favReciter));
  }
}
