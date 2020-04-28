import { Component, OnInit, ElementRef } from '@angular/core';
import { CardViewModel } from '../viewModels/card.viewModel';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '../services/pages/project.service';
import { CommonService } from '../services/layout/common.service';
import { LoadingService } from '../services/layout/loading.service';


@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  cards: CardViewModel[];
  video: string;
  screen: string;
  titulosCarregando: string[];
  titulosProjetos: string[]
  backgroundHeader: string = 'transparent';
  backgroundMobile: string = 'black';
  backgroundMobileContainer: string = 'rgba(0, 0, 0, 0.9)';

  constructor(public router: ActivatedRoute, public service: ProjectService, public commonService: CommonService, public elementRef: ElementRef, public loadingService: LoadingService) {

  }

  ngOnInit() {
    this.router.params.subscribe(params => {
      this.loadingService.show();
      this.elementRef.nativeElement.querySelector('video').muted = true;
      this.elementRef.nativeElement.querySelector('video').play();
      this.commonService.initializePage();
      this.screen = params.screen;
      this.service.initializePage(this.screen);
      this.cards = this.service.cards;
      this.video = this.service.video;
      this.titulosProjetos = this.service.titulosProjetos;
      this.titulosCarregando = this.service.titulosCarregando;
      this.loadingService.hide();
    });
  }

}
