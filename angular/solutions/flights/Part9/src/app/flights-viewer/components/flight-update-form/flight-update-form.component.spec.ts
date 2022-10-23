import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FlightUpdateFormComponent} from './flight-update-form.component';
import {RouterTestingModule} from '@angular/router/testing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {of} from 'rxjs';
import {FlightsService} from '../../../service/flights.service';
import SpyObj = jasmine.SpyObj;
import createSpyObj = jasmine.createSpyObj;
import {Flight} from '../../../model/flight';
import {DatePickerModule} from '../../../date-picker/date-picker.module';

const dummyFlight = {
  id: 999,
  origin: 'AAA',
  destination: 'BBB',
  arrival: new Date(2020, 1, 2),
  departure: new Date(2020, 3, 4)
};

describe('FlightUpdateFormComponent', () => {
  let component: FlightUpdateFormComponent;
  let fixture: ComponentFixture<FlightUpdateFormComponent>;
  let flightsService: SpyObj<FlightsService>;
  let router: SpyObj<Router>;

  beforeEach(async () => {
    flightsService = createSpyObj<FlightsService>('FlightsService', ['get', 'put']);
    router = createSpyObj<Router>('Router', ['navigateByUrl']);

    await TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        DatePickerModule
      ],
      declarations: [FlightUpdateFormComponent],
      providers: [
        {provide: FlightsService, useValue: flightsService},
        {provide: ActivatedRoute, useValue: {params: of({id: 123})}},
        {provide: Router, useValue: router}
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(FlightUpdateFormComponent);
    component = fixture.componentInstance;
  });

  it('should initialise form as blank', () => {
    const formValue = component.form.value;

    expect(formValue.id).toEqual('');
    expect(formValue.origin).toEqual('');
    expect(formValue.destination).toEqual('');
    expect(formValue.arrival).toBeInstanceOf(Date);
    expect(formValue.departure).toBeInstanceOf(Date);
  });

  it('should initialise flight from route param', () => {
    flightsService.get.and.returnValue(of(dummyFlight));

    fixture.detectChanges();

    expect(component.flight).toBe(dummyFlight);
    expect(component.form.value).toEqual(dummyFlight);
  });

  it('should be valid to have different airports', () => {
    component.form.setValue(dummyFlight);

    expect(component.form.valid).toEqual(true);
  });

  it('should be invalid to have the same airports', () => {
    component.form.setValue({
      ...dummyFlight,
      destination: dummyFlight.origin
    });

    expect(component.form.valid).toEqual(false);
  });

  it('should use flight service to update flight and then navigate ', () => {
    component.flight = {} as Flight;
    flightsService.put.and.returnValue(of(''));
    component.form.setValue(dummyFlight);

    component.updateFlight();

    expect(flightsService.put).toHaveBeenCalledWith(dummyFlight);
    expect(router.navigateByUrl).toHaveBeenCalledWith('/flights/999');
  });
});
