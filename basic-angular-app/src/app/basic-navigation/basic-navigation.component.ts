import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import  { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
    selector: 'app-basic-navigation',
    templateUrl: './basic-navigation.component.html',
    styleUrls: ['./basic-navigation.component.css']
})
export class BasicNavigationComponent {

    isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
        .pipe(
            map(result => result.matches),
            shareReplay()
        );

    constructor(
        private breakpointObserver: BreakpointObserver,
        private authenticationService: AuthenticationService
        ) { }

    logout() {
        // console.log("do log otu");
        this.authenticationService.logout();
        //this.authenticationService.logout();
    }
}
