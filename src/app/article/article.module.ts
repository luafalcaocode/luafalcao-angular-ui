import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { ArticleComponent } from './article.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { ReusableModule } from '../reusable/reusable.module';
import { ArticlePostComponent } from './article-post/article-post.component';
import { ArticlePaginationComponent } from './article-pagination/article-pagination.component';

@NgModule({
  declarations: [ArticleComponent, ArticleDetailComponent, ArticlePostComponent, ArticlePaginationComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReusableModule
  ],
  exports: [
    ArticleComponent
  ]
})
export class ArticleModule { }
