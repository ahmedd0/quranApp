import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FavoriteReciterService {
  favReciter: any;
  favReciterIndex: any;
  quraa: any;
  constructor() {
    if (localStorage.getItem('favReciter') !== null) {
      this.favReciter = localStorage.getItem('favReciter');
      this.favReciter = JSON.parse(this.favReciter);
    } else {
      this.favReciter = [];
    }
    //---------------------------
    if (localStorage.getItem('favItemIndexs') !== null) {
      this.favReciterIndex = localStorage.getItem('favItemIndexs');
      this.favReciterIndex = JSON.parse(this.favReciterIndex);
    } else {
      this.favReciterIndex = [];
    }
  }
  addToFav(item: any, index: number) {
    if (!this.isExistFavItems(item)) {
      item.isFav = true;
      this.favReciter.push(item);
      localStorage.setItem('favReciter', JSON.stringify(this.favReciter));
      this.favReciterIndex.push(index);
      localStorage.setItem(
        'favItemIndexs',
        JSON.stringify(this.favReciterIndex)
      );
    }
  }
  removeFromFav(index: any, reciter: any) {
    this.favReciter.splice(index, 1);
    localStorage.setItem('favReciter', JSON.stringify(this.favReciter));
    this.favReciterIndex.splice(index, 1);
    localStorage.setItem('favItemIndexs', JSON.stringify(this.favReciterIndex));

    console.log(this.favReciter[index]);
    console.log(this.favReciterIndex[index]);
  }
  isExistFavItems(item: any) {
    let counter = 0;
    this.favReciter.forEach((reciter: any) => {
      if (reciter.id == item.id) {
        counter++;
      }
    });
    return counter;
  }
}
