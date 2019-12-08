import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor() { }

  show() {
    let modal =  document.getElementById('centeredModal');
    modal.classList.remove('hide-modal');
    modal.classList.add('show-modal');

    document.getElementsByTagName('body')[0].style.overflow = 'hidden'; 
  }

  hide() {
    let modal =  document.getElementById('centeredModal');
    modal.classList.remove('show-modal');
    modal.classList.add('hide-modal');

    document.getElementsByTagName('body')[0].style.overflow = 'auto'; 
  }  
}
