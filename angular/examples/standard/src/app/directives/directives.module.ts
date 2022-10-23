import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {DirectivesComponent} from './directives.component';
import {Route, RouterModule} from '@angular/router';
import {InstilRepeatDirective} from './instil-repeat.directive';

const routes: Route[] = [
  {path: '', component: DirectivesComponent},
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    DirectivesComponent,
    InstilRepeatDirective
  ]
})
export default class DirectivesModule {
}
