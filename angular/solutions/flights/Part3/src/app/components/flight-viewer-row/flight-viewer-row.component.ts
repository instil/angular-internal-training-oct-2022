import {Component, Input, OnInit} from '@angular/core';
import {Flight} from '../../model/flight';

@Component({
  selector: '[app-flight-viewer-row]',
  templateUrl: './flight-viewer-row.component.html',
  styleUrls: ['./flight-viewer-row.component.css']
})
export class FlightViewerRowComponent implements OnInit {
  @Input('app-flight-viewer-row') flight!: Flight;

  constructor() { }

  ngOnInit() {
  }
}
