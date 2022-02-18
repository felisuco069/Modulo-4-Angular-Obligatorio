import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public loginErrorMessage: Boolean = false;
  constructor(public service: AuthService, private router: Router) {
    service.login = {
      username: '',
      password: '',
    };
  }

  enterLogin() {
    if (this.service.enterLogin()) {
      this.router.navigate(['/dashboard']);
    } else {
      this.loginErrorMessage = true;
    }
  }

  ngOnInit(): void {}
}
