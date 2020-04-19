import { Injectable } from '@angular/core';
import { LoadingService } from '../layout/loading.service';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(public loading: LoadingService, public router: Router) { }

  initializePage() {
    // this.loading.show();
    // document.getElementsByTagName('body')[0].style.overflow = 'auto';
    window.scrollTo(0, 0);
  }

  showLoading() {
    this.loading.show();
  }

  hideLoading() {
    this.loading.hide();
  }


  navigateOut(url) {
    debugger;
    window.open(url);
  }
}
