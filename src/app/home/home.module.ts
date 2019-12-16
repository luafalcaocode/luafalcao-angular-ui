import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { CarouselComponent } from './carousel/carousel/carousel.component';
import { HighlightsComponent } from './highlights/highlights.component';
import { JobsComponent } from './jobs/jobs.component';
import { ArticlesComponent } from './articles/articles.component';
import { ChatComponent } from './chat/chat.component';
import { DarkPlaceComponent } from './dark-place/dark-place.component';



@NgModule({
  declarations: [HomeComponent, CarouselComponent, HighlightsComponent, JobsComponent, ArticlesComponent, ChatComponent, DarkPlaceComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    HomeComponent  
  ]
})
export class HomeModule { }
