import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor() { }

  showMenu(id : string) {
    let menu = document.getElementById(id);
    menu.classList.remove('fadeOut');
    menu.classList.add('fadeIn');
    this.hideMenu(id);
  }

  hideMenu(id: string) {
    document.getElementById(id).addEventListener('mouseleave', (event) => {
      let menu = document.getElementById(id);
      menu.classList.remove('fadeIn');
      menu.classList.add('fadeOut');
    });
  }
}
