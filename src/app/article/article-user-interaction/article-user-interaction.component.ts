import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'article-user-interaction',
  templateUrl: './article-user-interaction.component.html',
  styleUrls: ['./article-user-interaction.component.scss']
})
export class ArticleUserInteractionComponent implements OnInit {

  @Input() numberOfLikes: number;
  @Input() numberOfComments: number;

  constructor() { }

  ngOnInit() {
  }

  scrollToElement(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth'});
  }

}
