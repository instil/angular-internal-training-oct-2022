import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-expander',
  templateUrl: './expander.component.html',
  styleUrls: ['./expander.component.css']
})
export class ExpanderComponent {
  panel1Open = false;
  panel2Open = false;
  multi = false;

  get currentPanel(): number {
    return this.panel1Open ? 1 : this.panel2Open ? 2 : -1;
  }

  set currentPanel(value: number) {
    this.panel1Open = value === 1;
    this.panel2Open = value === 2;
  }

  closeAll(): void {
    this.panel1Open = false;
    this.panel2Open = false;
  }
}
