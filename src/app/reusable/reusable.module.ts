import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlinkComponent } from './blink/blink.component';
import { CardComponent } from './card/card.component';
import { MiniLoadingComponent } from './mini-loading/mini-loading.component';
import { PageLoadingComponent } from './page-loading/page-loading.component';



@NgModule({
  declarations: [BlinkComponent, CardComponent, MiniLoadingComponent, PageLoadingComponent],
  imports: [
    CommonModule
  ],
  exports: [
    BlinkComponent,
    CardComponent,
    MiniLoadingComponent,
    PageLoadingComponent
  ]
})
export class ReusableModule { }
