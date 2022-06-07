import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {BasicDashboardComponent} from './basic-dashboard/basic-dashboard.component';
import {SamplePage1Component} from './sample-page1/sample-page1.component';
import {SamplePage2Component} from './sample-page2/sample-page2.component';

const routes: Routes = [
  { path: 'dashboard', component: BasicDashboardComponent },
  { path: 'sample-page1', component: SamplePage1Component },
  { path: 'sample-page2', component: SamplePage2Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
