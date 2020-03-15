import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PanelComponent } from './panel/panel.component';
import { HomeComponent } from './home/home.component';
import { ArticleComponent } from './article/article.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'panel',
    component: PanelComponent
  },
  {
    path: 'articles/:id',
    component: ArticleComponent
  },
  {
    path: 'articles',
    component: ArticleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
