import {Component, OnInit} from '@angular/core';
import {Flight} from '../../model/flight';
import {FlightsService} from '../../service/flights.service';
import {Observable} from 'rxjs';
import {finalize, map} from 'rxjs/operators';
import {BusyService} from '../../service/busy.service';

@Component({
  selector: 'app-flight-viewer',
  templateUrl: './flight-viewer.component.html',
  styleUrls: ['./flight-viewer.component.css']
})
export class FlightViewerComponent implements OnInit {
  flights: Flight[] = [];
  selectedFlight: Flight | null = null;

  constructor(public flightsService: FlightsService,
              private busyService: BusyService) {
  }

  get isBusy(): boolean {
    return this.busyService.isBusy;
  }

  ngOnInit(): void {
    this.flightsService.refresh();
  }

  get flightCount(): Observable<number> {
    return this.flightsService.flights
      .pipe(map(flights => flights.length));
  }

  selectFlight(flight: Flight) {
    this.selectedFlight = flight;
  }

  clearFlights() {
    this.flightsService.clear();
    this.selectedFlight = null;
  }

  deleteFlight(flight: Flight) {
    this.flightsService.remove(flight.id)
      .subscribe();
  }
}
