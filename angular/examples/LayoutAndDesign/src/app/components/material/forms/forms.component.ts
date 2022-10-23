import {Component, OnInit} from '@angular/core';
import {formatDate} from '@angular/common';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {
  textValue = '';
  numberValue = '';
  emailValue = '';
  passwordValue = '';
  rangeValue = '';
  dateValue = new Date();

  get dateValueAsString(): string {
    return formatDate(this.dateValue, 'yyyy-MM-dd', 'en');
  }

  set dateValueAsString(value: string) {
    this.dateValue = new Date(value);
  }

  get dateTimeValueAsString(): string {
    return formatDate(this.dateValue, 'yyyy-MM-ddThh:mm', 'en');
  }

  set dateTimeValueAsString(value: string) {
    this.dateValue = new Date(value);
  }
}
