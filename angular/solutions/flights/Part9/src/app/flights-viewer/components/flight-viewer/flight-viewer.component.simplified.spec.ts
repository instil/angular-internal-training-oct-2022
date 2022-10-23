import {FlightViewerComponent} from './flight-viewer.component';
import {BehaviorSubject, of} from 'rxjs';
import {FlightsService} from '../../../service/flights.service';
import {BusyService} from '../../../service/busy.service';
import {Flight} from '../../../model/flight';
import SpyObj = jasmine.SpyObj;
import createSpyObj = jasmine.createSpyObj;
import {Mutable} from '../../../utility/types';

describe('FlightViewerComponent Simplified', () => {
  let component: FlightViewerComponent;
  let flightsService: SpyObj<FlightsService>;
  let busyService: SpyObj<BusyService>;
  let flights: BehaviorSubject<Flight[]>;

  beforeEach(() => {
    flights = new BehaviorSubject<Flight[]>([]);
    flightsService = createSpyObj<FlightsService>('FlightsService', ['refresh', 'clear', 'remove'], {flights});
    busyService = createSpyObj<BusyService>('BusyService', ['busyOp']);

    component = new FlightViewerComponent(flightsService, busyService);
  });

  it('should refresh using the flights service when initialised', () => {
    component.ngOnInit();

    expect(flightsService.refresh).toHaveBeenCalled();
  });

  it('should clear flights via the flight service', () => {
    component.clearFlights();

    expect(flightsService.clear).toHaveBeenCalled();
  });

  it('should delete flight via the flight service', () => {
    flightsService.remove.and.returnValue(of(''));
    component.deleteFlight({id: 123} as Flight);

    expect(flightsService.remove).toHaveBeenCalledWith(123);
  });

  [true, false].forEach(isBusy =>
    it(`should report isBusy via Busy Service - ${isBusy}`, () => {
      (busyService as Mutable<BusyService>).isBusy = isBusy;

      expect(component.isBusy).toEqual(isBusy);
    })
  );
});
