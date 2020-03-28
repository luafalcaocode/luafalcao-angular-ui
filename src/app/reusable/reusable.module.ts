import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlinkComponent } from './blink/blink.component';
import { CardComponent } from './card/card.component';



@NgModule({
  declarations: [BlinkComponent, CardComponent],
  imports: [
    CommonModule
  ],
  exports: [
    BlinkComponent,
    CardComponent
  ]
})
export class ReusableModule { }
