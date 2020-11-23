import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'article-comment',
  templateUrl: './article-comment.component.html',
  styleUrls: ['./article-comment.component.scss']
})
export class ArticleCommentComponent implements OnInit {
  comentario: any;
  @Output() post: EventEmitter<any> = new EventEmitter<any>();

  constructor() { 
    this.comentario = new Object();
  }

  ngOnInit() {
  }

  enviarComentario(comentario: any) {   
    this.post.emit(comentario);
  }
}
