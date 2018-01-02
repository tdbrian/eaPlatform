import { Component, Input } from '@angular/core';
import { DataLoader } from '../../models/DataLoader';

@Component({
  selector: 'app-data-loader',
  templateUrl: './data-loader.component.html',
  styleUrls: ['./data-loader.component.scss']
})
export class DataLoaderComponent {
  @Input() dataLoader: DataLoader<any>;
}
