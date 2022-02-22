import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { LoginEntity } from '../model/models';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public dataUser: LoginEntity = {
    username: '',
    password: '',
  };
  private state: boolean = false;
  private userLogued$: BehaviorSubject<boolean> = new BehaviorSubject(
    this.state
  );
  constructor(private router: Router) {}

  login(): void {
    this.state =
      this.dataUser.username === 'master8@lemoncode.net' &&
      this.dataUser.password === '12345678';
    this.userLogued$.next(this.state);
  }
  logout(): void {
    this.dataUser.username = '';
    this.dataUser.password = '';
    this.userLogued$.next(!this.state);
    this.router.navigate(['/home']);
  }
  isLogued(): Observable<boolean> {
    return this.userLogued$.asObservable();
  }
}
