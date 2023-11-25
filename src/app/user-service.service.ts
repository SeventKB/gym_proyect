import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private loggedIn = new BehaviorSubject<boolean>(false);
  private username = new BehaviorSubject<string>('');

  getLoggedInState() {
    return this.loggedIn.asObservable();
  }

  getUserName() {
    return this.username.asObservable();
  }

  loginUser(username: string) {
    this.username.next(username);
    this.loggedIn.next(true);
  }

  logoutUser() {
    this.username.next('');
    this.loggedIn.next(false);
  }

  isLoggedIn(): Observable<boolean>{
    return this.loggedIn;
  }

  constructor() { }
}
