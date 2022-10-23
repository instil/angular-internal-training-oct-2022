import {forwardRef, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {DatePickerComponent} from './date-picker/date-picker.component';
import {FormsModule, NG_VALUE_ACCESSOR} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    DatePickerComponent
  ],
  exports: [
    DatePickerComponent
  ],
  providers: [
  ]
})
export class DatePickerModule { }
