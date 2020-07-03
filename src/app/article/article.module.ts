import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ArticleComponent } from './article.component';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from '../shared/shared.module';
import { ModalModule } from '../modal/modal.module';
import { ArticleComentaryComponent } from './article-comentary/article-comentary.component';
import { ArticleUserInteractionComponent } from './article-user-interaction/article-user-interaction.component';
import { ArticleAllMenuComponent } from './article-all-menu/article-all-menu.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { ReusableModule } from '../reusable/reusable.module';




@NgModule({
  declarations: [ArticleComponent, HeaderComponent, ArticleComentaryComponent, ArticleUserInteractionComponent, ArticleAllMenuComponent, ArticleDetailComponent],
  imports: [
    CommonModule,
    SharedModule,
    ModalModule,
    FormsModule,
    ReusableModule
  ],
  exports: [
    ArticleComponent
  ]
})
export class ArticleModule { }
