import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


import { IUser } from '../models/user.interface';

@Injectable({ providedIn: 'root' })
export class AuthService {

/**
* Constructor
* @param private http: HttpClient,
*/
  constructor(private http: HttpClient) { 
  }

  login(email: string, password: string) : Observable<IUser> {
    return this.http.post<IUser>
  }
}
