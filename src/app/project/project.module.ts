import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './project.component';
import { ReusableModule } from '../reusable/reusable.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ProjectComponent],
  imports: [
    CommonModule,
    ReusableModule,
    SharedModule
  ],
  exports :[
    ProjectComponent
  ]
})
export class ProjectModule { }
