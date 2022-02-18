import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { loginEntity } from '../model/models';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public login: loginEntity = {
    username: '',
    password: '',
  };
  constructor(private router: Router) {}

  enterLogin(): Boolean {
    console.log(this.login);
    if (
      this.login.username === 'master8@lemoncode.net' &&
      this.login.password === '12345678'
    ) {
      return true;
      // this.router.navigate(['/dashboard']);
    } else {
      return false;
    }
  }
}
