import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DomInteractionComponent} from './dom-interaction.component';
import {Route, RouterModule} from '@angular/router';

const routes: Route[] = [
  {path: '', component: DomInteractionComponent},
];

@NgModule({
  declarations: [
    DomInteractionComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export default class DomInteractionModule { }
