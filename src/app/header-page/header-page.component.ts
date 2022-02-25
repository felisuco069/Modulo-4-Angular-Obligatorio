import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-header-page',
  templateUrl: './header-page.component.html',
  styleUrls: ['./header-page.component.scss'],
})
export class HeaderPageComponent implements OnInit {
  public username = '';
  public userLogued: boolean = false;

  constructor(public service: AuthService) {
    // this.service.isLogued$().subscribe((state) => (this.userLogued = state));
  }

  ngOnInit(): void {}
  logout() {
    this.service.logout();
  }
  islogued() {
    return this.service.islogueado();
  }
}
