import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'luafalcao';
  public isUserUsingInternetExplorer: boolean;

  constructor() {
    if (navigator.userAgent.indexOf('Trident/') > - 1) {
      this.isUserUsingInternetExplorer = true;
    }   
    else {
      this.isUserUsingInternetExplorer = true;
    }
  }
}
