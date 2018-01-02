import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardsModule } from './dashboards/dashboards.module';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';

import { AppComponent } from './app.component';
import { MainNavSidebarComponent } from './layout/main-nav-sidebar/main-nav-sidebar.component';
import { ApiModule } from './api/api.module';
import { ApplicationsModule } from './applications/applications.module';
import { HeaderComponent } from './layout/header/header.component';
import { DomainsModule } from './domains/domains.module';

const routes: Routes = [
  { path: '',   redirectTo: 'dashboard/main', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    MainNavSidebarComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    SweetAlert2Module.forRoot(),
    ApiModule,
    DashboardsModule,
    ApplicationsModule,
    DomainsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
  ]
})
export class AppModule { }
