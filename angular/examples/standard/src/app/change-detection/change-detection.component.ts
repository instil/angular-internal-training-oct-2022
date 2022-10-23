import {ApplicationRef, ChangeDetectionStrategy, ChangeDetectorRef, Component, NgZone, OnInit} from '@angular/core';

@Component({
  selector: 'app-change-detection',
  templateUrl: './change-detection.component.html',
  styleUrls: ['./change-detection.component.scss'],
})
export class ChangeDetectionComponent {
  // We use an array as immutable data changes (reference changes) will be detected
  value = [0];

  constructor() { }
}
