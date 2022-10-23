import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Flight, remapFlight} from '../../model/flight';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-flight-viewer',
  templateUrl: './flight-viewer.component.html',
  styleUrls: ['./flight-viewer.component.css']
})
export class FlightViewerComponent implements OnInit {
  flights: Flight[] = [];

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get<any[]>('http://localhost:8080/flights')
      .pipe(
        map(flights => flights.map(remapFlight))
      )
      .subscribe(flights => this.flights = flights);
  }
}
