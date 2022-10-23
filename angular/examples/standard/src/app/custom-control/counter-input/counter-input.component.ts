import {Component, EventEmitter, forwardRef, Input, OnInit, Output} from '@angular/core';
import {ControlValueAccessor, FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-counter-input',
  templateUrl: './counter-input.component.html',
  styleUrls: ['./counter-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: CounterInputComponent,
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: CounterInputComponent,
      multi: true
    },
  ]
})
export class CounterInputComponent implements ControlValueAccessor {
  private internalValue = 0;
  private onChange: null | ((_: any) => void) = null;

  @Input() label = '';
  @Input() min: number | null = null;
  @Input() max: number | null = null;

  get value(): number {
    return this.internalValue;
  }

  @Input() set value(input: number) {
    this.internalValue = input;
    this.valueChange.emit(this.internalValue);
    this.onChange?.(input);
  }

  @Output() valueChange = new EventEmitter<number>();

  validate({value}: FormControl): any {
    console.log('Validating');
    if (this.min !== null && value < this.min) {
      return {invalid: true};
    }

    if (this.max !== null && value > this.max) {
      return {invalid: true};
    }

    return null;
  }

  writeValue(obj: any): void {
    if (!obj) {
      return;
    }

    if (typeof obj !== 'number') {
      throw new Error('Invalid type - must be number');
    }

    this.value = obj;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
  }

  decrement(): void {
    this.value--;
  }

  increment(): void {
    this.value++;
  }
}
