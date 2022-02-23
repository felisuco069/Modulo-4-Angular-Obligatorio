import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-choose-header',
  templateUrl: './choose-header.component.html',
  styleUrls: ['./choose-header.component.scss'],
})
export class ChooseHeaderComponent implements OnInit {
  public userLogued: boolean = false;
  constructor(public service: AuthService) {
    this.service.isLogued$().subscribe((state) => (this.userLogued = state));
  }

  ngOnInit(): void {}
}
