import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleComponent } from './article.component';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from '../shared/shared.module';




@NgModule({
  declarations: [ArticleComponent, HeaderComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    ArticleComponent
  ]
})
export class ArticleModule { }
