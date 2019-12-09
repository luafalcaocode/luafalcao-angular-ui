import { Component, OnInit } from '@angular/core';

import { MobileMenuService } from '../../services/layout/mobile-menu.service';
import { ModalService } from '../../services/layout/modal.service';
import { MenuService } from '../../services/layout/menu.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  private menu: string[];
  private id: string;

  constructor(public mobileMenuService: MobileMenuService, public modalService: ModalService, public menuService: MenuService) {
    
  }

  ngOnInit() {
    this.menu = [
      'Item 1',
      'Item 2',
      'Item 3',
      'Item 4',
      'Item 5'
    ]
  }

  showLoginModal() {
    this.modalService.show();
  }

  openContainer() {
    let container =  document.getElementById('searchFieldContainer');
    container.classList.remove('fadeOut');
    container.classList.add('fadeInTransparent');

    document.getElementsByTagName('body')[0].style.overflow = 'hidden'; 
  }  

  showMenu(id: string) {
    this.menuService.showMenu(id);
  }
}
