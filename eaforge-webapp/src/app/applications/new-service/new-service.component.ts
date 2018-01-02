import { Component, OnInit } from '@angular/core';
import { ApplicationEntity } from '../../api/models/application-entity';
import { DataLoader } from '../../_shared/models/DataLoader';
import { ApplicationService } from '../../api/services/application.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-service',
  templateUrl: './new-service.component.html'
})
export class NewServiceComponent implements OnInit {
  app: ApplicationEntity;
  createResult: DataLoader<void>;

  constructor(private appService: ApplicationService, private router: Router) { }

  ngOnInit() {
    this.app = new ApplicationEntity();
    this.createResult = new DataLoader();
  }

  createService(form) {
    if (!form.valid) { return; }
    this.createResult
      .handle(this.appService.ApiApplicationsPost(this.app))
      .then(() => this.router.navigateByUrl('applications/list'));
  }
}
