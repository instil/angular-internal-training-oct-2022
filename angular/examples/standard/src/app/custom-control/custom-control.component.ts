import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-subjects',
  templateUrl: './custom-control.component.html',
  styleUrls: ['./custom-control.component.css']
})
export class CustomControlComponent {
  bindingNumber = 7;
  templateNumber = 42;
  form: FormGroup;

  get reactiveNumber(): number {
    return this.form.controls.reactiveNumber.value;
  }

  constructor(private formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      reactiveNumber: [99, Validators.compose([
        Validators.required,
        Validators.min(90),
        Validators.max(110),
      ])]
    });
  }
}
