import { Component } from '@angular/core';

import * as models from './services/lyricsapi/model/models';
import * as lyricsapi from './services/lyricsapi/api/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'The Lyrics App';

  lyrics: models.LyricsResponse;


  constructor(private lyricsService: lyricsapi.DefaultService ) {
    this.lyricsService.getLyrics()
      .subscribe(res => {
        this.lyrics = res;
        console.log('lyrics', res);
      });
  }
}
