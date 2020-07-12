import { Injectable } from '@angular/core';
import { ArticleViewModel } from '../../viewModels/article.viewModel';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  posts: ArticleViewModel[];
  featuredArticles: ArticleViewModel[];
  blogName: string;

  constructor() { }

  initialize(screen: string) {
    switch(screen) {
      case 'diario-de-um-engenheiro-software':
        this.posts = [
          {
            id: 0,
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus lectus ac ante dictum, quis vehicula nibh auctor. Morbi mattis varius leo in rhoncus. ',
            publishedDate: '10/10/2020',
            image: 'https://picsum.photos/seed/picsum/200/300'
          },
          {
            id: 1,
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus lectus ac ante dictum, quis vehicula nibh auctor. Morbi mattis varius leo in rhoncus. ',
            publishedDate: '11/10/2020',
            image: 'https://picsum.photos/seed/picsum/200/300'
          },
          {
            id: 2,
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus lectus ac ante dictum, quis vehicula nibh auctor. Morbi mattis varius leo in rhoncus. ',
            publishedDate: '10/09/2020',
            image: 'https://picsum.photos/seed/picsum/200/300'
          },
          {
            id: 3,
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus lectus ac ante dictum, quis vehicula nibh auctor. Morbi mattis varius leo in rhoncus. .',
            publishedDate: '10/09/2020',
            image: 'https://picsum.photos/seed/picsum/200/300'
          },
          {
            id: 4,
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus lectus ac ante dictum, quis vehicula nibh auctor. Morbi mattis varius leo in rhoncus. ',
            publishedDate: '10/09/2020',
            image: 'https://picsum.photos/seed/picsum/200/300'
          },
          {
            id: 5,
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus lectus ac ante dictum, quis vehicula nibh auctor. Morbi mattis varius leo in rhoncus. .',
            publishedDate: '10/09/2020',
            image: 'https://picsum.photos/seed/picsum/200/300'
          },
          {
            id: 6,
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus lectus ac ante dictum, quis vehicula nibh auctor. Morbi mattis varius leo in rhoncus. .',
            publishedDate: '10/09/2020',
            image: 'https://picsum.photos/seed/picsum/200/300'
          }
        ];
        this.blogName = 'Diário de um Engenheiro de Software';
        this.featuredArticles = this.posts.slice(0, 4);
        break;



      }
  }
}
