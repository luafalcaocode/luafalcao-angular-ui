import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SearchFieldComponent } from './search-field/search-field.component';

import { FormsModule } from '@angular/forms';
import { ModalModule } from '../modal/modal.module';
import { MenuComponent } from './header/menu/menu.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { MenuLoggedComponent } from './header/menu-logged/menu-logged.component';


@NgModule({
  declarations: [HeaderComponent, FooterComponent, SearchFieldComponent, MenuComponent, TooltipComponent, MenuLoggedComponent],
  imports: [
    CommonModule,
    FormsModule,
    ModalModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SearchFieldComponent,
    TooltipComponent
  ]
})
export class SharedModule { }
