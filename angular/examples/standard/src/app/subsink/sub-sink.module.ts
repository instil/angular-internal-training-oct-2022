import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {SubSinkComponent} from './sub-sink.component';
import {Route, RouterModule} from '@angular/router';

const routes: Route[] = [
  {path: '', component: SubSinkComponent},
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    SubSinkComponent
  ]
})
export default class SubSinkModule {
}
