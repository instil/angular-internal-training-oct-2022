import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ChangeDetectionComponent} from './change-detection.component';
import {Route, RouterModule} from '@angular/router';
import { ValueComponent } from './value.component';

const routes: Route[] = [
  {path: '', component: ChangeDetectionComponent},
];

@NgModule({
  declarations: [
    ChangeDetectionComponent,
    ValueComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export default class ChangeDetectionModule { }
