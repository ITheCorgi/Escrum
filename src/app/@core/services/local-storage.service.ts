import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {
    constructor() {}

    getItem(key: string): any {
        try {
            var item = localStorage.getItem(key);
            return item !== null ? JSON.parse(item) : '';
        }
        catch(e) {
            return null;
        }
    }

    setItem(key: string, value: any): void {
        localStorage.setItem(key, JSON.stringify(value));
    }

    removeItem(key: string): any {
        localStorage.removeItem(key);
    }

    clear(): void {
        localStorage.clear();
    }
}