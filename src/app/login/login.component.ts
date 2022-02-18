import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { loginEntity } from '../model/models';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(public service: AuthService, private router: Router) {
    service.login = {
      username: '',
      password: '',
    };
  }

  enterLogin() {
    this.service.enterLogin();
  }

  ngOnInit(): void {}
}
