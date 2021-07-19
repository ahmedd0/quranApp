import { Component, OnInit } from '@angular/core';
import { A7adethService } from '../a7adeth.service';

@Component({
  selector: 'app-a7ades',
  templateUrl: './a7ades.component.html',
  styleUrls: ['./a7ades.component.scss'],
})
export class A7adesComponent implements OnInit {
  constructor(private _A7adethService: A7adethService) {}
  items: any;
  ngOnInit(): void {
    this._A7adethService.getA7adeth().subscribe((res) => {
      this.items = res.data;
      console.log(this.items);
    });
  }
}
