import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FlightViewerComponent} from './flights-viewer/components/flight-viewer/flight-viewer.component';
import {HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';
import {RoutingModule} from './routing/routing.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
