import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { User } from '../../shared/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly tokenSubject = new BehaviorSubject< string | null>(null)

  hasToken:Boolean = false;

  constructor( private http: HttpClient, private router: Router ) { }

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
    localStorage.setItem('token', token);
    this.tokenSubject.next(token);
    this.hasToken = true;
  }

  getToken() {
    if(!this.hasToken) {
      return localStorage.getItem('token');
    }
  }

  userLoggedIn() {
    return !!this.getToken();
  }

  logOut() {
    localStorage.removeItem('token');
    this.tokenSubject.next(null);
    this.router.navigate(['landing'])
  }

}
