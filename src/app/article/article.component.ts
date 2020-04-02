import { Component, OnInit, Input } from '@angular/core';
import { ArticleViewModel } from '../viewModels/article.viewModel';
import { ArticleMock } from './mocks/article.mock';
import { LoaderService } from '../services/layout/loader.service';
import { CommonService } from '../services/layout/common.service';
import { MenuService } from '../services/layout/menu.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  @Input() article: ArticleMock; 
  allArticles: any[];
  comments: any[];
  isLoading: boolean;
  id: number;

  constructor(public loaderService: LoaderService, public commonService: CommonService, public menuService: MenuService, public router: ActivatedRoute) { }

  ngOnInit() {
    this.commonService.initializePage();
    this.article = new ArticleMock();
    this.comments = [
      {
        name: 'Ellen Galven',
        content: 'Hi! I loved your article! Congratulations!'
      },
      {
        name: 'Cloud Strife',
        content: 'Muito bom! Parabéns pelo artigo! Adorei a leitura!'
      },
      {
        name: 'Princesa Zelda',
        content: 'Oi! Você viu o Link por aí? Ele esqueceu a Ocarina do Tempo comigo!'
      }    
    ];

    this.allArticles = [
      {
        image: 'https://i.picsum.photos/id/237/112/63.jpg',
        title: 'Lorem ipsum expecto patronoum arania exumai',
        date: '15/03/2020',
        id: 1
      },
      {
        image: 'https://i.picsum.photos/id/237/112/63.jpg',
        title: 'Lorem ipsum expecto patronoum arania exumai',
        date: '15/03/2020',
        id: 2
      },
      {
        image: 'https://i.picsum.photos/id/237/112/63.jpg',
        title: 'Lorem ipsum expecto patronoum arania exumai',
        date: '18/02/2020',
        id: 3
      },
      {
        image: 'https://i.picsum.photos/id/237/112/63.jpg',
        title: 'Lorem ipsum expecto patronoum arania exumai',
        date: '08/01/2020',
        id: 4
      },
      {
        image: 'https://i.picsum.photos/id/237/112/63.jpg',
        title: 'Lorem ipsum expecto patronoum arania exumai',
        date: '24/12/2019',
        id: 5
      },
      {
        image: 'https://i.picsum.photos/id/237/112/63.jpg',
        title: 'Lorem ipsum expecto patronoum arania exumai',
        date: '24/12/2019',
        id: 6
      },
      {
        image: 'https://i.picsum.photos/id/237/112/63.jpg',
        title: 'Lorem ipsum expecto patronoum arania exumai',
        date: '24/12/2019',
        id: 7
      },
      {
        image: 'https://i.picsum.photos/id/237/112/63.jpg',
        title: 'Lorem ipsum expecto patronoum arania exumai',
        date: '24/12/2019',
        id: 8
      },
      {
        image: 'https://i.picsum.photos/id/237/112/63.jpg',
        title: 'Lorem ipsum expecto patronoum arania exumai',
        date: '24/12/2019',
        id: 9
      }
    ];

    this.menuService.isArticleMenuVisible = false;
    // fazer um GET na API por ID (que vem da URL) para pegar o ID do artigo
    this.router.params.subscribe(params => this.id = params.id);
    console.log(this.id);
    this.commonService.hideLoading();
  }

  scrollToElement(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth'});
  }

  onLike(event: any) {
    // chamada da API para atualizar a coluna no BD com o número de likes
   this.article.numberOfLikes = event;
  }

  onComment(event: any) {
    let thiss = this;
    // chamar api pra adicionar um comentário novo na tela
    // chamar api pra fazer get dos comentários e passar para o componente filho
    this.isLoading = this.loaderService.show();
  
    // trocar pelo then quando a API estiver pronta
    setTimeout( function () {
      thiss.isLoading = thiss.loaderService.hide();
      thiss.comments.unshift(event);
      thiss.article.numberOfComments++;
      document.getElementById('scrollToAllComments').scrollIntoView({behavior: 'smooth'});
    }, 2000);
  }

  onGetById(id) {
    // chamar API para obter o artigo por id e atribuir ao objeto article 
  }

  open(url: string) {
    window.open(url);
  }
}
