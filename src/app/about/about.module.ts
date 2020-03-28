import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { TimelineComponent } from './timeline/timeline.component';
import { SharedModule } from '../shared/shared.module';
import { ReusableModule } from '../reusable/reusable.module';


@NgModule({
  declarations: [AboutComponent, TimelineComponent],
  imports: [
    CommonModule,
    SharedModule,
    ReusableModule
  ],
  exports: [
    AboutComponent
  ]
})
export class AboutModule { }
