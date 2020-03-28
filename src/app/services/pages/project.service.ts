import { Injectable } from '@angular/core';
import { CardViewModel } from '../../viewModels/card.viewModel';
import { CommonService } from '../../services/layout/common.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  cards: CardViewModel[];
  video: string;

  constructor(public commonService: CommonService) { }

  ngOnInit() {

  }

  initializePage(screen: string) {
    switch (screen) {
      case 'pessoais':
        this.video = '../../assets/video/code.mp4';
        this.cards = [
          {
            title: 'Luã Falcão',
            description: 'Site que está sendo construído para servir de portifólio do meu trabalho.',
            category: 'SPA',
            link: 'https://lua-falcao.firebaseapp.com/',
            techs: ['Angular 8', 'HTML5', 'CSS3', 'ASP .NET Core (em breve)']
          },
          {
            title: 'HNE',
            description: 'Histórias Não Extraordinárias é um espaço na internet destinado para a publicação de contos literários, obras de ficção',
            category: 'SPA',
            link: 'http://falcaodeveloper-001-site2.ctempurl.com/hne/',
            techs: ['Angular', 'HTML5', 'CSS3']
          },
          {
            title: 'Ed Falcão',
            description: 'Meu primeiro projeto. Um site dedicado a export obras de arte do artista e membro da Academia Brasileira de Belas Artes Ed Falcão',
            category: 'SPA',
            link: 'http://www.edfalcao.com',
            techs: ['Angular JS', 'ASP .NET Web API', 'jQuery', 'SQL Server', 'Smarter ASP .NET', 'GIT']
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
            techs: ['Angular', 'HTML5', 'CSS3', 'JavaScript'],
          },
          {
            title: 'Projeto  6',
            description: 'A descrição do projeto vai entrar aqui quando a API estiver pronta!',
            category: 'Web App',
            link: 'some link here',
            techs: ['Angular', 'HTML5', 'CSS3', 'JavaScript']
          }
        ];
        break;
      case 'corporativos':
        this.video = '';
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
        ];
        break;
    }

    this.commonService.initializePage();

  }
}
