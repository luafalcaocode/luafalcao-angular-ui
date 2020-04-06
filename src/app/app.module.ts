import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PanelModule } from './panel/panel.module';
import { ArticleModule } from './article/article.module';
import { AboutModule } from './about/about.module';
import { ProjectModule } from './project/project.module';
import { ReusableModule } from './reusable/reusable.module';
import { ServiceModule } from './service/service.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    BrowserAnimationsModule,
    PanelModule,
    ArticleModule,
    AboutModule,
    ReusableModule,
    SharedModule,
    ProjectModule,
    ServiceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
