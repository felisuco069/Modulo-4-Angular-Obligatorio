import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public stateLogin: boolean = false;
  public loginErrorMessage: boolean = false;

  constructor(public service: AuthService, private router: Router) {
    service.dataUser = {
      username: '',
      password: '',
    };
    // this.service
    //   .isLogued$()
    //   .subscribe((state) => (this.loginErrorMessage = state));
  }

  enterLogin() {
    // if(this.stateLogin){

    if (this.service.login()) {
      this.router.navigate(['/dashboard']);
    } else {
      this.loginErrorMessage = !this.loginErrorMessage;
    }
  }

  ngOnInit(): void {}
}
