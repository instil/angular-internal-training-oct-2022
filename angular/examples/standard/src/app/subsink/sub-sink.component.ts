import {Component, OnDestroy, OnInit} from '@angular/core';
import {BehaviorSubject, interval, ReplaySubject, Subject, Subscription} from 'rxjs';
import {SubSink} from 'subsink';
import {tap} from 'rxjs/operators';

function log(): void {
  console.log('Subscriber event');
}

const logMe = tap<number>(log);

@Component({
  selector: 'app-subjects',
  templateUrl: './sub-sink.component.html',
  styleUrls: ['./sub-sink.component.css']
})
export class SubSinkComponent implements OnInit, OnDestroy {
  counter = interval(1000).pipe(logMe);
  subject = new Subject<number>();
  behaviorSubject = new BehaviorSubject(-1);
  replaySubject = new ReplaySubject<number>();

  subSink = new SubSink();

  ngOnInit(): void {
    // INTERESTING: Add a single subscription using assignment
    this.subSink.sink = this.counter.subscribe(this.subject);

    // INTERESTING: Adding multiple using add method
    this.subSink.add(
      this.counter.subscribe(this.behaviorSubject),
      this.counter.subscribe(this.replaySubject),
    );
  }

  ngOnDestroy(): void {
    this.subSink.unsubscribe();
  }
}
