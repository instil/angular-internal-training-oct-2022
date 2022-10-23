import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {ElectoralResultsComponent} from './components/election-results/electoral-results.component';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FullResultsComponent} from './components/full-results/full-results.component';
import {HomeComponent} from './components/home/home.component';
import {ConstituencyResultsComponent} from './components/constituency-results/constituency-results.component';
import {PartyResultsComponent} from './components/party-results/party-results.component';
import {ResultsService} from './services/results.service';

const routes: Routes = [
  {
    path: '',
    component: ElectoralResultsComponent,
    children: [
      {path: 'full-results', component: FullResultsComponent},

      // INTERESTING: Passing a parameters in the URL path
      {path: 'by-constituency/:name', component: ConstituencyResultsComponent},
      {path: 'by-party/:name', component: PartyResultsComponent},
      {path: '**', redirectTo: ''},
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    ElectoralResultsComponent,
    FullResultsComponent,
    HomeComponent,
    ConstituencyResultsComponent,
    PartyResultsComponent
  ],
  providers: [
    ResultsService
  ]
})
export default class ElectionResultsV2RoutingModule {
}
