import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {BasicDashboardComponent} from './basic-dashboard/basic-dashboard.component';
import {SamplePage1Component} from './sample-page1/sample-page1.component';
import {SamplePage2Component} from './sample-page2/sample-page2.component';
import { SamplePage3Component } from './pages/sample-page3/sample-page3.component';
import { SamplePage4Component } from './pages/sample-page4/sample-page4.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';

const routes: Routes = [
  { path: 'dashboard', component: BasicDashboardComponent },
  { path: 'sample-page1', component: SamplePage1Component },
  { path: 'sample-page2', component: SamplePage2Component },
  { path: 'sample-page3', component: SamplePage3Component },
  { path: 'sample-page4', component: SamplePage4Component },
  { path: 'login-page', component: LoginPageComponent },
  { path: '',   redirectTo: '/dashboard', pathMatch: 'full' }, // default to dashboard
  { path: '**', component: BasicDashboardComponent },  // Wildcard route for a 404 page PageNotFoundComponent
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
