import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CurrentApplicationService } from '../CurrentApplication.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html'
})
export class ServiceComponent implements OnInit {

  constructor(private route: ActivatedRoute, private app: CurrentApplicationService) { }

  async ngOnInit() {
    this.route.paramMap.subscribe(async params => {
      const id = params.get('id');
      await this.app.get(parseFloat(id));
    });
  }
}
