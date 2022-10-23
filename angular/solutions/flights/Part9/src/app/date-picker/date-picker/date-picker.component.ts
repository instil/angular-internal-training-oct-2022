import {Component, forwardRef, OnInit} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: DatePickerComponent,
    }
  ]
})
export class DatePickerComponent implements ControlValueAccessor {
  private onChange: null | ((_: any) => void) = null;

  private intervalDate: Date = new Date();

  get value(): Date {
    return this.intervalDate;
  }

  set value(value: Date) {
    this.intervalDate = new Date(value);
    this.onChange?.(this.intervalDate);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState(isDisabled: boolean): void {
  }

  writeValue(obj: any): void {
    this.value = obj;
  }
}
