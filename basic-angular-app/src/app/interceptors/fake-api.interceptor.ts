import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpResponse,
    HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { tap, delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';

import { UserProfile } from '../models/user-profile';

const fakeUserProfiles: UserProfile[] = [
    { id: 1, username: 'test', password: 'test', firstName: 'Test', lastName: 'User' }
];

@Injectable()
export class FakeApiInterceptor implements HttpInterceptor {

    constructor() { }

    intercept(
        request: HttpRequest<unknown>,
        next: HttpHandler): Observable<HttpEvent<unknown>> {

        // Deconstruct the commonly used sections of a request
        const { url, method, headers, body } = request;

        // console.log("FakeApiInterceptor called", method, url);

        // Example of making changes to outgoing request

        // console.debug("BEFORE", request.headers);

        // request = request.clone({ 
        //     headers: request.headers
        //         .set('Content-Type', 'application/json')
        //         .set('Header2', 'header2-value')
        //         .set('Authorization', 'Bearer xxxasdsad==')
        // });

        // Same as above but using setHeaders
        // request = request.clone({
        //     setHeaders: {
        //         'Content-Type': 'application/json',
        //         'Header2': 'header2-value',
        //         'Authorization-Type': 'Bearer xxxasdsad==',
        //     }
        // });

        // console.debug("AFTER", request.headers);

        const
        parsedUrl = new URL(url)
        , requestPathName = parsedUrl.pathname.toLowerCase()
        , requestMethod = method.toUpperCase()
        , requestType = `${requestMethod}:${requestPathName}`;
        
        // console.log(parsedUrl, requestMethod, requestPathName);

        switch (requestType)
        {
            case "POST:/users/authenticate":
                // console.log("requestType [%s]", requestType);
                return authenticate(body);
            default:
                console.log("No match for {requestType}", requestType);
        }

        return next.handle(request);
        
        // Example of handling response
        // return next.handle(request).pipe(
        //     tap((response) => {
        //         console.log("RECEIVED RESPONSE2", response, typeof(response));
        //         if (response instanceof HttpResponse) {
        //             //this.cache.set(request.url, response);
        //             console.log("RECEIVED RESPONSE", response);
        //         }
        //     })
        // );

        function authenticate(body: any) {

            const { username, password } = body;
            
            const user = fakeUserProfiles.find(x => x.username === username && x.password === password);
            
            if (!user) return throwError({ 
                error: { message: 'Username or password is incorrect' } 
            });

            return of(new HttpResponse({ 
                status: 200, 
                body: { 
                    id: user.id, 
                    username: user.username, 
                    firstName: user.firstName, 
                    lastName: user.lastName 
                }
            }));

            // return ok({
            //     id: user.id,
            //     username: user.username,
            //     firstName: user.firstName,
            //     lastName: user.lastName
            // });

            // return of(new HttpResponse({ 
            //     status: 200, body: { id: 1, username: 'test', password: 'test', firstName: 'Test', lastName: 'User' }
            // }));
        }

        // function error(message : any) {
        //     return throwError({ error: { message } });
        // }

        // function ok(body? : any) {
        //     return of(new HttpResponse({ status: 200, body }))
        // }
    }

    // intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    //     const { url, method, headers, body } = request;

    //     // wrap in delayed observable to simulate server api call
    //     return of(null)
    //         .pipe(mergeMap(handleRoute))
    //         .pipe(materialize()) // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648)
    //         .pipe(delay(500))
    //         .pipe(dematerialize());

    //     function handleRoute() {
    //         console.log("In handleRoute", url);

    //         switch (true) {
    //             case url.endsWith('/users/authenticate') && method === 'POST':
    //                 return authenticate();
    //             case url.endsWith('/users') && method === 'GET':
    //                 return getUsers();
    //             default:
    //                 // pass through any requests not handled above
    //                 return next.handle(request);
    //         }    
    //     }

    //     // route functions

    //     function authenticate() {
    //         const { username, password } = body;
    //         const user = users.find(x => x.username === username && x.password === password);
    //         if (!user) return error('Username or password is incorrect');
    //         return ok({
    //             id: user.id,
    //             username: user.username,
    //             firstName: user.firstName,
    //             lastName: user.lastName
    //         })
    //     }

    //     function getUsers() {
    //         if (!isLoggedIn()) return unauthorized();
    //         return ok(users);
    //     }

    //     // helper functions

    //     function ok(body? : any) {
    //         return of(new HttpResponse({ status: 200, body }))
    //     }

    //     function error(message : any) {
    //         return throwError({ error: { message } });
    //     }

    //     function unauthorized() {
    //         return throwError({ status: 401, error: { message: 'Unauthorised' } });
    //     }

    //     function isLoggedIn() {
    //         return headers.get('Authorization') === `Basic ${window.btoa('test:test')}`;
    //     }
    // }
}

export let fakeApiInterceptorProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: HTTP_INTERCEPTORS,
    useClass: FakeApiInterceptor,
    multi: true
};