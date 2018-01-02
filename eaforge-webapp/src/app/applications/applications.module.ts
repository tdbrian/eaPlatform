import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';

import { ApplicationsComponent } from './applications.component';
import { ListAppsComponent } from './list-apps/list-apps.component';
import { EditAppComponent } from './edit-app/edit-app.component';
import { ApplicationsNavComponent } from './applications-nav/applications-nav.component';
import { SharedModule } from '../_shared/shared.module';
import { NewServiceComponent } from './new-service/new-service.component';
import { ServiceComponent } from './service/service.component';
import { ServiceNavComponent } from './service-nav/service-nav.component';
import { EndpointsComponent } from './service/endpoints/endpoints.component';
import { PermissionsComponent } from './service/permissions/permissions.component';
import { CurrentApplicationService } from './CurrentApplication.service';

const routes = [
  {
    path: 'applications',
    component: ApplicationsComponent,
    children: [
      { path: 'list', component: ListAppsComponent },
      { path: 'new-service', component: NewServiceComponent },
      { path: 'edit/:id', component: EditAppComponent },
      {
        path: 'service/:id',
        component: ServiceComponent,
        children: [
          { path: 'endpoints', component: EndpointsComponent },
          { path: 'permissions', component: PermissionsComponent },
          { path: '', redirectTo: 'endpoints', pathMatch: 'full' }
        ]
      },
      { path: '', redirectTo: 'list', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SweetAlert2Module,
    SharedModule,
    FormsModule
  ],
  providers: [
    CurrentApplicationService
  ],
  declarations: [
    ApplicationsComponent,
    ListAppsComponent,
    EditAppComponent,
    ApplicationsNavComponent,
    NewServiceComponent,
    ServiceComponent,
    ServiceNavComponent,
    EndpointsComponent,
    PermissionsComponent
  ]
})
export class ApplicationsModule { }
