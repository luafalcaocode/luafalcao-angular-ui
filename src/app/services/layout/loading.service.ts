import { Injectable, ElementRef, Renderer2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  isLoading: boolean;
  element: any;
  constructor() { }

  toogle() {
    return this.isLoading = !this.isLoading;
  }

  show(loading?: any) {
    loading.style.display = 'block';
  }

  hide(loading?: any) {
    setTimeout(() => {
      loading.style.display = 'none';
    }, 1100);
  }
}
