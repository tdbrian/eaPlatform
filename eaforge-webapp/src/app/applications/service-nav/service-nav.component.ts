import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CurrentApplicationService } from '../CurrentApplication.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-service-nav',
  templateUrl: './service-nav.component.html'
})
export class ServiceNavComponent implements OnInit, OnDestroy {
  id: number;
  appSubscriber: Subscription;

  constructor(
    private currentApp: CurrentApplicationService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  async ngOnInit() {
    this.appSubscriber = this.currentApp.app$.subscribe(async app => {
      if (!app) { return; }
      await this.currentApp.get(this.id);
      this.id = app.id;
    });
  }

  isActive(path: string): boolean {
    if (!this.id) { return false; }
    return this.router.isActive(`applications/service/${this.id}/${path}`, false);
  }

  ngOnDestroy(): void {
    this.appSubscriber.unsubscribe();
  }
}
