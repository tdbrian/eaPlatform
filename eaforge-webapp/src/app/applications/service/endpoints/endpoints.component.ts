import { Component, OnInit } from '@angular/core';
import { CurrentApplicationService } from '../../CurrentApplication.service';

@Component({
  selector: 'app-endpoints',
  templateUrl: './endpoints.component.html'
})
export class EndpointsComponent implements OnInit {

  constructor(public appService: CurrentApplicationService) { }

  ngOnInit() {
  }

}
