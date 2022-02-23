import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public loginErrorMessage: boolean = false;
  public stateLogin: boolean = false;
  constructor(public service: AuthService, private router: Router) {
    service.dataUser = {
      username: '',
      password: '',
    };
    this.service.isLogued$().subscribe((state) => (this.stateLogin = state));
  }

  enterLogin() {
    this.service.login();
    if (this.stateLogin) {
      this.router.navigate(['/dashboard']);
    } else {
      !this.loginErrorMessage;
    }
  }

  ngOnInit(): void {}
}
