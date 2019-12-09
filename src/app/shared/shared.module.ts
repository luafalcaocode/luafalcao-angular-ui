import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SearchFieldComponent } from './search-field/search-field.component';

import { FormsModule } from '@angular/forms';
import { ModalModule } from '../modal/modal.module';
import { MenuComponent } from './header/menu/menu.component';


@NgModule({
  declarations: [HeaderComponent, FooterComponent, SearchFieldComponent, MenuComponent],
  imports: [
    CommonModule,
    FormsModule,
    ModalModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SearchFieldComponent
  ]
})
export class SharedModule { }
