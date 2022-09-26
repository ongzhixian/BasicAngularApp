import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthenticationService } from 'src/app/services/authentication.service';
import { first } from 'rxjs/operators';

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

    returnUrl: string = "";

    // loginForm = new FormGroup({
    //     username: new FormControl('test'),
    //     password: new FormControl('test'),
    // });

    loginForm = this.formBuilder.group({
        username: ['test', Validators.required],
        password: ['test', Validators.required]
    });

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private authenticationService: AuthenticationService, 
        private router: Router) 
        {
            console.log(this.authenticationService.userProfileValue);

            if (this.authenticationService.userProfileValue) { 
                this.router.navigate(['/']);
            }
        }

    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

    ngOnInit(): void {
        // this.loginForm = this.formBuilder.group({
        //     username: ['asd', Validators.required],
        //     password: ['zxczxc', Validators.required]
        // });

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    onSubmit() {
        // TODO: Use EventEmitter with form value
        console.warn(this.loginForm.value);

        // this.submitted = true;

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }

        // this.loading = true;
        this.authenticationService.login(
            this.f.username.value, 
            this.f.password.value)
            .pipe(first())
            .subscribe(
                data => {
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                    // this.error = error;
                    // this.loading = false;
                });
    }
}
