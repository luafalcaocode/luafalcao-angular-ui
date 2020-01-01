import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelComponent } from './panel.component';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home/home.component';



@NgModule({
  declarations: [PanelComponent, HomeComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    PanelComponent
  ]
})
export class PanelModule { }
