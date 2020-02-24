import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleComponent } from './article.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [ArticleComponent, HeaderComponent],
  imports: [
    CommonModule,
  ],
  exports: [
    ArticleComponent
  ]
})
export class ArticleModule { }
