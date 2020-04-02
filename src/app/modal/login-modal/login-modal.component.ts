import { Component, OnInit } from '@angular/core';

import { ModalService } from '../../services/layout/modal.service';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss']
})
export class LoginModalComponent implements OnInit {
  user: any = {
    login : '',
    password: ''
  };

  constructor(public modalService: ModalService, public loginService: LoginService) { }

  ngOnInit() {
    
  }

  hide() {
    this.modalService.hide();
  }

  login() {
    // em uma aplicação real NUNCA FAÇA ISSO! É apenas uma gambiarra usada para testes durante o desenvolvimento (don't do this ever!!!)
    if (this.user.login == 'luafalcao' && this.user.password == 'laraCroft!') {
      this.loginService.login();
      this.hide();
    }    
  }
}
