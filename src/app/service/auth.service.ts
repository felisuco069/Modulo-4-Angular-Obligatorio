import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { loginEntity } from '../model/models';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public dataUser: loginEntity = {
    username: '',
    password: '',
  };
  public userLogued: boolean = false;
  constructor(private router: Router) {}

  login(): Boolean {
    if (
      this.dataUser.username === 'master8@lemoncode.net' &&
      this.dataUser.password === '12345678'
    ) {
      this.isLogued();
      return true;
    } else {
      return false;
    }
  }
  logout(): void {
    this.dataUser.username = '';
    this.dataUser.password = '';
    this.router.navigate(['/home']);
  }
  isLogued() {
    return (this.userLogued = true);
  }
}
