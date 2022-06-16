import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSliderModule } from '@angular/material/slider';
import { BasicDashboardComponent } from './basic-dashboard/basic-dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { LayoutModule } from '@angular/cdk/layout';
import { BasicNavigationComponent } from './basic-navigation/basic-navigation.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { SamplePage1Component } from './sample-page1/sample-page1.component';
import { SamplePage2Component } from './sample-page2/sample-page2.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';

import { MsalModule, MsalRedirectComponent, MsalGuard } from '@azure/msal-angular';
import { PublicClientApplication, InteractionType, BrowserCacheLocation } from '@azure/msal-browser';

const isIE = window.navigator.userAgent.indexOf('MSIE ') > -1 || window.navigator.userAgent.indexOf('Trident/') > -1;
const azureClientId = "05617e71-52dd-40cb-8485-16688d5f627e";
//const azureAuthority = "https://login.microsoftonline.com/17370574-7110-40c3-a317-12ac3ebf9e96";
const azureAuthority = "https://login.microsoftonline.com/common";
const azureRedirectUri = "http://localhost:9800/";

const protectedResourceMap = new Map<string, Array<string>>();
protectedResourceMap.set("https://graph.microsoft.com/v1.0/me", ["user.read"]);
    //  protectedResourceMap.set(`${environment.clientId}`, 
    //  [`${environment.scopeUrl}`]);


@NgModule({
  declarations: [
    AppComponent,
    BasicDashboardComponent,
    BasicNavigationComponent,
    SamplePage1Component,
    SamplePage2Component,
    HomeComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    MsalModule.forRoot( new PublicClientApplication({
      auth: {
        clientId: azureClientId,
        authority: azureAuthority,
        redirectUri: azureRedirectUri,
        postLogoutRedirectUri: azureRedirectUri,
        navigateToLoginRequestUrl: true
      },
      cache: {
        cacheLocation: BrowserCacheLocation.LocalStorage,
        storeAuthStateInCookie: isIE, // Set to true for Internet Explorer 11
      }
    }),  {
      interactionType: InteractionType.Popup, // MSAL Guard Configuration
      authRequest: {
        scopes: ['user.read']
      },
      loginFailedRoute: "/login-failed" 
    }, {
      interactionType: InteractionType.Redirect,
      protectedResourceMap
    }),
    BrowserAnimationsModule,
    MatSliderModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [
    MsalGuard // MsalGuard added as provider here
  ],
  bootstrap: [AppComponent, MsalRedirectComponent ]
})
export class AppModule { }
