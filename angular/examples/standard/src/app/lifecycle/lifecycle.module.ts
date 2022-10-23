import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {LifecycleComponent} from './lifecycle.component';
import {Route, RouterModule} from '@angular/router';
import { LapCounterComponent } from './lap-counter.component';

const routes: Route[] = [
  {path: '', component: LifecycleComponent},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    LifecycleComponent,
    LapCounterComponent
  ]
})
export default class LifecycleModule {
}
