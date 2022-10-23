import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FlightViewerComponent} from './components/flight-viewer/flight-viewer.component';
import {FlightViewerRowComponent} from './components/flight-viewer-row/flight-viewer-row.component';
import {FlightDetailsComponent} from './components/flight-details/flight-details.component';
import {RouterModule, Routes} from '@angular/router';

export const routes: Routes = [
  {path: ':id', component: FlightDetailsComponent},
  {path: '', component: FlightViewerComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  declarations: [
    FlightViewerComponent,
    FlightViewerRowComponent,
    FlightDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export default class FlightsViewerModule { }
