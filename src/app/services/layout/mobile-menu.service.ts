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
      this.isNavMobileOpen = false;
    }

    this.isNavMobileOpen = !this.isNavMobileOpen;
  
  }
}
