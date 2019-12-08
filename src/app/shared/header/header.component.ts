import { Component, OnInit } from '@angular/core';

import { MobileMenuService } from '../../services/layout/mobile-menu.service';
import { ModalService } from '../../services/layout/modal.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
 

  constructor(public mobileMenuService: MobileMenuService, public modalService: ModalService) {
    
  }

  ngOnInit() {
  }

  showLoginModal() {
    this.modalService.show();
  }

  
}
