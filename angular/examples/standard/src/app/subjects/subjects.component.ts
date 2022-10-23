import {Component, OnDestroy, OnInit} from '@angular/core';
import {BehaviorSubject, interval, ReplaySubject, Subject, Subscription} from 'rxjs';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit, OnDestroy {
  counter = interval(4000);
  subject = new Subject<number>();
  behaviorSubject = new BehaviorSubject(-1);
  replaySubject = new ReplaySubject<number>();

  subscriptions: Subscription[] = [];
  subjectSubscriptions: Subscription[] = [];

  subscriberCount = 0;
  showGui = true;

  ngOnInit(): void {
    this.subjectSubscriptions.push(
      this.counter.subscribe(this.subject),
      this.counter.subscribe(this.behaviorSubject),
      this.counter.subscribe(this.replaySubject),
    );
  }

  ngOnDestroy(): void {
    this.subjectSubscriptions.forEach(subscription => subscription.unsubscribe());
    this.clearSubscribers();
  }

  clearSubscribers(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
    this.subscriptions = [];
  }

  addSubscriber(): void {
    const index = ++this.subscriberCount;
    this.subscriptions.push(
      this.counter.subscribe(value => console.log(`Interval ${index}: ${value}`)),
      this.subject.subscribe(value => console.log(`Subject ${index}: ${value}`)),
      this.behaviorSubject.subscribe(value => console.log(`Behaviour ${index}: ${value}`)),
      this.replaySubject.subscribe(value => console.log(`Replay ${index}: ${value}`))
    );
  }

  toggleGuiSubscribers(): void {
    this.showGui = !this.showGui;
  }
}
