import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlinkComponent } from './blink/blink.component';
import { CardComponent } from './card/card.component';
import { MiniLoadingComponent } from './mini-loading/mini-loading.component';
import { PageLoadingComponent } from './page-loading/page-loading.component';
import { WriterComponent } from './writer/writer.component';



@NgModule({
  declarations: [BlinkComponent, CardComponent, MiniLoadingComponent, PageLoadingComponent, WriterComponent],
  imports: [
    CommonModule
  ],
  exports: [
    BlinkComponent,
    CardComponent,
    MiniLoadingComponent,
    PageLoadingComponent,
    WriterComponent
  ]
})
export class ReusableModule { }
