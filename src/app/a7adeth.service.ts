import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class A7adethService {
  constructor(private _HttpClient: HttpClient) {}
  getA7adeth(): Observable<any> {
    return this._HttpClient.get('https://api.hadith.sutanlab.id/books');
  }
  getAlla7adethItem(id: any, start: any, end: any): Observable<any> {
    return this._HttpClient.get(
      `https://api.hadith.sutanlab.id/books/${id}?range=${start}-${end}`
    );
  }
}
