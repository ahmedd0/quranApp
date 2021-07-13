import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuranService } from './../quran.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  quraa: any;
  constructor(
    private _QuranService: QuranService,
    private _Router: Router,
    private _NgxSpinnerService: NgxSpinnerService
  ) {
    this._NgxSpinnerService.show();
  }

  ngOnInit(): void {
    this._QuranService.getAllQuraa().subscribe((response) => {
      this.quraa = response;
      window.scrollTo(0,0);
      this._NgxSpinnerService.hide();

    });


  }
  getAllSour(qarea: any) {
    this._Router.navigate(['']);
    console.log(qarea.id);
  }
}
