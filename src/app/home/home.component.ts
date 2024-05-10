import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuranService } from './../quran.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ViewChildren } from '@angular/core';
import { FavoriteReciterService } from './../favorite-reciter.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @ViewChildren('favIcons') favIcons: any;
  fav: any;
  constructor(
    private _QuranService: QuranService,
    private _NgxSpinnerService: NgxSpinnerService,
    public _FavoriteReciterService: FavoriteReciterService
  ) {
    this._NgxSpinnerService.show();
  }

  ngOnInit(): void {
    this._QuranService.getAllQuraa().subscribe(
      (response) => {
        this._FavoriteReciterService.quraa = response;
        this._FavoriteReciterService.favReciterIndex.forEach(
          (value: any, index: any) => {
            this._FavoriteReciterService.quraa[value].isFav = true;
          }
        );
        window.scrollTo(0, 0);

        this._NgxSpinnerService.hide();
      },
      () => {
        this._NgxSpinnerService.hide();
        Swal.fire({
          title: 'Error!',
          text: 'SERVER ERROR',
          icon: 'error',
          confirmButtonText: 'OK',
        });
      }
    );
  }
}
