import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

import { User } from '../models/user';
import { LocalStorageService } from '../services/local-storage.service';

const API_URL = environment.apiUrl;
@Injectable({ 
  providedIn: 'root'
})
export class AuthService {
  private userSubject: BehaviorSubject<User>;
  public user$: Observable<User>;

/*
 * Constructor
 * @param private http: HttpClient,
 */
  constructor(
    private router: Router, 
    private http: HttpClient, 
    private localStorageService: LocalStorageService
    ) {
      this.userSubject = new BehaviorSubject<User>(new User());
      this.user$ = this.userSubject.asObservable();
    }

  public get userValue(): User {
    return this.userSubject.value;
  }

  login(curruser: { email: string, password: string; }): Observable<User> {
    return this.http.post<User>(`${API_URL}/users/authentification`, curruser)
    .pipe(
      tap( user$ => {
        this.localStorageService.setItem('user$', user$);
        this.userSubject.next(user$);
        return user$;
      })
    );
  }

  logout(): void {
    this.localStorageService.removeItem('user$');
    this.userSubject.next(new User());
    this.router.navigate(['/login-page']);
  }
}
