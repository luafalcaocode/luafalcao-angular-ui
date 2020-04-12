import { Component, OnInit, HostListener } from '@angular/core';

import { ImageViewModel } from '../viewModels/image.viewModel';
import { CommonService } from '../services/layout/common.service';
import { LoadingService } from '../services/layout/loading.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public images: ImageViewModel[];
  public currentYear = new Date().getFullYear();
  public titulos: any[] = ['Desenvolvimento de Software', 'WEB API', 'Portais e Blogs', 'Migração de Sistemas .NET', 'Single Page Applications', 'Projeto de Banco de Dados']
  public colorWriter: string;
  public h1Size: string;
  public h2Size: string;

  constructor(public commonService: CommonService, public loadinService: LoadingService) {
  }

  ngOnInit() {
    this.commonService.initializePage();
    this.setStyles();
    this.commonService.hideLoading();
  }

  @HostListener('window:resize', [])
  onResize() {
   this.setStyles();
  }

  onMouseOver() {
    console.log('mouseOver()');
    const video = (<HTMLVideoElement>document.getElementById('video'));
    
    video.play();
  }

  setStyles() {
    if (window.innerWidth <= 1279) {
      this.h1Size = '20px';
      this.h2Size = '24px';

    }
    else {
      this.h1Size = '38px';
      this.h2Size = '30px';
    }

    document.getElementsByTagName('body')[0].style.overflowY = 'hidden'; 
  }

  open(url) {
    window.open(url);
  }

}
