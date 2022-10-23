import { EventEmitter } from '@angular/core';
import {Component, Input, OnInit, Output} from '@angular/core';
import {Flight} from '../../model/flight';

@Component({
  selector: 'app-flight-details',
  templateUrl: './flight-details.component.html',
  styleUrls: ['./flight-details.component.css']
})
export class FlightDetailsComponent {
  @Input() flight: Flight | null = null;
  @Output() flightChange = new EventEmitter<Flight | null>();

  clearSelected() {
    this.flight = null;
    this.flightChange.emit(this.flight)
  }
}
