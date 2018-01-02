import { Injectable } from '@angular/core';
import { ApplicationService } from '../api/services/application.service';
import { Observable } from 'rxjs/Observable';
import { ApplicationEntity } from '../api/models/application-entity';
import { DataLoader } from '../_shared/models/DataLoader';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class CurrentApplicationService {
  public appLoader: DataLoader<ApplicationEntity> = new DataLoader();
  public app$ = new BehaviorSubject<ApplicationEntity>(null);

  constructor(private appService: ApplicationService) { }

  async fetch(id: number) {
    await this.appLoader.handle(this.appService.ApiApplicationsByIdGet(id));
    this.app$.next(this.appLoader.value);
  }

  async get(id: number) {
    if (!id) { return; }
    if (this.appLoader.value && this.appLoader.value.id === id) {
      return this.appLoader;
    } else {
      await this.fetch(id);
      return this.appLoader;
    }
  }

  getId() {
    return this.appLoader.value.id;
  }

  setApp(app: ApplicationEntity) {
    this.appLoader.value = app;
    this.app$.next(app);
  }

  reset() {
    this.appLoader = new DataLoader();
  }
}
