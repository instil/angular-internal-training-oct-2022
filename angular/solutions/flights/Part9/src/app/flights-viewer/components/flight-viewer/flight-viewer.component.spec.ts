import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FlightViewerComponent} from './flight-viewer.component';
import {BehaviorSubject, of} from 'rxjs';
import {FlightsService} from '../../../service/flights.service';
import {BusyService} from '../../../service/busy.service';
import {Flight} from '../../../model/flight';
import SpyObj = jasmine.SpyObj;
import {createComponentStub} from '../../../utility/testing.spec';
import createSpyObj = jasmine.createSpyObj;
import {Mutable} from '../../../utility/types';

describe('FlightViewerComponent', () => {
  let component: FlightViewerComponent;
  let fixture: ComponentFixture<FlightViewerComponent>;
  let flightsService: SpyObj<FlightsService>;
  let busyService: SpyObj<Mutable<BusyService>>;
  let flights: BehaviorSubject<Flight[]>;

  beforeEach(async () => {
    flights = new BehaviorSubject<Flight[]>([]);
    flightsService = createSpyObj<FlightsService>('FlightsService', ['refresh', 'clear', 'remove'], {flights});
    busyService = createSpyObj<Mutable<BusyService>>('BusyService', ['busyOp']);

    TestBed.configureTestingModule({
      declarations: [
        FlightViewerComponent,
        createComponentStub('app-flight-details', ['flight'], ['flightChange']),
        createComponentStub('[app-flight-viewer-row]', ['flight'], ['flightSelected'])
      ],
      providers: [
        {provide: FlightsService, useValue: flightsService},
        {provide: BusyService, useValue: busyService}
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(FlightViewerComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should refresh using the flights service when initialised', async () => {
    // ngOnInit will have been called when detectChange was fired in beforeEach
    expect(flightsService.refresh).toHaveBeenCalled();
  });

  it('should clear flights on clear click', async () => {
    fixture.nativeElement.querySelector('[data-testid="clear-button"]')
      .click();

    expect(flightsService.clear).toHaveBeenCalled();
  });

  it('should refresh flights on refresh click', async () => {
    flightsService.refresh.calls.reset();
    fixture.nativeElement.querySelector('[data-testid="refresh-button"]')
      .click();

    expect(flightsService.refresh).toHaveBeenCalled();
  });

  it('should show no data if no flights', async () => {
    const rows = fixture.nativeElement.querySelectorAll('tbody tr');
    expect(rows.length).toEqual(0);
  });

  it('should show rows for all flights', async () => {
    flights.next([{} as Flight, {} as Flight, {} as Flight]);
    fixture.detectChanges();

    const rows = fixture.nativeElement.querySelectorAll('tbody tr');
    expect(rows.length).toEqual(3);
  });

  it('should not show spinner is isBusy is false', async () => {
    const spinner = fixture.nativeElement.querySelector('[class="fa fa-spinner"]');
    expect(spinner).toBeNull();
  });

  it('should show spinner if isBusy is true', async () => {
    busyService.isBusy = true;
    fixture.detectChanges();

    const spinner = fixture.nativeElement.querySelector('[class="fa fa-spinner"]');
    expect(spinner).not.toBeNull();
  });
});
