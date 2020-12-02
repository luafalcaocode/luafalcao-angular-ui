import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Input } from '@angular/core';


@Component({
  selector: 'article-comment',
  templateUrl: './article-comment.component.html',
  styleUrls: ['./article-comment.component.scss']
})
export class ArticleCommentComponent implements OnInit {
  comentario: any;
  @Input() isLoading: boolean;
  @Input() clean: boolean;

  @Output() post: EventEmitter<any> = new EventEmitter<any>();

  constructor() { 
    this.comentario = new Object();
  }

  ngOnInit() {

  }

  ngOnChanges() {
    if (this.clean) {      
      this.comentario = {};
    }
  }


  enviarComentario(comentario: any) {   
    this.post.emit(comentario);
  }
}
