import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FlightViewerComponent} from './components/flight-viewer/flight-viewer.component';
import {HttpClientModule} from '@angular/common/http';
import { FlightViewerRowComponent } from './components/flight-viewer-row/flight-viewer-row.component';
import {FlightDetailsComponent} from './components/flight-details/flight-details.component';


@NgModule({
  declarations: [
    FlightViewerComponent,
    FlightViewerRowComponent,
    FlightDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [
    FlightViewerComponent
  ]
})
export class AppModule {
}
