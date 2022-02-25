import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { LoginEntity, Photograph } from '../model/models';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public dataUser: LoginEntity = {
    username: '',
    password: '',
  };
  private photograph: Photograph[] = [
    {
      id: 1,
      src: 'Acueducto-de-nerja.jpg',
      title: 'Acueducto de nerja',
    },
    {
      id: 2,
      src: 'casco-antiguo-nerja.jpg',
      title: 'Casco antiguo Nerja',
    },
    {
      id: 3,
      src: 'Cueva-de-Nerja.jpg',
      title: 'Cueva de Nerja',
    },
    {
      id: 4,
      src: 'Enero-1-IloftMalaga-Cuevas-de-Nerja.jpg',
      title: 'Concierto en Cueva de Nerja',
    },
    {
      id: 5,
      src: 'nerja-caves.jpg',
      title: 'Cueva de Nerja',
    },
    {
      id: 6,
      src: 'nerja-vista-anochecer.jpg',
      title: 'Anochecer en Nerja',
    },
    {
      id: 7,
      src: 'panoramica-de-la-localidad-de-nerja-malaga-t.jpg',
      title: 'Panorámica de Nerja',
    },
    {
      id: 8,
      src: 'personas-en-las-cuevas-de-nerja-s449205991.jpg',
      title: 'Sala de la Cueva de Nerja',
    },
  ];
  private state: boolean = false;
  // private userLogued$: BehaviorSubject<boolean> = new BehaviorSubject(
  //   this.state
  // );
  constructor(private router: Router) {}

  login(): void {
    this.state =
      this.dataUser.username === 'master8@lemoncode.net' &&
      this.dataUser.password === '12345678';
    // this.userLogued$.next(this.state);
    localStorage.setItem('isLogued', this.state.toString());
  }
  logout(): void {
    this.dataUser.username = '';
    this.dataUser.password = '';
    // this.userLogued$.next(!this.state);
    localStorage.removeItem('isLogued');
    // localStorage.removeItem('userLogued');
    this.router.navigate(['/home']);
  }

  islogueado() {
    return localStorage.getItem('isLogued');
  }
  // isLogued$(): Observable<boolean> {
  //   return this.userLogued$.asObservable();
  // }
  getPhotosArray(): Photograph[] {
    return this.photograph;
  }
}
