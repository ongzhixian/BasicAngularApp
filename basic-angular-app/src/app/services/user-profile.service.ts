import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { UserProfile } from '../models/user-profile';

@Injectable({
    providedIn: 'root'
})
export class UserProfileService {

    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<UserProfile[]>(`${environment.apiUrl}/users`);
    }
}
