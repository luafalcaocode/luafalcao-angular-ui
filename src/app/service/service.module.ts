import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReusableModule } from '../reusable/reusable.module';
import { SharedModule } from '../shared/shared.module';
import { ServiceComponent } from './service.component';
import { NiceGalleryComponent } from './nice-gallery/nice-gallery.component';
import { OrderComponent } from './order/order.component';


@NgModule({
  declarations: [ServiceComponent, NiceGalleryComponent, OrderComponent],
  imports: [
    CommonModule,
    ReusableModule,
    SharedModule,
    FormsModule
  ],
  exports: [
    ServiceComponent,
    NiceGalleryComponent
  ]
})
export class ServiceModule { }
