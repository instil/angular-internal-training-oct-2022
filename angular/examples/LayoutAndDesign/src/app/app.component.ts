import {Component} from '@angular/core';
import {bootstrapRoutes, materialRoutes} from './routes';
import {Options} from './services/options.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  bootstrapRoutes = bootstrapRoutes;
  materialRoutes = materialRoutes;

  constructor(public readonly options: Options) {
  }
}
