import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FlightViewerComponent} from './components/flight-viewer/flight-viewer.component';
import {HttpClientModule} from '@angular/common/http';
import { FlightViewerRowComponent } from './components/flight-viewer-row/flight-viewer-row.component';


@NgModule({
  declarations: [
    FlightViewerComponent,
    FlightViewerRowComponent
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
