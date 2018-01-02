import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { DashboardsComponent } from './dashboards.component';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { DashboardsNavComponent } from './dasboards-nav/dashboards-nav.component';
import { SharedModule } from '../_shared/shared.module';

const routes = [
  {
    path: 'dashboard',
    component: DashboardsComponent,
    children: [
      { path: 'main', component: MainDashboardComponent },
      { path: '',   redirectTo: 'main', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [
    DashboardsComponent,
    MainDashboardComponent,
    DashboardsNavComponent
  ]
})
export class DashboardsModule { }
