import { Injectable } from '@angular/core';
import { CommonService } from '../../services/layout/common.service';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  services: any[];
  counts: any[];
  reveal: any;
  tiposDeProjeto: any[];
  howWorks: string[];

  constructor(public commonService: CommonService) { }

  initializePage(screen: string) {
    switch (screen) {
      case 'para-sua-empresa':
        this.services = [
          {
            title: 'Construção de',
            description: 'APIs',
            background: 'assets/backgrounds/nice-gallery/api.jpg',
            reveal: {
              icon: 'fas fa-server reveal-icons',
              // text: 'Com o framework ASP .NET Core podemos construir aplicações distribuídas com acesso a bancos de dados diversos para oferecer diferentes tipos de funcionalidades para sua aplicação, disponíveis para web e plataformas móveis.'
              text: 'Um conjunto de funcionalidades para a sua aplicação para fazer o upload de arquivos, autenticação e cadastro de usuários, envio de e-mails, automação de processos de negócio e geração de relatórios construídas com os frameworks ASP .NET Core ou Express.js.'
            }
          },
          {
            title: 'Construção de',
            description: 'Interfaces de Usuário',
            background: 'assets/backgrounds/nice-gallery/ui.jpeg',
            reveal: {
              icon: 'fas fa-quidditch',
              text: 'Com tecnologias como HTML5, CSS3 e JavaScript sua aplicação pode contar com uma rica interface de usuário com design responsivo, animações e transições de tela para diferentes resoluções de dispositivos, ganhando um excelente visual.'
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
            title: 'Projeto de',
            description: 'Portais Web',
            background: 'assets/backgrounds/nice-gallery/portais.jpg',
            reveal: {
              icon: 'fab fa-firefox',
              text: 'Com experiência na construção e manutenção de Portais Web para companhias no ramo de seguro e admnistração é possível projetar e construir um sistema completo que seja robusto e possibilite fazer a gestão do seu conteúdo.'
            }
          },
          {
            title: 'Projeto de ',
            description: 'Migração de sistemas',
            background: 'assets/backgrounds/nice-gallery/migracao.jpg',
            reveal: {
              icon: 'fab fa-windows',
              text: 'Migração de sistemas para tecnologias mais modernas com o objetivo de facilitar a manutenção de suas funções de negócio e garantir a extensão de funcionalidades de maneira mais veloz.'
            }
          },
          {
            title: 'Projeto de',
            description: 'Banco de Dados',
            background: 'assets/backgrounds/nice-gallery/modelagem.jpg',
            reveal: {
              icon: 'fas fa-database',
              text: 'Precisa de um novo banco de dados para o seu sistema? Podemos fazer um projeto, iniciando pela modelagem conceitual, partindo para a lógica e finalizando com o modelo físico escrito na linguagem SQL ou algum de seus dialetos.'
            }
          }
        ];

        this.counts = [
          6,
          7,
          5,
          7
        ];
        this.tiposDeProjeto = [
          {
            nome: 'Selecione um projeto',
            id: 0,
            selecionado: true,
          },
          {
            nome: 'API',
            id: 1,
            selecionado: false,
          },
          {
            nome: 'Interfaces de Usuário',
            id: 2,
            selecionado: false,
          },
          {
            nome: 'SPA',
            id: 3,
            selecionado: false,
          },
          {
            nome: 'Portais Web',
            id: 4,
            selecionado: false,
          },
          {
            nome: 'Projeto de Sistemas Para .NET',
            id: 5,
            selecionado: false,
          },
          {
            nome: 'Projeto de Banco de Dados',
            id: 6,
            selecionado: false,
          },
        ];
        this.howWorks = [
          '01. Envie sua solicitação, e eu entrarei em contato.',
          '02. Fazemos o entendimento do seu problema e <span class="u-underline">juntos</span> encontraremos uma solução adequada.',
          '03. Seguimos com a construção da sua aplicação.',
          '04. Você recebe algo de valor a cada 2-4 semanas e fornece <span class="u-underline">feedback.</span>',
          '05. Se tudo estiver OK, efetue o pagamento da entrega.',
          '06. Repetimos o fluxo acima do passo 03 em diante até a conclusão do projeto.'
        ];
        break;
      case 'para-a-comunidade':
        this.services = [
          {
            title: 'Realização de',
            description: 'Workshops',
            background: 'assets/backgrounds/nice-gallery/spa.jpg',
            reveal: {
              icon: 'fas fa-cogs reveal-icons',
              text: 'Precisa de ajuda para aprender sobre Design Patterns, APIs, front-end ou algum outro assunto da área de tecnologia? Com a realização de workshops podemos trocar conhecimento e adquirir habilidades em diferentes ferramentas.'
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
        ];
        this.tiposDeProjeto = [
          {
            nome: 'Selecione um projeto',
            id: 0,
            selecionado: true,
          },
          {
            nome: 'Realização de Workshopss',
            id: 1,
            selecionado: false,
          },
          {
            nome: 'Artigos de TI',
            id: 2,
            selecionado: false,
          },
          {
            nome: 'Projetos Open-Souce',
            id: 3,
            selecionado: false,
          },
        ];
        this.howWorks = [
          'Envie sua solicitação, e eu entrarei em contato.'
        ];
        break;
    }

    this.commonService.initializePage();
  }

}
