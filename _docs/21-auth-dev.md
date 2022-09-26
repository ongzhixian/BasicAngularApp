# Development notes on authentication

C:.
├───basic-dashboard
├───basic-navigation
├───pages
│   ├───login-page      (new)
│   ├───logout-page     (new)
│   ├───sample-page3
│   └───sample-page4
├───sample-page1
├───sample-page2
└───services

## What do we NEED to implement authentication? (or Technical Acceptance Criteria TACs)

1.  A route guard -- to prevent unauthenticated users from accessing restricted routes,
2.  3 interceptors 
        a) to add credentials to the Authorization header if the user is logged in
        b) to handle HTTP responses from the api to check if there were any errors. 
            If there is a 401 Unauthorized response the user is automatically logged out of the application, 
            all other errors are re-thrown up to the calling service so an alert with the error can be displayed on the screen.
        c) a mock backend
3.  A model to represent user (profile?)
4.  2 services 
        a) to log user in and out
        b) get user profile (information)
5.  Login page
6.  Routing module (if it does not already exists)
7.  Subscribe authenticationService.user in AppComponent 
8.  Add interceptors to AppModule

## CLI
ng generate guard guards/authentication

ng generate interceptor interceptors/credential
ng generate interceptor interceptors/api-error
ng generate interceptor interceptors/fake-api

?ng generate class models/user
ng generate class models/user-profile

ng generate service services/authentication
ng generate service services/user-profile

ng generate component pages/login-page



# Reference
https://jasonwatmore.com/post/2020/04/29/angular-9-basic-http-authentication-tutorial-example#authentication-service-ts
https://www.tutorialspoint.com/angular8/angular8_authentication_and_authorization.htm