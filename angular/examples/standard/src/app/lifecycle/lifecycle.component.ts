import {AfterViewChecked, AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-subjects',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent
  implements OnInit, OnDestroy, AfterViewInit, AfterViewChecked {

  counter = 0;
  lap1 = 0;
  lap2 = 0;
  private interval: any;

  ngOnInit(): void {
    console.log('Initialising...');
    this.interval = setInterval(() => {
      console.log('Incrementing counter: ', this.counter);
      this.counter += 5;
    }, 5000);
  }

  ngAfterViewInit(): void {
    console.log('AfterViewInit...');
  }

  ngOnDestroy(): void {
    console.log('Destroying...');
    clearInterval(this.interval);
  }

  storeLap(index: number): void {
    // @ts-ignore
    this[`lap${index}`] = this.counter;
  }

  storeLaps(): void {
    this.storeLap(1);
    this.storeLap(2);
  }

  ngAfterViewChecked(): void {
    console.log('AfterViewChecked...');
  }
}
