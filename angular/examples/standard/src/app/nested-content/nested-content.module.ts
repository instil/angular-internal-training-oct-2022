import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NestedContentComponent} from './nested-content.component';
import {Route, RouterModule} from '@angular/router';
import { SimpleCardComponent } from './components/simple-card/simple-card.component';
import {FormsModule} from '@angular/forms';
import {MultiContentCardComponent} from './components/multi-content-card/multi-content-card.component';
import {TemplateCardComponent} from './components/template-card/template-card.component';

const routes: Route[] = [
  {path: '', component: NestedContentComponent},
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    NestedContentComponent,
    SimpleCardComponent,
    MultiContentCardComponent,
    TemplateCardComponent
  ]
})
export default class NestedContentModule {
}
