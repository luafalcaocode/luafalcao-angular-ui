import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MobileMenuService {
  public isNavMobileOpen: boolean;

  constructor() {
    this.isNavMobileOpen = false;
  }

  openCloseMobile() {
    const navMobile = document.getElementById('navMobileItems');
    const body = document.getElementsByTagName('body')[0];
    if (this.isNavMobileOpen) {
      navMobile.style.right = '-500px';
      body.style.overflowY = 'auto';
    }
    else {
      navMobile.style.right = '0';
      body.style.overflowY = 'hidden';
    }

    this.isNavMobileOpen = !this.isNavMobileOpen;
  }

  showSearchField() {
    const navbarInput = document.getElementById('navbarInput');
    navbarInput.style.width = '296px';
    navbarInput.style.width = 'auto';
    navbarInput.style.display = 'block';
    navbarInput.style.border = 'solid 1px #535659';
    navbarInput.style.background = '#1e1e23';
    navbarInput.style['caretColor'] = '#00BC6E';
  }
  hideSearchField() {
    const navbarInput = document.getElementById('navbarInput');
    navbarInput.style.width = '0px';
    navbarInput.style.border = 'none';
    navbarInput.style.background = 'none';
    navbarInput.style['caretColor'] = '#25292D';
  }


}
