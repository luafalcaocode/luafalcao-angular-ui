import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  initializePage() {
    document.getElementsByTagName('body')[0].style.overflow = 'auto';
    window.scrollTo(0, 0);
  }
}
