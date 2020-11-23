import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '../article.service';

@Component({
  selector: 'article-comment-list',
  templateUrl: './article-comment-list.component.html',
  styleUrls: ['./article-comment-list.component.scss']
})
export class ArticleCommentListComponent implements OnInit {

  comentarios: any[];

  constructor(private service: ArticleService, private router: ActivatedRoute) { }

  ngOnInit() {
    this.router.params.subscribe(params => {
      this.service.obterComentariosDoArtigo(params.id)
      .toPromise()
      .then((message: any) => {
        this.comentarios = message.data;
      });       
    })
  }

}
