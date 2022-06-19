import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthenticationService } from '../services/authentication.service';

@Injectable()
export class CredentialInterceptor implements HttpInterceptor {

    constructor(private authenticationService: AuthenticationService) { }

    // intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //     // add header with basic auth credentials if user is logged in and request is to the api url
    //     const user = this.authenticationService.userValue;
    //     const isLoggedIn = user && user.authdata;
    //     const isApiUrl = request.url.startsWith(environment.apiUrl);
    //     if (isLoggedIn && isApiUrl) {
    //         request = request.clone({
    //             setHeaders: {
    //                 Authorization: `Basic ${user.authdata}`
    //             }
    //         });
    //     }

    //     return next.handle(request);
    // }

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        return next.handle(request);
    }
}
