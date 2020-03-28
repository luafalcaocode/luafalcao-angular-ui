import { Component, OnInit, HostListener } from '@angular/core';
import { CardViewModel } from '../viewModels/card.viewModel';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '../services/pages/project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  cards: CardViewModel[];
  video: string;
  screen: string;

  constructor(public router: ActivatedRoute, public service: ProjectService) {
 
  }

  ngOnInit() {
    this.router.params.subscribe(params => {
      this.screen = params.screen;
      this.service.initializePage(this.screen);
      this.cards = this.service.cards;
      this.video = this.service.video;
      
      let video = (<HTMLVideoElement>document.getElementById('video'));
      video.load();
    });
  }
}
