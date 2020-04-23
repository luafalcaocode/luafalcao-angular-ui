import { Component, OnInit } from '@angular/core';
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

  constructor(public mobileMenuService: MobileMenuService, public modalService: ModalService, public menuService: MenuService, public loginService: LoginService, public router: Router) {

  }


  ngOnInit() {
    this.menuProjetos = [
      new MenuViewModel(1, 'Projetos Empresariais', '', true),
      new MenuViewModel(2, 'Projetos Pessoais', '/projetos/pessoais', true)//,
      // new MenuViewModel(3, 'Projetos de Contos Literários', 'link do projeto pessoal aqui'),
      // new MenuViewModel(4, 'Redator de Conteúdo para Web', 'link do projeto pessoal aqui')

    ];

    this.menuServicos = [
      new MenuViewModel(1, 'Para você', '/servicos/para-voce', true),
      new MenuViewModel(2, 'Para a comunidade', 'link do projeto pessoal aqui', true),
      new MenuViewModel(3, 'Para outras aplicações', 'link do projeto pessoal aqui', true)//,
      // new MenuViewModel(3, 'De um jogo eletrônico', 'link do projeto pessoal aqui', true)
    ];

    this.menuBlogs = [
      new MenuViewModel(1, 'Diário de um engenheiro de software', '/blogs/diario-de-um-engenheiro-software', true),
      new MenuViewModel(2, 'Padrões de Projeto e onde habitam', '/blogs/padroes-projetos-onde-habitam', true),
      new MenuViewModel(2, 'Histórias Não Extraordinárias', '/blogs/hne', true),
    ];

    this.mobileMenuService.isNavMobileOpen = false;

    const URL = document.URL;
    if (URL.includes('articles')) {
      this.isUserIconsVisibile = false;
    }
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

  showTooltip(event) {
    switch (event.target.id) {
      case 'pesquisar':
        document.getElementById('tooltipPesquisar').classList.add('fadeIn');
        document.getElementById('tooltipPesquisar').classList.remove('fadeOut');
        this.isSearchTooltipVisible = true;
        break;

      case 'youTube':
        document.getElementById('tooltipYouTube').classList.add('fadeIn');
        document.getElementById('tooltipYouTube').classList.remove('fadeOut');
        this.isSearchTooltipVisible = true;
        break;

      case 'idiomas':
        document.getElementById('tooltipIdiomas').classList.add('fadeIn');
        document.getElementById('tooltipIdiomas').classList.remove('fadeOut');
        this.isSearchTooltipVisible = true;
        break;
      case 'usuario':
        document.getElementById('tooltipUsuario').classList.add('fadeIn');
        document.getElementById('tooltipUsuario').classList.remove('fadeOut');
        this.isSearchTooltipVisible = true;
        break;
    }
  }

  hideToolTip(event) {
    switch (event.target.id) {
      case 'pesquisar':
        document.getElementById('tooltipPesquisar').classList.add('fadeOut');
        document.getElementById('tooltipPesquisar').classList.remove('fadeIn');
        break;

      case 'youTube':
        document.getElementById('tooltipYouTube').classList.add('fadeOut');
        document.getElementById('tooltipYouTube').classList.remove('fadeIn');
        break;

      case 'idiomas':
        document.getElementById('tooltipIdiomas').classList.add('fadeOut');
        document.getElementById('tooltipIdiomas').classList.remove('fadeIn');
        break;

      case 'usuario':
        document.getElementById('tooltipUsuario').classList.add('fadeOut');
        document.getElementById('tooltipUsuario').classList.remove('fadeIn');
        break;
    }
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

  toogleArticlesMenu() {
    this.menuService.toogleArticleMenu();
  }

  onSelectItem(event) {
    this.hideMenu(event);
  }
}
