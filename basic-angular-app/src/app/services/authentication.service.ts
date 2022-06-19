import { Injectable } from '@angular/core';

import { Router } from '@angular/router';
import { HttpClient, JsonpClientBackend } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { UserProfile } from '../models/user-profile';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

    private userSubject: BehaviorSubject<UserProfile | null>;
    public userProfile: Observable<UserProfile | null>;

    constructor(
        private router: Router,
        private http: HttpClient
    ) {
        this.userSubject = new BehaviorSubject<UserProfile|null>(
            this.getlocalStorageUser());
        this.userProfile = this.userSubject.asObservable();
    }

    getlocalStorageUser() {
        const localStorageUserJson = localStorage.getItem('user')
        if (localStorageUserJson != null)
        {
            return JSON.parse(localStorageUserJson);
        }
        
        return null;
    }

    public get userProfileValue(): UserProfile|null {
        return this.userSubject.value;
    }

    login(username: string, password: string) {
        console.info("login", {username, password});

        return this.http.post<any>(`${environment.apiUrl}/users/authenticate`, { username, password })
            .pipe(map(user => {
                // store user details and basic auth credentials in local storage to keep user logged in between page refreshes
                user.authdata = window.btoa(username + ':' + password);
                localStorage.setItem('user', JSON.stringify(user));
                this.userSubject.next(user);
                return user;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('user');
        this.userSubject.next(null);
        this.router.navigate(['/login']);
    }
}
