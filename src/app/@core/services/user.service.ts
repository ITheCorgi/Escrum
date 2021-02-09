import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../models/user';

@Injectable({
    provideIn: 'root'
})
export class UserService {
    constructor() {}
    getUsers(): void {
        
    }

}