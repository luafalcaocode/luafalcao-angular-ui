import { Injectable } from '@angular/core';
import { ArticleViewModel } from '../../viewModels/article.viewModel';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  posts: ArticleViewModel[];
  blogName: string;

  constructor() { }

  initialize(screen: string) {
    switch(screen) {
      case 'diario-de-um-engenheiro-software':
        this.posts = [
          {
            id: 0,
            title: 'Design Pattern #1: Strategy',
            description: 'The Strategy Patter is one of the most important patterns...',
            publishedDate: '10/10/2020',
            image: 'https://picsum.photos/seed/picsum/200/300'
          },
          {
            id: 1,
            title: 'Design Patterns and where to find them',
            description: 'Design Patterns are reusable software solutions for repeated problems....',
            publishedDate: '11/10/2020',
            image: 'https://picsum.photos/seed/picsum/200/300'
          },
          {
            id: 2,
            title: 'How to get girls on Silicon Valley',
            description: 'In this series of article we\'ll learn how to...',
            publishedDate: '10/09/2020',
            image: 'https://picsum.photos/seed/picsum/200/300'
          },
          {
            id: 3,
            title: 'How to get girls on Silicon Valley',
            description: 'In this series of article we\'ll learn how to...',
            publishedDate: '10/09/2020',
            image: 'https://picsum.photos/seed/picsum/200/300'
          },
          {
            id: 4,
            title: 'How to get girls on Silicon Valley',
            description: 'In this series of article we\'ll learn how to...',
            publishedDate: '10/09/2020',
            image: 'https://picsum.photos/seed/picsum/200/300'
          },
          {
            id: 5,
            title: 'How to get girls on Silicon Valley',
            description: 'In this series of article we\'ll learn how to...',
            publishedDate: '10/09/2020',
            image: 'https://picsum.photos/seed/picsum/200/300'
          },
          {
            id: 6,
            title: 'How to get girls on Silicon Valley',
            description: 'In this series of article we\'ll learn how to...',
            publishedDate: '10/09/2020',
            image: 'https://picsum.photos/seed/picsum/200/300'
          }
        ];
        this.blogName = 'Engenharia de Software'
        break;

      }
  }
}
