import { Component, OnInit } from '@angular/core';

import { MobileMenuService } from '../../services/layout/mobile-menu.service';
import { ModalService } from '../../services/layout/modal.service';
import { MenuService } from '../../services/layout/menu.service';

import { MenuViewModel } from '../../viewModels/menu.viewModel';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  private menuProjetos: MenuViewModel[];
  private menuServicos: string[];
  private id: string;
  private isMenuServicesOpen: boolean;
  private isMenuProjectsOpen: boolean;

  constructor(public mobileMenuService: MobileMenuService, public modalService: ModalService, public menuService: MenuService) {
    
  }

  ngOnInit() {
    this.menuProjetos = [
      new MenuViewModel(1, 'Projetos Corporativos', 'link do projeto corporativo aqui'),
      new MenuViewModel(1, 'Projetos Pessoais', 'link do projeto pessoal aqui')
    ];

    this.menuServicos = [
      'Serviço 1',
      'Serviço 2',
      'Serviço 3',
      'Serviço 4',
      'Serviço 5'
    ];
  }

  showLoginModal() {
    this.modalService.show();
  }

  openContainer() {
    let container =  document.getElementById('searchFieldContainer');
    container.classList.remove('fadeOut');
    container.classList.add('fadeIn');

    document.getElementsByTagName('body')[0].style.overflow = 'hidden'; 
  }  

  showMenu(id: string) {
    if (id.toLowerCase().includes('projetos')) {
      this.isMenuProjectsOpen = true;
      this.isMenuServicesOpen = false;
    }

    if (id.toLowerCase().includes('servicos')) {
      this.isMenuServicesOpen = true;
      this.isMenuProjectsOpen = false;
    }

    this.menuService.showMenu(id);
  }

  hideMenu(id: string) {
    if (id.toLowerCase().includes('projetos')) {
      this.isMenuProjectsOpen = false;
    }

    if (id.toLowerCase().includes('servicos')) {
      this.isMenuServicesOpen = false;
    }
    this.menuService.hideMenu(id);
  }
}
