import { Component, OnInit } from '@angular/core';
import { CurrentApplicationService } from '../../CurrentApplication.service';

@Component({
  selector: 'app-permissions',
  templateUrl: './permissions.component.html'
})
export class PermissionsComponent implements OnInit {

  constructor(public appService: CurrentApplicationService) { }

  ngOnInit() {
  }

}
