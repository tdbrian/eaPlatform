import { Component, OnInit } from '@angular/core';
import { ApplicationEntity } from '../../api/models/application-entity';
import { DataLoader } from '../../_shared/models/DataLoader';
import { ApplicationService } from '../../api/services/application.service';
import { Router } from '@angular/router';
import { DataLoaderComponent } from '../../_shared/components/data-loader/data-loader.component';
import { ActivatedRoute } from '@angular/router';
import { CurrentApplicationService } from '../CurrentApplication.service';

@Component({
  selector: 'app-edit-app',
  templateUrl: './edit-app.component.html'
})
export class EditAppComponent implements OnInit {
  appResult = new DataLoader<ApplicationEntity>();
  saveResult = new DataLoader<void>();
  deleteResult = new DataLoader<void>();
  name = '';
  description = '';
  appId: number;

  constructor(
    private appService: ApplicationService,
    private currentApp: CurrentApplicationService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  async ngOnInit() {
    this.appId = this.route.snapshot.params.id;
    this.appResult = await this.currentApp.get(this.appId);
    this.name = this.appResult.value.name;
    this.description = this.appResult.value.shortDescription;
  }

  edit(form) {
    if (!form.valid) { return; }
    const app = this.appResult.value;
    app.name = this.name;
    app.longDescription = this.description;
    this.saveResult
      .handle(this.appService.ApiApplicationsByIdPut({ application: app, id: app.id }))
      .then(() => {
        this.currentApp.reset();
        this.router.navigateByUrl('applications/list');
      });
  }

  async delete() {
    await this.deleteResult.handle(this.appService.ApiApplicationsByIdDelete(this.appId));
    this.currentApp.reset();
    this.router.navigateByUrl('applications/list');
  }
}
