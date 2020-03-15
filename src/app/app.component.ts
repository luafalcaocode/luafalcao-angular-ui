import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'luafalcao';
  public isUserUsingInternetExplorer: boolean;

  constructor() {
    if (navigator.userAgent.indexOf('Trident/') > - 1 || navigator.userAgent.indexOf('Edge/') > - 1) {
      this.isUserUsingInternetExplorer = true;
    }   
    else {
      this.isUserUsingInternetExplorer = false;
    }
  }

  ngOnInit() {
    console.log('Versão: 2.0');
    console.log('Data de Publicação: ' + new Date().toLocaleDateString("pt-BR"));
  }
}
