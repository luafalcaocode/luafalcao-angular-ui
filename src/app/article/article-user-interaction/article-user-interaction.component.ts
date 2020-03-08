import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'article-user-interaction',
  templateUrl: './article-user-interaction.component.html',
  styleUrls: ['./article-user-interaction.component.scss']
})
export class ArticleUserInteractionComponent implements OnInit {

  @Input() numberOfLikes: number;
  @Input() numberOfComments: number;

  @Output() like : EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  onClick_like() {
    this.like.emit(this.numberOfLikes + 1);
  }


  ngOnInit() {
  }

  scrollToElement(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth'});
  }

}
