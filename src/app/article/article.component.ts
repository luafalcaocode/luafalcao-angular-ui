import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { ArticleViewModel } from '../viewModels/article.viewModel';
import { LoaderService } from '../services/layout/loader.service';
import { LoadingService } from '../services/layout/loading.service';
import { CommonService } from '../services/layout/common.service';
import { MenuService } from '../services/layout/menu.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from '../services/pages/article.service';
import { RequestService } from '../services/request.service';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  allArticles: any[];
  posts: ArticleViewModel[];
  comments: any[];
  paginations: ArticleViewModel[];

  id: number;
  count: number;

  defaultStyle: any;
  error: any;

  blogName: string;

  isLoading: boolean;


  public loading: any;
  public articles: ArticleViewModel[];
  public selectedArticle: ArticleViewModel;
  public featuredArticles: ArticleViewModel[];

  constructor(public loaderService: LoaderService,
    public commonService: CommonService,
    public router: ActivatedRoute,
    public loadingService: LoadingService,
    public elementRef: ElementRef,
    public articleService: ArticleService,
    public api: RequestService) {
    this.defaultStyle = {};
  }

  ngOnInit() {
    this.loading = this.elementRef.nativeElement.querySelector('.page-loading');
    this.commonService.setLayout();

    this.router.params.subscribe(param => {
      this.articleService.initialize(param.nome)
        .toPromise()
        .then((artigos: any) => {
          this.blogName = this.articleService.blogName;
          this.posts = artigos;
          this.commonService.gotoTop();
          this.loadingService.hide(this.loading);
        }).then(() => {
          this.getCount();
        })
        .catch((reason: any) => {
          console.log(reason);
          this.loadingService.hide(this.loading);
        })

    });
  }

  ngOnDestroy() {
    this.commonService.unsetLayout();
  }

  paginar(event) {
    const thiss = this;
    this.commonService.loading.show(thiss.loading);
    this.articleService.GetArticlesByTag(event.tag, event.page, 6)
      .toPromise()
      .then((response: any) => {
        thiss.posts = response.slice();
        let oldURL = document.URL;
        let newURL = document.URL.substring(0, document.URL.lastIndexOf('/')) + '/' + event.page;

        window.history.pushState({}, null, newURL);
        this.commonService.gotoTop();
        thiss.commonService.loading.hide(thiss.loading);
      })
      .catch(reason => {
        console.log(reason);
        thiss.commonService.loading.hide(thiss.loading);
      });
  }

  paginaInvalida(event) {
    this.error = event;
    this.posts = [];
  }

  getCount() {
    const thiss = this;
    this.articleService.GetCountOfArticles()
      .toPromise()
      .then((response: any) => {
        thiss.count = response;
      });
  }
}
