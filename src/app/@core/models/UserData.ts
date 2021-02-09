import { Observable } from 'rxjs';
import { IUser } from './user';

export abstract class UserData {
    abstract getUsers(): Observable<IUser[]>;
}
