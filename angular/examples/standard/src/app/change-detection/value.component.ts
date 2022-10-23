import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.scss'],

  // INTERESTING: Setting the change to onPush means the component only updates if,
  //              - An input reference changes
  //              - A DOM event occurs inside this component
  //              - We manually trigger (see refresh())
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ValueComponent implements OnInit, OnDestroy {
  @Input() value: number[] = [];
  private interval!: number;

  constructor(private changeDetector: ChangeDetectorRef) { }

  refresh(): void {
    // We don't need this line to trigger a refresh as we are reacting to a DOM click event.
    // this.changeDetector.detectChanges();
  }

  ngOnInit(): void {
    this.interval = window.setInterval(() => {
      // We do need this line as changes from timers will not trigger a check
      this.changeDetector.detectChanges();
    }, 5000);
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  decrement(): void {
    this.value[0]--;
  }

  increment(): void {
    this.value[0]++;
  }
}
