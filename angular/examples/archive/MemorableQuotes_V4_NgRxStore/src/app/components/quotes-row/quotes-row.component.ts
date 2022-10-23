import {Component, Input} from '@angular/core';

@Component({
  selector: '[app-quotes-row]',
  templateUrl: './quotes-row.component.html',
  styleUrls: ['./quotes-row.component.css']
})
export class QuotesRowComponent {
  @Input() source: string;
  @Input() text: string;

  constructor() {
    this.source = 'default source text';
    this.text = 'default quote text';
  }
}
