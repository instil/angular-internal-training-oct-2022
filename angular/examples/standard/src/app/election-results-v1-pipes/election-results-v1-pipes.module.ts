import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ElectoralResultsComponent} from './components/election-results/electoral-results.component';
import {Route, RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

const routes: Route[] = [
  {path: '', component: ElectoralResultsComponent},
];

@NgModule({
  declarations: [
    ElectoralResultsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ]
})
export default class ElectionResultsV1PipesModule {
}
