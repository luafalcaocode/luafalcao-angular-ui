import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';

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
  public flagStop: boolean = false;
  public align: string = 'center';

  constructor(public commonService: CommonService, public loadinService: LoadingService, public elementRef: ElementRef) {

  }

  ngOnInit() {
    const video = this.elementRef.nativeElement.querySelector('video');
    video.muted = true;
    video.play();
    video.loop = true;
    this.setStyles();
  }

  @HostListener('window:resize', [])
  onResize() {
    this.setStyles();
  }

  setStyles() {
    if (window.innerWidth <= 1279) {
      this.h1Size = '20px';
      this.h2Size = '24px';
    }
    else {
      this.h1Size = '42px';
      this.h2Size = '38px';
    }

  }

  open(url) {
    window.open(url);
  }

}
