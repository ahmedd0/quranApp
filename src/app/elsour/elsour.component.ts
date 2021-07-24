import {
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuranService } from './../quran.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-elsour',
  templateUrl: './elsour.component.html',
  styleUrls: ['./elsour.component.scss'],
})
export class ElsourComponent implements OnInit {
  data: any;
  id: any;
  isPlay: boolean = false;
  @ViewChildren('icon') icon: any;
  audio: any;
  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _QuranService: QuranService,
    private spinner: NgxSpinnerService
  ) {
    this.spinner.show();
  }

  ngOnInit(): void {
    let id = this._ActivatedRoute.snapshot.params.id;
    this.id = id;
    this._QuranService.getAllSour(id).subscribe((res) => {
      this.data = res;
      this.audio = this.data.surasData[0].url;
      setTimeout(() => {
        this.spinner.hide();
      }, 800);
    });
    window.scrollTo(0, 0);
  }

  toggle(i: number) {
    if (this.icon._results[i].nativeElement.classList.contains('fa-pause')) {
      this.icon._results[i].nativeElement.classList.add('fa-play');
      this.icon._results[i].nativeElement.classList.remove('fa-pause');
      this._QuranService.audioPlayer.nativeElement.pause();

      return;
    }
    this.icon._results.forEach((e: any) => {
      e.nativeElement.classList.remove('fa-pause');
      e.nativeElement.classList.add('fa-play');
    });
    this.icon._results[i].nativeElement.classList.remove('fa-play');
    this.icon._results[i].nativeElement.classList.add('fa-pause');
    this.audio = this.data.surasData[i].url;
    this._QuranService.audioSrc = this.audio;
    this._QuranService.audioPlayer.nativeElement.setAttribute(
      'autoplay',
      'true'
    );
    this._QuranService.audioPlayer.nativeElement.play();
  }
}
