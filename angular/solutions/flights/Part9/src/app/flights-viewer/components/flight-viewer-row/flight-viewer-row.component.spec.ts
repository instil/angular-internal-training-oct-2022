import {ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import {FlightViewerRowComponent} from './flight-viewer-row.component';
import {By} from '@angular/platform-browser';
import {RouterTestingModule} from '@angular/router/testing';
import {BlankComponent} from '../../../utility/blank.component';
import {Flight} from '../../../model/flight';
import {Location} from '@angular/common';

describe('FlightViewerRowComponent', () => {
  let component: FlightViewerRowComponent;
  let fixture: ComponentFixture<FlightViewerRowComponent>;
  let location: Location;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        FlightViewerRowComponent,
        BlankComponent
      ],
      imports: [
        RouterTestingModule.withRoutes([
          {path: '999', component: BlankComponent}
        ])
      ]
    }).compileComponents();

    location = TestBed.inject(Location);
    fixture = TestBed.createComponent(FlightViewerRowComponent);
    component = fixture.componentInstance;
    component.flight = {
      id: 999,
      origin: 'AAA',
      destination: 'BBB',
      departure: new Date(2020, 1, 2),
      arrival: new Date(2020, 3, 4),
    };
    fixture.detectChanges();
  });

  it('should emit the flight every time the is flight deleted', () => {
    const flights: Flight[] = [];
    component.deleted.asObservable().subscribe(flight => flights.push(flight));

    component.deleteFlight();
    component.deleteFlight();
    component.deleteFlight();

    expect(flights).toEqual([component.flight, component.flight, component.flight]);
  });

  it('Should format flight on screen correctly', () => {
    const cells = fixture.debugElement.queryAll(By.css('td'));

    expect(cells.length).toEqual(7); // 5 data + 2 buttons
    expect(cells.map(x => x.nativeElement.textContent))
      .toEqual([
        '999',
        'AAA',
        'Feb 2, 2020',
        'BBB',
        'Apr 4, 2020',
        'Select',
        'Delete'
      ]);
  });

  it('should route to edit screen when flight selected', fakeAsync(() => {
    fixture.nativeElement.querySelector('[data-testid="select-button"]')
      .click();

    tick();

    expect(location.path()).toEqual('/999');
  }));
});
