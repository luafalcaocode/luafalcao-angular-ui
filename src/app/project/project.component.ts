import { Component, OnInit, HostListener } from '@angular/core';
import { CardViewModel } from '../viewModels/card.viewModel';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  cards: CardViewModel[];
  video: string;
  screen: string;

  constructor(public router: ActivatedRoute) {
    this.router.params.subscribe(params => this.screen = params.screen);
  }

  ngOnInit() {
    debugger;
   
    switch (this.screen) {
      case 'pessoais':
        this.video = '../../assets/video/code.mp4';
        break;
      case 'corporativos':
        break;
    }
    this.cards = [
      {
        title: 'Projeto 1',
        description: 'A descrição do projeto vai entrar aqui quando a API estiver pronta!',
        category: 'Web App',
        link: 'some link here',
        techs: ['Angular', 'HTML5', 'CSS3', 'JavaScript']
      },
      {
        title: 'Projeto  2',
        description: 'A descrição do projeto vai entrar aqui quando a API estiver pronta!',
        category: 'Web App',
        link: 'some link here',
        techs: ['C#', 'ASP .NET CORE', 'SQL Server', 'GIT']
      },
      {
        title: 'Projeto  3',
        description: 'A descrição do projeto vai entrar aqui quando a API estiver pronta!',
        category: 'Web App',
        link: 'some link here',
        techs: ['IIS', 'Azure', 'C#', 'ASP .NET Signal AR']
      },
      {
        title: 'Projeto  4',
        description: 'A descrição do projeto vai entrar aqui quando a API estiver pronta!',
        category: 'Web App',
        link: 'some link here',
        techs: ['Angular', 'HTML5', 'CSS3', 'JavaScript']
      },
      {
        title: 'Projeto  5',
        description: 'A descrição do projeto vai entrar aqui quando a API estiver pronta!',
        category: 'Web App',
        link: 'some link here',
        techs: ['Angular', 'HTML5', 'CSS3', 'JavaScript']
      },
      {
        title: 'Projeto  6',
        description: 'A descrição do projeto vai entrar aqui quando a API estiver pronta!',
        category: 'Web App',
        link: 'some link here',
        techs: ['Angular', 'HTML5', 'CSS3', 'JavaScript']
      },
      {
        title: 'Projeto  7',
        description: 'A descrição do projeto vai entrar aqui quando a API estiver pronta!',
        category: 'Web App',
        link: 'some link here',
        techs: ['Angular', 'HTML5', 'CSS3', 'JavaScript']
      }
    ]
  }

}
