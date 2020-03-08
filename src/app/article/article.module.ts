import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ArticleComponent } from './article.component';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from '../shared/shared.module';
import { ModalModule } from '../modal/modal.module';
import { ArticleComentaryComponent } from './article-comentary/article-comentary.component';




@NgModule({
  declarations: [ArticleComponent, HeaderComponent, ArticleComentaryComponent],
  imports: [
    CommonModule,
    SharedModule,
    ModalModule,
    FormsModule
  ],
  exports: [
    ArticleComponent
  ]
})
export class ArticleModule { }
