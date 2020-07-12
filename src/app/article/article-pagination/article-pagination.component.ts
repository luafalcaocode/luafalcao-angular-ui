import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { ArticleService } from '../../services/pages/article.service';
import { ArticleViewModel } from '../../viewModels/article.viewModel';

@Component({
  selector: 'article-pagination',
  templateUrl: './article-pagination.component.html',
  styleUrls: ['./article-pagination.component.scss']
})
export class ArticlePaginationComponent implements OnInit {
  @Input() posts: ArticleViewModel[];

  constructor(public articleService: ArticleService, public elementRef: ElementRef) { }

  ngOnInit() {

  }

  activePage(id) {
    const lista = this.elementRef.nativeElement.querySelectorAll('li');
    const elem = (<HTMLElement> document.getElementById(id));

    Array.from(lista).forEach((item: any) => {
      item.classList.remove('active');
    });

    elem.classList.add('active');  ;
  }
}
