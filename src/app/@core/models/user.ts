import { Role } from './role';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const API_URL = environment.apiUrl;

interface IUser {
    id?: number;
    email?: string;
    password?: string;
    username?: string;
    role?: Role;
    refreshtoken?: string;
}

export class User implements IUser {
    constructor(public id?: number,
                public email?: string,
                public password?: string,
                public username?: string,
                public role?: Role,
                public refreshtoken?: string) {
    }
}