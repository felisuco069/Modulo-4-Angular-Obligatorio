import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-header-page',
  templateUrl: './header-page.component.html',
  styleUrls: ['./header-page.component.scss'],
})
export class HeaderPageComponent implements OnInit {
  public username = '';
  public userLogued = false;
  constructor(public service: AuthService) {
    this.username = this.service.dataUser.username;
    this.userLogued = this.service.userLogued;
  }

  ngOnInit(): void {}
  logout() {
    this.service.logout();
  }
}
