import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'page-loading',
  templateUrl: './page-loading.component.html',
  styleUrls: ['./page-loading.component.scss']
})
export class PageLoadingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  initializePage() {
    console.log('initializePage()');
    const video = (<HTMLVideoElement>document.getElementById('video'));
    console.log('video: ' + video);
    if (video) {
      video.play();
    }    
  }

}
