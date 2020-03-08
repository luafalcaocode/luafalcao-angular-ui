import { Component, OnInit } from '@angular/core';
import { ArticleViewModel } from '../viewModels/article.viewModel';
import { ArticleMock } from './mocks/article.mock';
import { LoaderService } from '../services/layout/loader.service';
import { CommonService } from '../services/layout/common.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  article: ArticleMock; 
  comments: any[];
  isLoading: boolean;

  constructor(public loaderService: LoaderService, public commonService: CommonService) { }

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
      },
      {
        name: 'Darmani',
        content: 'Hey! We are brothers!'
      }
    ];
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
}
