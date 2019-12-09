import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { CarouselComponent } from './carousel/carousel/carousel.component';
import { HighlightsComponent } from './highlights/highlights.component';



@NgModule({
  declarations: [HomeComponent, CarouselComponent, HighlightsComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    HomeComponent  
  ]
})
export class HomeModule { }
