import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { User } from '../../shared/models/user.model';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly tokenSubject = new BehaviorSubject< string | null>(this.getToken())


  constructor(
    private http: HttpClient,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }


  signup(user: User) {
    return this.http.post('http://localhost:3000/users', {
      user: user
    });
  }

  login(email: string, password: string) {
    return this.http.post<{token: string}>('http://localhost:3000/login', {
      email,
      password
    });

  }

  setToken(token: string) {
    if (isPlatformBrowser(this.platformId)) {
    localStorage.setItem('token', token);
    this.tokenSubject.next(token);

    }
  }

  getToken() {
    if (isPlatformBrowser(this.platformId)) {
      return localStorage.getItem('token');
    }
    return null;

  }

  userLoggedIn() {
    return !!this.getToken();
  }

  logOut() {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem('token');
      this.tokenSubject.next(null);
      this.router.navigate(['landing'])
    }
  }

  get token$() {
    return this.tokenSubject.asObservable();
  }

}
