import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '../article.service';

@Component({
  selector: 'article-comment-list',
  templateUrl: './article-comment-list.component.html',
  styleUrls: ['./article-comment-list.component.scss']
})
export class ArticleCommentListComponent implements OnInit {

  @Input() comentarios: any[];

  constructor(private service: ArticleService, private router: ActivatedRoute) { 
    this.comentarios = [];
  }

  ngOnInit() {
  
  }
}
