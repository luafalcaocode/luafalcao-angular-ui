import { Component, OnInit } from '@angular/core';
import { ArticleViewModel } from '../../viewModels/article.viewModel';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  public articles: ArticleViewModel[];
  public selectedArticle: ArticleViewModel;

  constructor() {
    this.selectedArticle =
      new ArticleViewModel(1,
        'https://i.picsum.photos/id/237/700/400.jpg', 
        'Luã Falcão',
        '28/12/2019', 
        'Design Patterns #5: Abstract Factory',
        'Continuando a série sobre padrões de projeto, onde abordamos soluções reutilizáveis e testáveis para problemas frequentes do dia a dia do programador, hoje falaremos sobre o Abstract Factory, um dos cinco padrões criacionais catalogados pela Gang of Four em seu livro Design Patterns: Elements of Reusable Object-Oriented Software.'),

    this.articles = [
      new ArticleViewModel(1,
             'https://i.picsum.photos/id/237/700/400.jpg', 
             'Luã Falcão',
             '28/12/2019', 
             'Design Patterns #4: State',
             'O padrão de projetos State permite que mudemos o comportamento de um objeto baseado na mudança do seu estado, representando cada estado como uma classe, o que reduz a necessidade de usarmos lógica condicional para verificar, por exemplo, o valor do status de um usuário no sistema.'),
             
             new ArticleViewModel(2,
              'https://i.picsum.photos/id/237/700/400.jpg', 
              'Luã Falcão',
              '21/12/2019', 
              'Criando componentes no Angular',
              ''),

              new ArticleViewModel(3,
                'https://i.picsum.photos/id/237/700/400.jpg', 
                'Luã Falcão',
                '07/11/2019', 
                'Autenticação JWT usando .NET Core',
                '')
    ];
   }

  ngOnInit() {
  }

}
