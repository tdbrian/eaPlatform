import { Component } from '@angular/core';
import { UrlSegment } from '@angular/router/src/url_tree';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { CurrentApplicationService } from './CurrentApplication.service';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html'
})
export class ApplicationsComponent {
  isServiceRoute = false;

  constructor(private router: Router, private currentApp: CurrentApplicationService ) {
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isServiceRoute = this.router.isActive('applications/service', false);
      }
    });
  }
}
