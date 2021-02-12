import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { User } from '../models/user';
import { Observable } from 'rxjs';

const API_URL = environment.apiUrl;

@Injectable()
export class UserService {
    constructor(private http: HttpClient) {}
    
/*
 * Get specific user
 * @output User: Observable<User>
 */
    public getUser(id: number): Observable<User> {
        return this.http.get<User>(`${API_URL}/users/${id}`);
    }

/*
 * Get user` list
 * @output User[]: Observable<User[]>
 */
    public getUsers(): Observable<User[]> {
        return this.http.get<User[]>(`${API_URL}/users`);
    }
}