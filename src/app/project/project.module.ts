import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './project.component';
import { ReusableModule } from '../reusable/reusable.module';


@NgModule({
  declarations: [ProjectComponent],
  imports: [
    CommonModule,
    ReusableModule
  ]
})
export class ProjectModule { }
