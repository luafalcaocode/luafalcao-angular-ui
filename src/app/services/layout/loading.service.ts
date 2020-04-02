import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  isLoading: boolean;

  constructor() { }

  toogle() {
    return this.isLoading = !this.isLoading;
  }

  show() {
    let loading = document.getElementById('pageLoading');
    loading.style.display = 'block';
  }

  hide() {
    let loading = document.getElementById('pageLoading');
    setTimeout(() => {
      loading.style.display = 'none';
    }, 1500);
  }
}
