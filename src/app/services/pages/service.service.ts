import { Injectable } from '@angular/core';
import { CommonService } from '../../services/layout/common.service';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  services: any[];
  counts: any[];
  reveal: any;

  constructor(public commonService: CommonService) { }

  initializePage(screen: string) {
    switch (screen) {
      case 'para-voce':
        this.services = [
          {
            title: 'Construção de',
            description: 'APIs',
            background: 'assets/backgrounds/nice-gallery/api.jpg',
            reveal: {
              icon: 'fas fa-server reveal-icons',
              text: 'Com o framework ASP .NET Core podemos construir aplicações distribuídas com acesso a bancos de dados diversos para oferecer diferentes tipos de funcionalidades para sua aplicação, disponíveis para web e plataformas móveis.'
            }
          },
          {
            title: 'Construção de',
            description: 'Interfaces de Usuário',
            background: 'assets/backgrounds/nice-gallery/ui.jpeg',
            reveal: {
              icon: 'fas fa-quidditch',
              text: 'Com tecnologias como HTML5, CSS3 e JavaScript criamos interfaces de usuário ricas com design responsivo, animações e transições de tela para diferentes resoluções de dispositivos, para que sua aplicação fique com um excelente visual.'
            }
          },
          {
            title: 'Construção de',
            description: 'SPA',
            background: 'assets/backgrounds/nice-gallery/spa.jpg',
            reveal: {
              icon: 'fab fa-angular',
              text: 'Single Page Applications: Aplicações com boa performance que interagem com Web APIs no servidor através de requisições AJAX e que possuem um esquema de navegação bastante fluido que transmite ao usuário a experiência de estar navegando em um app nativo de uma plataforma móvel. '
            }
          },
          {
            title: 'Construção de',
            description: 'Portais Web',
            background: 'assets/backgrounds/nice-gallery/portais.jpg',
            reveal: {
              icon: 'fab fa-firefox',
              text: 'Com experiência na construção e manutenção de Portais Web para companhias no ramo de seguro e admnistração, podemos projetar e construir um sistema completo que seja robusto e possibilite fazer a gestão do seu conteúdo.'
            }
          },
          {
            title: 'Migração de Sistemas',
            description: 'Para .NET',
            background: 'assets/backgrounds/nice-gallery/migracao.jpg',
            reveal: {
              icon: 'fab fa-windows',
              text: 'Precisa migrar um sistema legado para uma tecnologia mais moderna e ainda continuar suportando navegadores descontinuados como o Internet Explorer? Podemos construir uma solução customizada balanceando performance e as necessidades do seu negócio.'
            }
          },
          {
            title: 'Projeto de',
            description: 'Banco de Dados',
            background: 'assets/backgrounds/nice-gallery/modelagem.jpg',
            reveal: {
              icon: 'fas fa-database',
              text: 'Precisa de um novo banco de dados para o seu sistema? Podemos fazer um projeto, iniciando pela modelagem conceitual, partindo para a lógica e finalizando com o modelo físico escrito na linguagem SQL.'
            }
          }
        ];

        this.counts = [
          6,
          7,
          5,
          7
        ];
        break;
      case 'para-a-comunidade':
        this.services = [
          {
            title: 'Coleção de',
            description: 'Componentes ANGULAR',
            background: 'assets/backgrounds/nice-gallery/spa.jpg',
            reveal: {
              icon: 'fas fa-cogs reveal-icons',
              text: 'Usando como base tecnologias como HTML5, CSS3 e JavaScript estou passando a disponibilizar no GitHub coleções de componentes reutilizáveis baseados no framework ANGULAR para ser utilizado em projetos.'
            }
          },
          {
            title: 'Publicação de ',
            description: 'Artigos de TI',
            background: 'assets/backgrounds/nice-gallery/modelagem.jpg',
            reveal: {
              icon: 'fas fa-pencil-alt reveal-icons',
              text: 'Publicação de artigos de tecnologia sobre diferentes temas com a intenção de ajudar a solucionar problemas técnicos de uma maneira efetiva, compartilhando dicas, tutoriais e experiência profissional. '
            }
          },
          {
            title: 'Contribuição em ',
            description: 'Projetos Open-Source',
            background: 'assets/backgrounds/nice-gallery/ui.jpeg',
            reveal: {
              icon: 'fas fa-folder-open reveal-icons',
              text: 'Disponibilidade para ajudar com projetos open-source cujo objetivo é construir soluções de valor para a comunidade sem fins lucrativos.'
            },
          }
        ]
        break;
    }

    this.commonService.initializePage();
  }

}
