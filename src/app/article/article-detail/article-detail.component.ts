
import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { MenuService } from '../../services/layout/menu.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from '../article.service';
import { ArticleViewModel } from '../../viewModels/article.viewModel';
import { LoaderService } from '../../services/layout/loader.service';
import { LoadingService } from '../../services/layout/loading.service';
import { CommonService } from '../../services/layout/common.service';


@Component({
  selector: 'article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss']
})
export class ArticleDetailComponent implements OnInit {
  allArticles: any[];
  comments: any[];
  articleDetails: ArticleViewModel;

  isLoading: boolean;
  id: number;
  defaultStyle: any;
  public loading: any;

  blogName: string;
  pageName: string;
  autor: string;
  idPost = 1;


  constructor(public loaderService: LoaderService,
    public commonService: CommonService,
    public router: ActivatedRoute,
    public loadingService: LoadingService,
    public elementRef: ElementRef,
    public articleService: ArticleService) {
    this.defaultStyle = {};
  }

  ngOnInit() {
    const thiss = this;
    const header = this.elementRef.nativeElement.querySelector('header');

    this.articleDetails  = new ArticleViewModel();

    this.loading = this.elementRef.nativeElement.querySelector('.page-loading');
    this.commonService. initializePage();
    this.commonService.setLayout();

    this.blogName = 'Next Gameplay';
    this.pageName = 'next-gameplay';
    this.autor = 'Luã Falcão';


    this.articleDetails.id = 3;
    this.articleDetails.descricao = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
    this.articleDetails.titulo = 'Especial: Valkyrie Profile';
    this.articleDetails.dataPublicacao = '15 de Setembro de 2020';
    this.articleDetails.thumbnail = 'assets/backgrounds/blogs/next-gameplay/posts/17/thumbnail.jpg';

    header.style.backgroundImage = `url(../../../assets/backgrounds/blogs/${this.pageName}/posts/${this.articleDetails.id}/thumbnail.jpg)`;
    header.style.backgroundPosition = 'center top';


    // fazer um GET na API por ID (que vem da URL) para pegar o ID do artigo
    this.router.params.subscribe(params => this.id = params.id);
    console.log(this.id);
    this.loadingService.hide(this.loading);

  }
}
