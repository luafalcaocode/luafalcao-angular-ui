import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { ArticleViewModel } from '../viewModels/article.viewModel';
import { LoaderService } from '../services/layout/loader.service';
import { LoadingService } from '../services/layout/loading.service';
import { CommonService } from '../services/layout/common.service';
import { MenuService } from '../services/layout/menu.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from './article.service';
import { RequestService } from '../services/request.service';
import { HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

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
  pageName: string;
  blogImagesFolder: string = environment.assets.blogs;

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
    const header = this.elementRef.nativeElement.querySelector('header');
    this.loading = this.elementRef.nativeElement.querySelector('.page-loading');
    this.commonService.setLayout();

    this.router.params.subscribe(param => {
      this.pageName = param.nome;
      this.articleService.initialize(param.nome)
        .toPromise()
        .then((message: any) => {
          this.error = null;
          this.blogName = this.articleService.blogName;  
          this.posts = message.data.slice();        
          this.commonService.gotoTop();
          this.loadingService.hide(this.loading);
        }).then(() => {
          this.getCount(this.pageName);
        })
        .then(() => {
          this.obterUltimasPublicacoes(this.pageName);
        })
        .catch((reason: any) => {
          this.error = {
            title: 'Ops! :(',
            description: reason.error.description
          };
          
          this.posts = [];
          
          this.loadingService.hide(this.loading);
        })
        .finally(() => {
          header.style.backgroundImage = `url(../../../assets/backgrounds/blogs/${this.pageName}/capa.jpeg)`;
          
        });
    });
  }

  ngOnDestroy() {
    this.commonService.unsetLayout();
  }

  paginar(event) {
    const thiss = this;
    this.commonService.loading.show(thiss.loading);
    this.articleService.obterArtigosPorBlog(this.commonService.mapNameToCategory(event.tag), event.page, 6)
      .toPromise()
      .then((response: any) => {
        thiss.posts = response.data.slice();
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

  getCount(blog) {
    const thiss = this;
    this.articleService.obterQuantidadeDeArtigos(this.commonService.mapNameToCategory(blog))
      .toPromise()
      .then((response: any) => {
        thiss.count = response.data;
      });
  }

  obterUltimasPublicacoes(blog: string) {
    this.articleService.obterUltimasPublicacoes(this.commonService.mapNameToCategory(blog))
      .toPromise()
      .then((message: any) => {
        this.featuredArticles = message.data.slice();
      });
  }

  openUrl(url) {
    url = url.replace('[nome]', this.articleService.pageName);
    this.commonService.navigateHere(url);
  }
}
