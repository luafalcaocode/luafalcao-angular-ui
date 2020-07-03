import { Component, OnInit } from '@angular/core';
import { LoadingService } from './services/layout/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'luafalcao';
  backgroundHeader: string = 'transparent';
  backgroundMobile: string = 'black';
  backgroundMobileContainer: string = 'rgba(0, 0, 0, 0.9)';
  public isUserUsingInternetExplorer: boolean;

  constructor(public loading: LoadingService) {
    if (navigator.userAgent.indexOf('Trident/') > - 1 || navigator.userAgent.indexOf('Edge/') > - 1) {
      this.isUserUsingInternetExplorer = true;
    }
    else {
      this.isUserUsingInternetExplorer = false;
    }
  }

  ngOnInit() {
    console.log('Versão: 3.0');
    console.log('Data de Publicação: ' + new Date().toLocaleDateString("pt-BR"));
  }

  ngAfterViewInit() {

  }
}
