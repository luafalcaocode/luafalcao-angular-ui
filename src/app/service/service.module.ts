import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReusableModule } from '../reusable/reusable.module';
import { SharedModule } from '../shared/shared.module';
import { ServiceComponent } from './service.component';



@NgModule({
  declarations: [ServiceComponent],
  imports: [
    CommonModule,
    ReusableModule,
    SharedModule
  ],
  exports: [
    ServiceComponent
  ]
})
export class ServiceModule { }
