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
      navMobile.style.right = '-1200px';
      body.style.overflowY = 'auto';

      let hiddenCandidated = document.getElementsByClassName('hidden-candidated');
      for (var i = 0; i < hiddenCandidated.length; i++) {
        hiddenCandidated[i].classList.remove('fadeOut');
        hiddenCandidated[i].classList.add('fadeIn');
      }
    }
    else {
      navMobile.style.right = '0';
    //  body.style.overflowY = 'hidden';
      this.isNavMobileOpen = false;

      let hiddenCandidated = document.getElementsByClassName('hidden-candidated');
      for (var i = 0; i < hiddenCandidated.length; i++) {
        hiddenCandidated[i].classList.remove('fadein');
        hiddenCandidated[i].classList.add('fadeOut');
      }
    }

    this.isNavMobileOpen = !this.isNavMobileOpen;


  }
}
