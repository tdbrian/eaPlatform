import { Component, OnInit } from '@angular/core';
import { ApplicationEntity } from '../../api/models/application-entity';
import { ApplicationService } from '../../api/services/application.service';
import { DataLoader } from '../../_shared/models/DataLoader';
import { Router } from '@angular/router';
import { CurrentApplicationService } from '../CurrentApplication.service';

@Component({
  selector: 'app-list-apps',
  templateUrl: './list-apps.component.html'
})
export class ListAppsComponent implements OnInit {
  appsLoader = new DataLoader<ApplicationEntity[]>();

  constructor(private appService: ApplicationService, private router: Router, private currentApp: CurrentApplicationService) { }

  async ngOnInit() {
    await this.appsLoader.handle(this.appService.ApiApplicationsGet());
  }

  open(app: ApplicationEntity) {
    this.currentApp.setApp(app);
    this.router.navigate(['applications', 'service', app.id]);
  }
}
