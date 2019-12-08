import { Component, OnInit } from '@angular/core';

import { ModalService } from '../../services/layout/modal.service';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss']
})
export class LoginModalComponent implements OnInit {

  constructor(public modalService: ModalService) { }

  ngOnInit() {
    
  }

  hide() {
    this.modalService.hide();
  }

}
