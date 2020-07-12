import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { ArticleViewModel } from '../viewModels/article.viewModel';
import { LoaderService } from '../services/layout/loader.service';
import { LoadingService } from '../services/layout/loading.service';
import { CommonService } from '../services/layout/common.service';
import { MenuService } from '../services/layout/menu.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from '../services/pages/article.service';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  allArticles: any[];
  comments: any[];
  isLoading: boolean;
  id: number;
  posts: ArticleViewModel[];
  blogName: string;
  defaultStyle: any;

  public loading: any;
  public articles: ArticleViewModel[];
  public selectedArticle: ArticleViewModel;
  public featuredArticles: ArticleViewModel[];

  constructor(public loaderService: LoaderService,
              public commonService: CommonService,
              public menuService: MenuService,
              public router: ActivatedRoute,
              public navigator: Router,
              public loadingService: LoadingService,
              public elementRef: ElementRef,
              public articleService: ArticleService) {
    this.defaultStyle = {};
  }

  ngOnInit() {
    this.loading = this.elementRef.nativeElement.querySelector('.page-loading');
    this.commonService.setLayout();
    this.router.params.subscribe(param => {
      this.articleService.initialize(param.screen);
      this.posts = this.articleService.posts;
      this.featuredArticles = this.articleService.featuredArticles;
      this.blogName = this.articleService.blogName;
      this.loadingService.hide(this.loading);
    });
  }

  ngOnDestroy() {
   this.commonService.unsetLayout();
  }
}
