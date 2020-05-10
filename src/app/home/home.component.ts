import { Component, OnInit, HostListener, ElementRef, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';

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
  public titulos: any[] = ['Projeto em construção', 'Isto é uma aplicação ANGULAR', 'Obrigado pela visita!', '#fiqueEmCasa :)']
  public colorWriter: string;
  public h1Size: string;
  public h2Size: string;
  public flagStop: boolean = false;
  public align: string = 'center';
  public loading: any;
  public loaded: boolean = false;

  constructor(public commonService: CommonService, public loadingService: LoadingService, public elementRef: ElementRef, public changeDetection: ChangeDetectorRef) {

  }

  ngOnInit() {
    this.loading = this.elementRef.nativeElement.querySelector('.page-loading');
    let video = this.elementRef.nativeElement.querySelector('video');
    video.muted = true;
    video.loop = true;
    video.play();
    this.setStyles();    
    this.loadingService.hide(this.loading);
  }



  ngOnChanges() {
   
  }

  ngDoCheck() {
    console.log('ngDoCheck');
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
