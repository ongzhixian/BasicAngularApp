import { Component } from '@angular/core';

import { AuthenticationService } from './services/authentication.service';

import { UserProfile } from './models/user-profile';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'basic-angular-app';

    userProfile : UserProfile | null = null;

    constructor(
        private authenticationService: AuthenticationService
    ) {
        console.log("userProfile", this.userProfile);
        this.authenticationService.userProfile.subscribe(x => this.userProfile = x);
    }
}
