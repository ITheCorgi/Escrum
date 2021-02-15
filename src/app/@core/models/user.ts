import { Role } from './role';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const API_URL = environment.apiUrl;

export interface IUser {
    id?: number;
    email?: string;
    password?: string;
    username?: string;
    role?: Role;
    refreshtoken?: string;
}

export abstract class UserData {
    /*
    * Get User List
    * @output users[]: Observable<IUser[]>
    */
    abstract getUsers(): Observable<IUser[]>;

    /*
    * Get User
    * @output user: Observable<IUser>
    */
    abstract getUser(id: number): Observable<IUser>;
}