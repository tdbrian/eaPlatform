import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { DomainsComponent } from './domains.component';
import { DomainsNavComponent } from './domains-nav/domains-nav.component';
import { ProcessesComponent } from './processes/processes.component';
import { TypesComponent } from './types/types.component';
import { TasksComponent } from './tasks/tasks.component';
import { TaskComponent } from './task/task.component';
import { SharedModule } from '../_shared/shared.module';

const routes = [
  {
    path: 'domains',
    component: DomainsComponent,
    children: [
      { path: 'types', component: TypesComponent },
      { path: 'processes', component: ProcessesComponent },
      { path: 'tasks', component: TasksComponent },
      { path: '',   redirectTo: 'types', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [
    DomainsComponent,
    DomainsNavComponent,
    ProcessesComponent,
    TypesComponent,
    TasksComponent,
    TaskComponent
  ]
})
export class DomainsModule { }
