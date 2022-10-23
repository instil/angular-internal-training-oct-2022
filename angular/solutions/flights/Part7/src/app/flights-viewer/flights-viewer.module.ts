import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FlightViewerComponent} from './components/flight-viewer/flight-viewer.component';
import {FlightViewerRowComponent} from './components/flight-viewer-row/flight-viewer-row.component';
import {FlightDetailsComponent} from './components/flight-details/flight-details.component';
import {RouterModule, Routes} from '@angular/router';
import {FlightUpdateFormComponent} from './components/flight-update-form/flight-update-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

export const routes: Routes = [
  {path: ':id/edit', component: FlightUpdateFormComponent},
  {path: ':id', component: FlightDetailsComponent},
  {path: '', component: FlightViewerComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  declarations: [
    FlightViewerComponent,
    FlightViewerRowComponent,
    FlightDetailsComponent,
    FlightUpdateFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export default class FlightsViewerModule { }
