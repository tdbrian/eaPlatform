import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CornerLogoComponent } from './components/corner-logo/corner-logo.component';
import { RouterModule } from '@angular/router';
import { DataLoaderComponent } from './components/data-loader/data-loader.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    CornerLogoComponent,
    DataLoaderComponent
  ],
  providers: [
  ],
  exports: [
    CornerLogoComponent,
    DataLoaderComponent
  ]
})
export class SharedModule { }
