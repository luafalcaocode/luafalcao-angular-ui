import { Injectable } from '@angular/core';
import { LoadingService } from '../layout/loading.service';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class  CommonService {
  defaultStyle: any;
  constructor(public loading: LoadingService, public router: Router) {
    this.defaultStyle = {};
  }

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

  setLayout(isBlack?: boolean, transparencyOnFooter?: boolean) {
    const nav = (<HTMLElement>document.getElementById('navDesktop'));
    const logo = (<HTMLElement>document.querySelector('a.lcode'));
    const links = document.querySelectorAll('li.item-menu-principal');
    const navMobile = (<HTMLInputElement>document.getElementById('navMobile'));

    navMobile.style.backgroundColor = isBlack ? 'black' : 'transparent';
    navMobile.style.height = '52px';
    navMobile.style.paddingTop = '12px';

    this.defaultStyle.backgroundColor = nav.style.backgroundColor;
    this.defaultStyle.height = nav.style.height;
    this.defaultStyle.paddingTop = nav.style.paddingTop;
    this.defaultStyle.paddingLeft = nav.style.paddingLeft;
    this.defaultStyle.marginTop = nav.style.marginTop;

    nav.style.backgroundColor = isBlack ? 'black' : 'transparent';
    nav.style.height = '58px';
    nav.style.paddingTop = '15px';
    nav.style.paddingLeft = '100px';
    logo.style.marginTop = '-8px';

    Array.from(links).forEach((item: HTMLElement) => {
      item.style.fontSize = '17px';
    });
  }

  unsetLayout() {
    const nav = (<HTMLElement>document.getElementById('navDesktop'));
    nav.style.backgroundColor = this.defaultStyle.backgroundColor;
    nav.style.height = this.defaultStyle.height;
    nav.style.paddingTop = this.defaultStyle.paddingTop;
    nav.style.paddingLeft = this.defaultStyle.paddingLeft;
    nav.style.marginTop = this.defaultStyle.marginTop;
  }

  navigateTo(url) {
    window.open(url);
  }

  gotoTop() {
    window.scrollTo(0, 0);
  }

  backToPreviousPage() {
    window.history.back();
  }
}
