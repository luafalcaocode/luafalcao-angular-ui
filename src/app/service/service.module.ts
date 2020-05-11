import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReusableModule } from '../reusable/reusable.module';
import { SharedModule } from '../shared/shared.module';
import { ServiceComponent } from './service.component';
import { NiceGalleryComponent } from './nice-gallery/nice-gallery.component';
import { CountComponent } from './count/count.component';
import { OrderComponent } from './order/order.component';



@NgModule({
  declarations: [ServiceComponent, NiceGalleryComponent, CountComponent, OrderComponent],
  imports: [
    CommonModule,
    ReusableModule,
    SharedModule
  ],
  exports: [
    ServiceComponent,
    NiceGalleryComponent,
    CountComponent
  ]
})
export class ServiceModule { }