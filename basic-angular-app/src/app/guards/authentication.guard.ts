import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';

// import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
// import { AuthenticationService } from '@app/_services';

import { AuthenticationService } from '../services/authentication.service';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationGuard implements CanActivateChild {
    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) { }

    canActivateChild(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

        console.log("in auth guard");

        const userProfile = this.authenticationService.userProfileValue;
        
        // No userProfile => not logged in
        // so redirect to login page with the return url
        if (!userProfile) {
            
            this.router.navigate(['/login'], { 
                queryParams: { returnUrl: state.url } 
            });

            return false;
        }

        // Else is logged in so return true
        return true;
    }

    // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    //     const user = this.authenticationService.userValue;
    //     if (user) {
    //         // logged in so return true
    //         return true;
    //     }

    //     // not logged in so redirect to login page with the return url
    //     this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    //     return false;
    // }
}
