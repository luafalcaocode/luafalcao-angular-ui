import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'article-comentary',
  templateUrl: './article-comentary.component.html',
  styleUrls: ['./article-comentary.component.scss']
})
export class ArticleComentaryComponent implements OnInit {
  modelForm: any;
  numberOfComments: number;
  @Input() comments: any[];

  @Output() comment: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
    this.modelForm = new Object();
    
  }

  onComment() {
    this.comment.emit(this.modelForm);
  }
}
