
import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { MenuService } from '../../services/layout/menu.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from '../article.service';
import { ArticleViewModel } from '../../viewModels/article.viewModel';
import { LoaderService } from '../../services/layout/loader.service';
import { LoadingService } from '../../services/layout/loading.service';
import { CommonService } from '../../services/layout/common.service';
import { RequestService } from '../../services/request.service';


@Component({
  selector: 'article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss']
})
export class ArticleDetailComponent implements OnInit {
  allArticles: any[];
  comments: any[];
  cleanCommentForm: boolean;
  articleDetails: ArticleViewModel;
  showModal: boolean;
  commentFillValidations: string[];

  isLoading: boolean;
  isLoadingRequest: boolean;
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
    public articleService: ArticleService,
    public apiService: RequestService) {
    this.defaultStyle = {};
    this.articleDetails = new ArticleViewModel();
  }

  ngOnInit() {
    const header = this.elementRef.nativeElement.querySelector('header');
    this.loading = this.elementRef.nativeElement.querySelector('.page-loading');
    this.commonService.initializePage();
    this.commonService.setLayout();

    this.router.params.subscribe(params => {
      this.id = params.id;
      this.articleService.initializeArticleDetails(params.nome, params.id)
        .toPromise()
        .then((message: any) => {
          console.log(message);
          this.articleDetails.id = message.data.id;
          this.articleDetails.descricao = message.data.descricao;
          this.articleDetails.titulo = message.data.titulo;
          this.articleDetails.dataPublicacao = message.data.dataPublicacao;
          this.blogName = this.articleService.blogName;
          this.pageName = this.articleService.pageName;
          this.autor = this.articleService.autor;
          this.articleDetails.numeroLikes = message.data.numeroLikes;

          header.style.backgroundImage = `url(../../../assets/backgrounds/blogs/${this.pageName}/capa.jpeg)`;

          this.articleDetails.thumbnail = 'assets/backgrounds/blogs/[nome_do_blog]/posts/[id_post]/thumbnail.jpg';
          this.articleDetails.thumbnail = this.articleDetails.thumbnail.replace('[nome_do_blog]', this.pageName).replace('[id_post]', message.data.id);

          this.articleService.obterComentariosDoArtigo(params.id)
            .toPromise()
            .then((message: any) => {
              this.comments = message.data;
            });

          this.loadingService.hide(this.loading);
        });
    });
  }

  enviarComentario(comentario) {
    this.isLoadingRequest = true;
    comentario.artigoId = this.id;
    this.articleService.enviarNovoComentario(comentario, this.id)
      .toPromise()
      .then((message: any) => {
        setTimeout(() => {
          this.isLoadingRequest = false;
          this.cleanCommentForm = true;
        },
          1000);

        this.articleService.obterComentariosDoArtigo(this.id)
          .toPromise()
          .then((message: any) => {
            this.comments = message.data.reverse();
            document.querySelector('.comments-number-container').scrollIntoView({ behavior: 'smooth' });
          });
      })
      .catch((reason: any) => {
        setTimeout(() => {
          this.commentFillValidations = reason.error.validations;
          this.isLoadingRequest = false;
          this.showModal = true;
        },
          1000)
      });
  }

  like(articleDetails: ArticleViewModel) {
      this.articleService.like(articleDetails)
        .toPromise()
        .then((message: any) => {
          if (message.success) {
            this.articleDetails.numeroLikes++;
            localStorage.setItem('jaCurtiu', 'true');
          }
      });
  }

  onConfirm(event) {
    this.showModal = false;
  }
}
