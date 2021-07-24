import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuranService } from './../quran.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ViewChildren } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  quraa: any;
  favReciter: any;
  favReciterIndex: any;
  @ViewChildren('favIcons') favIcons: any;
  fav: any;
  constructor(
    private _QuranService: QuranService,
    private _Router: Router,
    private _NgxSpinnerService: NgxSpinnerService
  ) {
    this._NgxSpinnerService.show();
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

  ngOnInit(): void {
    this._QuranService.getAllQuraa().subscribe((response) => {
      this.quraa = response;
      this.favReciterIndex.forEach((value: any, index: any) => {
        this.quraa[value].isFav = true;
      });
      window.scrollTo(0, 0);

      this._NgxSpinnerService.hide();
    });
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
      console.log(this.favReciterIndex);
    }
    this.changeElementColor(
      index,
      ['far', 'text-white'],
      ['fas', 'text-danger']
    );
    console.log(this.favReciter);
  }
  changeElementColor(
    elementIndex: number,
    removedClass: any[],
    addedClass: any[]
  ) {
    let iconElement = this.favIcons._results[elementIndex].nativeElement;
    iconElement.classList.remove(...removedClass);
    iconElement.classList.add(...addedClass);
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
