import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FlightViewerComponent} from './components/flight-viewer/flight-viewer.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { FlightViewerRowComponent } from './components/flight-viewer-row/flight-viewer-row.component';
import {TokenInterceptor} from "./interceptors/token.interceptor";


@NgModule({
  declarations: [
    FlightViewerComponent,
    FlightViewerRowComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [
    FlightViewerComponent
  ]
})
export class AppModule {
}
