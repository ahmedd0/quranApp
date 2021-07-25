import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { A7adethService } from '../a7adeth.service';

@Component({
  selector: 'app-a7ades',
  templateUrl: './a7ades.component.html',
  styleUrls: ['./a7ades.component.scss'],
})
export class A7adesComponent implements OnInit {
  constructor(
    private _A7adethService: A7adethService,
    public _NgxSpinnerService: NgxSpinnerService
  ) {
    this._NgxSpinnerService.show();
  }
  items: any;
  ngOnInit(): void {
    this._A7adethService.getA7adeth().subscribe((res) => {
      this.items = res.data;
      setTimeout(() => {
        this._NgxSpinnerService.hide();
      }, 600);

      console.log(this.items);
    });
  }
}
