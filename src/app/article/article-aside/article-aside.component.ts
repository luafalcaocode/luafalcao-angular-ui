import { Component, OnInit, Input } from '@angular/core';
import { ArticleViewModel } from '../../viewModels/article.viewModel';
import { CommonService } from '../../services/layout/common.service';

@Component({
  selector: 'article-aside',
  templateUrl: './article-aside.component.html',
  styleUrls: ['./article-aside.component.scss']
})
export class ArticleAsideComponent implements OnInit {
  @Input() featuredArticles: ArticleViewModel[];
  constructor(public commonService: CommonService) { }

  ngOnInit() {
  }

}
