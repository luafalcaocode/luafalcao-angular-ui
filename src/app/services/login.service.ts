import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private logged: boolean; 
  constructor() { }

  public isLogged() : boolean {
    return this.logged;
  }

  public login() {
    this.logged = true;
  }

  public logout() {
    // remove token do local storage
    this.logged = false;
  }
}
