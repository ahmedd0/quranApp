import { Component, ViewChild } from '@angular/core';
import { QuranService } from './quran.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'quranApp';
  audioSrc: any;
  @ViewChild('player') player: any;
  constructor(private _QuranService: QuranService) {
    this._QuranService.audioSrc.subscribe((e) => {
      this.audioSrc = e;
    });
  }
  ngAfterViewInit(): void {
    this._QuranService.audioPlayer.next(this.player);
  }
}
