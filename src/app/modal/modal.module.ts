import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginModalComponent } from './login-modal/login-modal.component';



@NgModule({
  declarations: [LoginModalComponent],
  imports: [
    FormsModule,
    CommonModule
  ],
  exports: [
    LoginModalComponent
  ]
})
export class ModalModule { }
