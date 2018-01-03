import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApiConfiguration } from './api-configuration';

import { ApplicationsService } from './services/applications.service';
import { DataTypesService } from './services/data-types.service';
import { EndpointsService } from './services/endpoints.service';
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
   ApplicationsService,
   DataTypesService,
   EndpointsService,
   UsersService
  ],
})
export class ApiModule { }
