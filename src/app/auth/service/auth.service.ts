import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthService {

  login(): Observable<boolean> {
    return of(true).pipe(
      delay(1000),
      tap(val => this.setLoggedInStorage('1'))
    );
  }

  logout(): void {
    this.setLoggedInStorage('0');
  }

  setLoggedInStorage(isLogin) {
    localStorage.setItem('isLoggedIn', isLogin);
  }

  getLoggedInStorage() {
    return localStorage.getItem('isLoggedIn');
  }
}