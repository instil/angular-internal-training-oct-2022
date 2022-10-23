import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Flight} from '../../../model/flight';
import {BusyService} from '../../../service/busy.service';

@Component({
  selector: '[app-flight-viewer-row]',
  templateUrl: './flight-viewer-row.component.html',
  styleUrls: ['./flight-viewer-row.component.css']
})
export class FlightViewerRowComponent implements OnInit {
  @Input('app-flight-viewer-row') flight!: Flight;
  @Output() selected = new EventEmitter<Flight>();
  @Output() deleted = new EventEmitter<Flight>();

  constructor(private busyService: BusyService) {
  }

  get isBusy(): boolean {
    return this.busyService.isBusy;
  }

  ngOnInit(): void {
  }

  deleteFlight(): void {
    this.deleted.emit(this.flight);
  }
}
