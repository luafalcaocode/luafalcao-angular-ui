import { Injectable } from '@angular/core';
import { ArticleViewModel } from '../../viewModels/article.viewModel';
import { RequestService } from '../request.service';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  posts: ArticleViewModel[];
  featuredArticles: ArticleViewModel[];
  blogName: string;
  paginations:  ArticleViewModel[];
  count: number;

  constructor(public api: RequestService) { }

  initialize(screen: string) {
    switch(screen) {
      case 'diario-de-um-engenheiro-software':
        this.blogName = 'Diário de um Engenheiro de Software';
        return this.GetArticlesByTag('diario-de-um-engenheiro-software', 1, 6);
        break;
      }
  }

  public GetAllArticles(page)  {
    return this.api.get('/artigos', null, page, 6);
  }

  public GetArticlesByTag(tag: string, page?: number, qtd?: number)  {
    return this.api.getByTag(`/artigos/tag`, tag, null, page, qtd);
  }

  public GetCountOfArticles() {
    return this.api.get('/artigos/count', null)
  }
}
