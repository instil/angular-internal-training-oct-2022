import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CustomControlComponent} from './custom-control.component';
import {Route, RouterModule} from '@angular/router';
import { CounterInputComponent } from './counter-input/counter-input.component';

const routes: Route[] = [
  {path: '', component: CustomControlComponent},
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    CustomControlComponent,
    CounterInputComponent
  ]
})
export default class CustomControlModule {
}
