import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReusableModule } from '../reusable/reusable.module';
import { SharedModule } from '../shared/shared.module';
import { ServiceComponent } from './service.component';
import { NiceGalleryComponent } from './nice-gallery/nice-gallery.component';



@NgModule({
  declarations: [ServiceComponent, NiceGalleryComponent],
  imports: [
    CommonModule,
    ReusableModule,
    SharedModule
  ],
  exports: [
    ServiceComponent,
    NiceGalleryComponent
  ]
})
export class ServiceModule { }
