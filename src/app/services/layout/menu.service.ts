import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private menus: string[];
  
  constructor() {
    this.menus = [
      'menuProjetos',
      'menuServicos'
    ];
   }

  showMenu(id : string) {
    let menu = document.getElementById(id);
    menu.classList.remove('fadeOut');
    menu.classList.add('fadeIn');
  }

  hideMenu(id: string) {
      let menu = document.getElementById(id);
      menu.classList.remove('fadeIn');
      menu.classList.add('fadeOut');
  }

  hideAllMenus() {
    this.menus.forEach(id => {
      let menu = document.getElementById(id);
      menu.classList.remove('fadeIn');
      menu.classList.add('fadeOut');
    });    
  }
}
