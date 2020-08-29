import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { environment } from '../../../environments/environment';
import { ArticleViewModel } from '../../viewModels/article.viewModel';


@Component({
  selector: 'article-post',
  templateUrl: './article-post.component.html',
  styleUrls: ['./article-post.component.scss']
})
export class ArticlePostComponent implements OnInit {
  @Input() posts: ArticleViewModel[];
  @Input() featuredArticles: ArticleViewModel[];




  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.posts != null && this.posts.length > 0)
      console.log(changes);
  }

  openUrl(url) {
    window.open(url);
  }

}
