import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {BasicDashboardComponent} from './basic-dashboard/basic-dashboard.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';

import {SamplePage1Component} from './sample-page1/sample-page1.component';
import {SamplePage2Component} from './sample-page2/sample-page2.component';

import { MsalGuard } from '@azure/msal-angular';

const isIframe = window !== window.parent && !window.opener;

const routes: Routes = [
  { path: 'profile', component: ProfileComponent, canActivate: [MsalGuard] },
  { path: 'home', component: HomeComponent,},
  { path: 'dashboard', component: BasicDashboardComponent },
  { path: 'sample-page1', component: SamplePage1Component },
  { path: 'sample-page2', component: SamplePage2Component },
  { path: '',   redirectTo: '/dashboard', pathMatch: 'full' }, // default to dashboard
  { path: '**', component: BasicDashboardComponent },  // Wildcard route for a 404 page PageNotFoundComponent
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: !isIframe ? 'enabled' : 'disabled' // Don't perform initial navigation in iframes
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
