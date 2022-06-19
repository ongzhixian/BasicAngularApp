import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
    selector: 'app-logout-page',
    templateUrl: './logout-page.component.html',
    styleUrls: ['./logout-page.component.css']
})
export class LogoutPageComponent implements OnInit {

    constructor(
        private authService: AuthenticationService
        , private router: Router) { }

    ngOnInit() {
        this.authService.logout();
        this.router.navigate(['/']);
    }

}
