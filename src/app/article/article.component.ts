import { Component, OnInit } from '@angular/core';
import { ArticleViewModel } from '../viewModels/article.viewModel';
import { ArticleMock } from './mocks/article.mock';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  article: ArticleMock; 
  constructor() { }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.article = new ArticleMock();
  }

  scrollToElement(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth'});
  }

}
