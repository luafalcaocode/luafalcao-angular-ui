import { Component, OnInit, Input, HostListener } from '@angular/core';
import { Router } from '@angular/router';

import { MobileMenuService } from '../../services/layout/mobile-menu.service';
import { ModalService } from '../../services/layout/modal.service';
import { MenuService } from '../../services/layout/menu.service';
import { LoginService } from '../../services/login.service';

import { MenuViewModel } from '../../viewModels/menu.viewModel';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public menuProjetos: MenuViewModel[];
  public menuServicos: MenuViewModel[];
  public menuBlogs: MenuViewModel[];
  public id: string;
  public isMenuServicesOpen: boolean;
  public isMenuProjectsOpen: boolean;
  public isMenuBlogsOpen: boolean;
  public isMenuLoggedOpen: boolean;
  public isSearchTooltipVisible: boolean;
  public isUserIconsVisibile: boolean = true;
  public isArticleMenuVisible: boolean;
  public scrollMax: any = 0;

  @Input() backgroundColor: string;
  @Input() backgroundColorMobile: string;
  @Input() backgroundMobileContainer: string;

  constructor(public mobileMenuService: MobileMenuService, public modalService: ModalService, public menuService: MenuService, public loginService: LoginService, public router: Router) {

  }


  ngOnInit() {
    this.menuProjetos = [
      new MenuViewModel(1, 'Projetos Pessoais', '/projetos/pessoais', true),
      new MenuViewModel(2, 'Projetos Empresariais', '/projetos/empresariais', true)
    ];

    this.menuServicos = [
      new MenuViewModel(1, 'Para a sua empresa', '/servicos/para-sua-empresa', false),
      new MenuViewModel(2, 'Para a comunidade', '/servicos/para-a-comunidade', false)
      //new MenuViewModel(3, 'Para outras aplicações', 'link do projeto pessoal aqui', true)//,
      // new MenuViewModel(3, 'De um jogo eletrônico', 'link do projeto pessoal aqui', true)
    ];

    this.menuBlogs = [
      new MenuViewModel(1, 'Diário de um engenheiro de software', '/blogs/diario-de-um-engenheiro-software', false),
      new MenuViewModel(2, 'Next Gameplay', '/blogs/next-gameplay', false)

    ];

    this.mobileMenuService.isNavMobileOpen = false;
  }

  showLoginModal() {
    this.modalService.show();
  }

  openContainer() {
    let container = document.getElementById('searchFieldContainer');
    container.classList.remove('fadeOut');
    container.classList.add('fadeIn');

    document.getElementsByTagName('body')[0].style.overflow = 'hidden';
  }

  showMenu(id: string) {
    if (id.toLowerCase().includes('projetos')) {
      this.isMenuProjectsOpen = true;
      this.isMenuServicesOpen = false;
      this.isMenuBlogsOpen = false;
    }

    if (id.toLowerCase().includes('servicos')) {
      this.isMenuServicesOpen = true;
      this.isMenuProjectsOpen = false;
      this.isMenuBlogsOpen = false;
    }

    if (id.toLowerCase().includes('blogs')) {
      this.isMenuBlogsOpen = true;
      this.isMenuProjectsOpen = false;
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

    if (id.toLowerCase().includes('blogs')) {
      this.isMenuBlogsOpen = false;
    }
    this.menuService.hideMenu(id);
  }

  showLoggedMenu() {
    this.isMenuLoggedOpen = !this.isMenuLoggedOpen;

    if (this.isMenuLoggedOpen) {
      document.getElementById('menuLogged').classList.add('fadeIn');
      document.getElementById('menuLogged').classList.remove('fadeOut');
    }
    else {
      document.getElementById('menuLogged').classList.add('fadeOut');
      document.getElementById('menuLogged').classList.remove('fadeIn');
    }
  }

  hideLoggedMenu() {
    this.isMenuLoggedOpen = false;
    document.getElementById('menuLogged').classList.add('fadeOut');
    document.getElementById('menuLogged').classList.remove('fadeIn');
  }

  navigateTo(path: string) {
    this.router.navigate(['/' + path]);
    window.scrollTo(0, 0);
  }

  onSelectItem(event) {
    this.hideMenu(event);
  }

  // @HostListener('window:scroll', ['$event'])
  // onScroll(event) {
  //   const header = document.querySelector('header');
  //   if (window.scrollY > this.scrollMax) {
  //     header.style.position = 'relative';
  //     header.style.top = '-100px';
  //   }
  //   else {
  //     header.style.position = 'fixed';
  //     header.style.top = '0px';
  //   }

  //   this.scrollMax = window.scrollY;
  // }
}
