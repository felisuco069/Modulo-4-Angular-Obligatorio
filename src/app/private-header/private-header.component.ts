import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-private-header',
  templateUrl: './private-header.component.html',
  styleUrls: ['./private-header.component.scss'],
})
export class PrivateHeaderComponent implements OnInit {
  public username = '';
  public userLogued: string = 'false';
  constructor(public service: AuthService) {
    this.username = this.service.dataUser.username;
    // this.service.isLogued$().subscribe((state) => (this.userLogued = state));
    // this.userLogued ? localStorage.getItem('isLogued') : 'false';
  }

  ngOnInit(): void {}

  logout() {
    this.service.logout();
  }
}
