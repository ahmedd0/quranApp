import { Component, OnInit } from '@angular/core';
import { A7adethService } from '../a7adeth.service';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-a7adeth-item',
  templateUrl: './a7adeth-item.component.html',
  styleUrls: ['./a7adeth-item.component.scss'],
})
export class A7adethItemComponent implements OnInit {
  id: any;
  items: any;
  arrayLength: any;
  arr: any;
  startPage: any = 1;
  endPage: any = 5;
  startPagination: any = 0;
  endPagination: any = 8;
  constructor(
    private _A7adethService: A7adethService,
    private _ActivatedRoute: ActivatedRoute,
    private spinner: NgxSpinnerService
  ) {
    this.spinner.show();
  }

  ngOnInit(): void {
    this.id = this._ActivatedRoute.snapshot.params.id;
    this._A7adethService
      .getAlla7adethItem(this.id, this.startPage, this.endPage)
      .subscribe((res) => {
        this.items = res;
        console.log(res.data.available);
        this.arrayLength = res.data.available;
        let length = Math.ceil(res.data.available / 5);
        setTimeout(() => {
          this.spinner.hide();
        }, 1000);
        this.arr = new Array(length).fill(0).map((x, index) => {
          return index;
        });
        console.log(this.arr);
      });
  }
  changePage(index: any, item: any) {
    console.log(this.arrayLength);
    if (index === this.arrayLength * index + 5) {
      console.log('err');
      return;
    }
    //----- SHOW SPINNER ----
    this.spinner.show();
    //----- ADD ACTIVE CLASS ---
    this.addActiveClass(item);
    //---- change Content ----
    let start = 5 * index + 1;
    let end = start + 5;
    // ---- CHANGE TO NEXT || PREV PAGINATION ---
    if (index === this.startPagination && index !== 0) {
      this.startPagination = this.startPagination - 8;
      this.endPagination = this.endPagination - 8;
    }
    if (index === this.endPagination - 1 && index !== this.arr.length - 1) {
      this.startPagination = this.startPagination + 8;
      this.endPagination = this.endPagination + 8;
    }
    if (end > this.arrayLength) {
      end = this.arrayLength;
    }
    //----- FETCH DATA
    this._A7adethService
      .getAlla7adethItem(this.id, start, end)
      .subscribe((res) => {
        this.items = res;
        setTimeout(() => {
          this.spinner.hide();
        }, 400);
      });
  }
  addActiveClass(item: any) {
    let parent = item.parentElement;
    Array.from(parent.children).forEach((element: any) => {
      element.classList.remove('active');
    });
    item.classList.add('active');
  }
}
