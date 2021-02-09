import { Role } from './role';

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