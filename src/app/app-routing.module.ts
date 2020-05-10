import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PanelComponent } from './panel/panel.component';
import { HomeComponent } from './home/home.component';
import { ArticleComponent } from './article/article.component';
import { ArticleDetailComponent } from './article/article-detail/article-detail.component';
import { AboutComponent } from './about/about.component';
import { ProjectComponent } from './project/project.component';
import { ServiceComponent } from './service/service.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
  // {
  //   path: 'panel',
  //   component: PanelComponent
  // },
  // {
  //   path: 'blogs/diario-de-um-engenheiro-software/:id',
  //   component: ArticleDetailComponent
  // },
  // {
  //   path: 'blogs/diario-de-um-engenheiro-software',
  //   component: ArticleComponent
  //  },
  ,
  {
    path: 'sobre',
    component: AboutComponent
  },
  // {
  // //   path: 'projetos/:screen',
  // //   component: ProjectComponent
  // // },
  
  {
    path: 'servicos/:screen',
    component: ServiceComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
