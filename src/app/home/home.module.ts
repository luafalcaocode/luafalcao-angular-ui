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
import { TechnolgiesComponent } from './technolgies/technolgies.component';
import { FormsModule } from '@angular/forms';
import { ReusableModule } from '../reusable/reusable.module';



@NgModule({
  declarations: [HomeComponent, CarouselComponent, HighlightsComponent, JobsComponent, ArticlesComponent, ChatComponent, DarkPlaceComponent, TechnolgiesComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReusableModule
  ],
  exports: [
    HomeComponent  
  ]
})
export class HomeModule { }
