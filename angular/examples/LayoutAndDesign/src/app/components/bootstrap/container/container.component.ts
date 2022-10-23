import {Component} from '@angular/core';
import {Options} from '../../../services/options.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {

  constructor(public readonly options: Options) { }
}
