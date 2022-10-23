import {Component} from '@angular/core';

@Component({
  selector: 'app-hello-angular',
  template: '<h1 (click)="myHandler()">{{message}}</h1>'
})
export class AppComponent {
  message: string;

  constructor() {
    this.message = 'Hello from Angular 2 (please click me)';
  }

  myHandler() {
    this.message = 'Event handler called!';
  }
}
