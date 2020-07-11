import { Component, OnInit, Input } from '@angular/core';
import { ArticleViewModel } from '../../viewModels/article.viewModel';


@Component({
  selector: 'article-post',
  templateUrl: './article-post.component.html',
  styleUrls: ['./article-post.component.scss']
})
export class ArticlePostComponent implements OnInit {
  @Input() posts: ArticleViewModel[];

  constructor() { }

  ngOnInit() {
  }

  openUrl(url) {
    window.open(url);
  }

}
