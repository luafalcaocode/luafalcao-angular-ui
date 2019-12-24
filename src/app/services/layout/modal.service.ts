import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor() { }

  show() {
    let modal =  document.getElementById('centeredModal');
    modal.classList.remove('fadeOut');
    modal.classList.add('fadeIn');

    document.getElementsByTagName('body')[0].style.overflowY = 'hidden'; 
  }

  hide() {
    let modal =  document.getElementById('centeredModal');
    modal.classList.remove('fadeIn');
    modal.classList.add('fadeOut');

    document.getElementsByTagName('body')[0].style.overflowY = 'auto'; 
  }  
}
