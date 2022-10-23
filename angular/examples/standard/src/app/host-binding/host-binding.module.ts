import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HostBindingComponent} from './host-binding.component';
import {RollColourChangeDirective} from './roll-colour-change.directive';
import {Route, RouterModule} from '@angular/router';

const routes: Route[] = [
  {path: '', component: HostBindingComponent},
];

@NgModule({
  declarations: [
    HostBindingComponent,
    RollColourChangeDirective
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export default class HostBindingModule { }
