import { Component, OnInit } from '@angular/core';
import { CurrentApplicationService } from '../../CurrentApplication.service';
import { DataLoader } from '../../../_shared/models/DataLoader';
import { EndpointsService } from '../../../api/services/endpoints.service';
import { EndpointEntity } from '../../../api/models/endpoint-entity';

@Component({
  selector: 'app-endpoints',
  templateUrl: './endpoints.component.html'
})
export class EndpointsComponent {
  endpointsLoader = new DataLoader<EndpointEntity[]>();

  constructor(
    public endpointsService: EndpointsService,
    public appService: CurrentApplicationService
  ) {
    this.appService.app$.subscribe(app => {
      if (!app) { return; }
      this.endpointsLoader.handle(this.endpointsService.ApiEndpointsApplicationByIdGet(app.id));
    });
  }

  open(endpoint: EndpointEntity) {
    console.dir(endpoint);
  }
}
