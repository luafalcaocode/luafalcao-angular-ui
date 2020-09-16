import { Injectable } from '@angular/core';
import { ArticleViewModel } from '../viewModels/article.viewModel';
import { RequestService } from '../services/request.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { CommonService } from '../services/layout/common.service';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  posts: ArticleViewModel[];
  featuredArticles: ArticleViewModel[];
  blogName: string;
  pageName: string;
  paginations: ArticleViewModel[];
  count: number;


  constructor(public api: RequestService, public httpClient: HttpClient, public commonService: CommonService) { }

  initialize(screen: string) {
    switch (screen) {
      case 'diario-de-um-engenheiro-software':
        this.blogName = 'Diário de um Engenheiro de Software';
        this.pageName = screen;

        return this.obterArtigosPorBlog(this.commonService.mapNameToCategory(screen), 1, 6);
      case 'next-gameplay':
        this.blogName = 'Next Gameplay';
        this.pageName = screen;

        return this.obterArtigosPorBlog(this.commonService.mapNameToCategory(screen), 1, 6); //  incluir nova categoria no back-end
    }
  }

  public ObterArtigos(page) {
    return this.api.get('/artigos', null, page, 6);
  }

  public obterArtigosPorBlog(blog: string, page?: number, qtd?: number) {
    return this.httpClient.get(`${environment.endpoint.url}/artigos?blog=${blog}&pagina=${page}&quantidade=${qtd}`);
  }

  public obterQuantidadeDeArtigos(blog: string) {
    return this.httpClient.get(`${environment.endpoint.url}/artigos/quantidade?blog=${blog}`);
  }

  public obterUltimasPublicacoes(blog: string) {
    return this.httpClient.get(`${environment.endpoint.url}/artigos/destaques?blog=${blog}`)
  }
}
