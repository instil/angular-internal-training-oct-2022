import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {SubjectsComponent} from './subjects.component';
import {Route, RouterModule} from '@angular/router';

const routes: Route[] = [
  {path: '', component: SubjectsComponent},
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    SubjectsComponent
  ]
})
export default class SubjectsModule {
}
