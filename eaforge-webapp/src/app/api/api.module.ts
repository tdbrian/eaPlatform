import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApiConfiguration } from './api-configuration';

import { ApplicationService } from './services/application.service';
import { OrganizationsService } from './services/organizations.service';
import { UsersService } from './services/users.service';

/**
 * Module that provides instances for all API services
 */
@NgModule({
  imports: [
    HttpClientModule
  ],
  exports: [
    HttpClientModule
  ],
  declarations: [],
  providers: [
    ApiConfiguration,
   ApplicationService,
   OrganizationsService,
   UsersService
  ],
})
export class ApiModule { }
