import { Injectable } from '@angular/core';
import { CommonService } from '../../services/layout/common.service';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  services: any[];

  constructor(public commonService: CommonService) { }

  initializePage(screen: string) {
    switch (screen) {
      case 'para-o-cliente':
        this.services = [
          {
            title: 'Desenvolvimento de',
            description: 'API',
            background: 'assets/backgrounds/highlight_1.png',
            reveal: {
              icon: 'fas fa-cogs reveal-icons',
              text: 'Com o framework ASP .NET Core podemos construir aplicações distribuídas com acesso a banco de dados para oferecer diferentes tipos de serviços para sua aplicação, disponível para para o Windows, MAC OS ou Linux.'
            }
          },
          {
            title: 'Desenvolvimento de',
            description: 'Interface de Usuário',
            background: 'assets/backgrounds/highlight_2.png',
            reveal: {
              icon: 'fas fa-quidditch',
              text: 'Se você precisa de um pacote de telas com design responsivo e adaptável para dispositivos móveis ou tradicionais e quiser me enviar o layout ou se precisar que eu projete um para a sua aplicação, eu posso te ajudar com isso.'
            }
          },
          {
            title: 'Desenvolvimento de',
            description: 'SPA',
            background: 'assets/backgrounds/rio_1.jpg',
            reveal: {
              icon: 'fab fa-angular',
              text: 'Já ouviu falar das Single Page Applications? São aplicações com uma interface de usuário rica em componentes e que proporcionam uma experiência muito agradável de usabilidade e navegação. Ideais para oferecer funcionalidades online e offline para os seus usuários.'
            }
          },
          {
            title: 'Construção de',
            description: 'Portais Web',
            background: 'assets/backgrounds/grid.jpg',
            reveal: {
              icon: 'fab fa-firefox',
              text: 'Com experiência na construção e manutenção de Portais Web para companhias de seguro e admnistração, posso projetar e construir um sistema completo que seja robusto o suficiente para atender as necessidades do seu negócio.'
            }
          },
          {
            title: 'Migração de Sistemas',
            description: 'Para .NET',
            background: 'assets/backgrounds/binary.jpg',
            reveal: {
              icon: 'fab fa-windows',
              text: 'Precisa migrar um sistema legado para uma tecnologia mais moderna voltado para o Windows? Tenho experiência com migração de sistemas de grande porte escritos em VB .NET para C# .NET e Web Forms para ASP .NET MVC.'
            }
          },
          {
            title: 'Modelagem de',
            description: 'Banco de Dados',
            background: 'assets/backgrounds/highlight_1.png',
            reveal: {
              icon: 'fas fa-database',
              text: 'Precisa de um novo banco de dados para o seu sistema? Podemos fazer um projeto, iniciando pela modelagem conceitual, partindo para a lógica e finalizando com o modelo físico escrito na linguagem T-SQL.'
            }
          }
        ]
        break;
      default:
        break;
    }

    this.commonService.initializePage();
  }
}
