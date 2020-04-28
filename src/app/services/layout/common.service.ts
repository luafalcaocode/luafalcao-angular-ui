import { Injectable } from '@angular/core';
import { LoadingService } from '../layout/loading.service';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(public loading: LoadingService, public router: Router) { }

  initializePage() {    
    window.scrollTo(0, 0);
  }

  showLoading() {
    this.loading.show();
  }

  hideLoading() {
    this.loading.hide();
  }


  navigateOut(url) {
    window.open(url);
  }
}
