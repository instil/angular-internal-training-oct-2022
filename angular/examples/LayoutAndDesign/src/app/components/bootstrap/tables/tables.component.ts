import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent {
  hover = false;
  striped = false;
  border = false;
  borderless = false;
  highlight = false;
  small = false;
  style = 'None';
  headStyle = 'None';

  get tableStyle(): string {
    return this.style === 'None' ? '' : `table-${this.style}`;
  }

  get tableHeadStyle(): string {
    return this.headStyle === 'None' ? '' : `thead-${this.headStyle}`;
  }

  styles = [
    'None',
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
    'light',
    'dark',
  ];

  headStyles = [
    'None',
    'light',
    'dark',
  ];
}
