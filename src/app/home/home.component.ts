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

  constructor(public commonService: CommonService, public loadinService: LoadingService, public elementRef: ElementRef) {
   
  }

  ngOnInit() {
    this.elementRef.nativeElement.querySelector('video').muted = true;
    this.elementRef.nativeElement.querySelector('video').play();
    this.loadinService.show();
    this.commonService.initializePage();
    this.setStyles();
    this.loadinService.hide();
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

    //document.getElementsByTagName('body')[0].style.overflowY = 'hidden'; 
  }

  open(url) {
    window.open(url);
  }
 
}
