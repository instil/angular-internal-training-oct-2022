import { EventEmitter } from '@angular/core';
import {Component, Input, OnInit, Output} from '@angular/core';
import {Flight} from '../../../model/flight';
import {FlightsService} from '../../../service/flights.service';
import {ActivatedRoute} from '@angular/router';
import {map, switchMap, tap} from 'rxjs/operators';

@Component({
  selector: 'app-flight-details',
  templateUrl: './flight-details.component.html',
  styleUrls: ['./flight-details.component.css']
})
export class FlightDetailsComponent implements OnInit {
  flight: Flight | null = null;

  constructor(private flightsService: FlightsService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params
      .pipe(
        map(params => params.id as number),
        switchMap(id => this.flightsService.get(id)),
      )
      .subscribe(flight => this.flight = flight);
  }
}
