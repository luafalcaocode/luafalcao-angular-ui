import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SearchFieldComponent } from './search-field/search-field.component';



@NgModule({
  declarations: [HeaderComponent, FooterComponent, SearchFieldComponent],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SearchFieldComponent
  ]
})
export class SharedModule { }
