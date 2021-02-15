import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {
    constructor() {}

    public getItem(key: string): any {
        try {
            var item = localStorage.getItem(key);
            return item !== null ? JSON.parse(item) : '';
        }
        catch(e) {
            return null;
        }
    }

    public setItem(key: string, value: any): void {
        localStorage.setItem(key, JSON.stringify(value));
    }

    public removeItem(key: string): any {
        localStorage.removeItem(key);
    }
}