import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

import { IUser } from '../models/user';
import { LocalStorageService } from '../services/local-storage.service';

const API_URL = environment.apiUrl;
@Injectable({ 
  providedIn: 'root'
})
export class AuthService {
  private user!: IUser;
  private userSubject: BehaviorSubject<IUser>;
  public user$: Observable<IUser>;

  /*Constructor
  * @param private http: HttpClient,
  * @param private router: Router,
  * @param localStorageService: LocalStorageService
  * @output user$: Observable<User>
  */
  constructor(
    private router: Router, 
    private http: HttpClient, 
    private localStorageService: LocalStorageService
    ) {
      this.userSubject = new BehaviorSubject<IUser>(this.user);
      this.user$ = this.userSubject.asObservable();
    }

  /*Login
  * @param email: string
  * @param password: string
  * @output user$: Observable<User>
  */
  public login(credentials: { email: string, password: string; }): Observable<IUser> {
    return this.http.post<IUser>(`${API_URL}/users/authentification`, credentials)
    .pipe(
      tap( response => {
        if(response && response.refreshtoken) {
          this.localStorageService.setItem('user$', response);
          this.userSubject.next(response);
        }
        return response;
      })
    );
  }

  /*Logout
  * @output userSubject: BehaviorSubject<User>(null)
  */
  public logout(): void {
    this.userSubject.next(this.user);
    this.localStorageService.removeItem('user$');
    this.router.navigate(['/login-page']);
  }

  /*Get uservalue
  * @output userSubject: BehaviorSubject<User>
  */
  public get userValue(): IUser {
    return this.userSubject.value;
  }
}
