import { Component, ViewChild } from '@angular/core';
import { QuranService } from './quran.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'quranApp';
  @ViewChild('player') player: any;
  constructor(public _QuranService: QuranService) {}
  ngAfterViewInit(): void {
    this._QuranService.audioPlayer = this.player;
  }
}
