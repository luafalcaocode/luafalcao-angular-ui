import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnterpriseComponent } from './enterprise/enterprise.component';



@NgModule({
  declarations: [EnterpriseComponent],
  imports: [
    CommonModule
  ],
  exports: [
    EnterpriseComponent
  ]
})
export class ProjectsModule { }
