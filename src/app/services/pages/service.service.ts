import { Injectable } from '@angular/core';
import { CommonService } from '../../services/layout/common.service';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  services: any[];
  counts: any[];

  constructor(public commonService: CommonService) { }

  initializePage(screen: string) {
    switch (screen) {
      case 'para-o-cliente':
        this.services = [
          {
            title: 'Construção de',
            description: 'APIs',
            background: 'assets/backgrounds/nice-gallery/api.jpg',
            reveal: {
              icon: 'fas fa-cogs reveal-icons',
              text: 'Com o framework ASP .NET Core posso construir aplicações distribuídas com acesso a banco de dados para oferecer diferentes tipos de serviços para sua aplicação, disponível para para o Windows, MAC OS ou Linux. '
            }
          },
          {
            title: 'Construção de',
            description: 'Interfaces de Usuário',
            background: 'assets/backgrounds/nice-gallery/ui.jpeg',
            reveal: {
              icon: 'fas fa-quidditch',
              text: 'Com tecnologias como HTML5, CSS3 e JavaScript consigo criar interfaces de usuário ricas com animações e transições de tela para diferentes resoluções de dispositivos.'
            }
          },
          {
            title: 'Construção de',
            description: 'SPA',
            background: 'assets/backgrounds/nice-gallery/spa.png',
            reveal: {
              icon: 'fab fa-angular',
              text: 'Já ouviu falar das Single Page Applications? São aplicações com uma interface de usuário rica em componentes e que proporcionam uma experiência muito agradável de usabilidade e navegação. Ideais para oferecer funcionalidades online e offline para os seus usuários.'
            }
          },
          {
            title: 'Construção de',
            description: 'Portais Web',
            background: 'assets/backgrounds/nice-gallery/portais.jpg',
            reveal: {
              icon: 'fab fa-firefox',
              text: 'Com experiência na construção e manutenção de Portais Web para companhias no ramo de seguro e admnistração, posso projetar e construir um sistema completo que seja robusto e possibilite fazer a gestão do seu conteúdo.'
            }
          },
          {
            title: 'Migração de Sistemas',
            description: 'Para .NET',
            background: 'assets/backgrounds/nice-gallery/migracao.jpg',
            reveal: {
              icon: 'fab fa-windows',
              text: 'Precisa migrar um sistema legado para uma tecnologia mais moderna? Tenho experiência com migração de sistemas de grande porte escritos em VB .NET para C# .NET e Web Forms para ASP .NET MVC.'
            }
          },
          {
            title: 'Projeto de',
            description: 'Banco de Dados',
            background: 'assets/backgrounds/nice-gallery/modelagem.jpeg',
            reveal: {
              icon: 'fas fa-database',
              text: 'Precisa de um novo banco de dados para o seu sistema? Podemos fazer um projeto, iniciando pela modelagem conceitual, partindo para a lógica e finalizando com o modelo físico escrito na linguagem T-SQL.'
            }
          }
        ];

        this.counts =  [
          6,
          7,
          5,
          7
        ];
        break;
      
      default:
        break;
    }

    this.commonService.initializePage();
  }
}
