import {TestBed} from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {Flight, remapFlight} from '../model/flight';
import {FlightsService} from './flights.service';
import {environment} from '../../environments/environment';
import {BusyService} from './busy.service';
import SpyObj = jasmine.SpyObj;
import {pipe} from 'rxjs';

const sampleFlightsJson = [
  {id: 101, origin: 'AAA', destination: 'BBB', arrival: '2019-01-01', departure: '2019-01-02'},
  {id: 102, origin: 'BBB', destination: 'CCC', arrival: '2019-01-02', departure: '2019-01-03'},
  {id: 103, origin: 'CCC', destination: 'DDD', arrival: '2019-01-03', departure: '2019-01-04'},
];

const sampleFlights = (sampleFlightsJson as unknown as Flight[]).map(remapFlight);

describe('FlightsService', () => {
  let httpMock: HttpTestingController;
  let target: FlightsService;
  let busyService: SpyObj<BusyService>;

  beforeEach(() => {
    busyService = jasmine.createSpyObj<BusyService>('BusyService', ['busyOp']);
    busyService.busyOp.and.callFake(() => pipe());

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        FlightsService,
        {provide: BusyService, useValue: busyService}
      ]
    });

    httpMock = TestBed.inject(HttpTestingController);
    // Flights are read during constructions
    target = TestBed.inject(FlightsService);
  });

  afterEach(() => {
    httpMock.verify();
  });

  describe('Getting Flights', () => {
    it('should get all flights', () => {
      target.getAll()
        .subscribe(flights => expect(flights).toEqual(sampleFlights));

      httpMock.expectOne(environment.serverUrl)
        .flush(sampleFlightsJson);
    });

    it('should get single flight', () => {
      target.get(102)
        .subscribe(flight => expect(flight).toEqual(sampleFlights[1]));

      httpMock.expectOne(`${environment.serverUrl}/102`)
        .flush(sampleFlightsJson[1]);
    });
  });

  describe('Flight Observable', () => {
    it('should initially have empty flights', () => {
      expectFlightsToEqual([]);
    });

    it('should get all Flights when refreshed', () => {
      target.refresh();

      httpMock.expectOne(environment.serverUrl)
        .flush(sampleFlightsJson);
      expectFlightsToEqual(sampleFlights);
    });

    it('should be able to clear flights', () => {
      target.refresh();
      httpMock.expectOne(environment.serverUrl)
        .flush(sampleFlightsJson);

      target.clear();

      expectFlightsToEqual([]);
    });
  });

  describe('Removing Flights', () => {
    it('should remove via a delete', () => {
      target.remove(101).subscribe();

      const request = httpMock.expectOne(`${environment.serverUrl}/101`);
      expect(request.request.method).toEqual('DELETE');

      expectFlightsToEqual([]);
    });

    it('should refresh when remove completes', () => {
      const expectedNewFlights = sampleFlights.slice(0, 2);
      target.remove(101).subscribe();

      httpMock.expectOne(`${environment.serverUrl}/101`).flush('');
      httpMock.expectOne(`${environment.serverUrl}`).flush(expectedNewFlights);

      expectFlightsToEqual(expectedNewFlights);
    });
  });

  describe('Updating Flights', () => {
    it('should put flight', () => {
      target.put(sampleFlights[2]).subscribe();

      const request = httpMock.expectOne({
        method: 'PUT',
        url: `${environment.serverUrl}/103`
      });
      expect(request.request.body).toEqual(sampleFlights[2]);
    });

    it('should refresh when put completes', () => {
      const expectedNewFlights = sampleFlights.slice(0, 1);
      target.put(sampleFlights[2]).subscribe();

      httpMock.expectOne(`${environment.serverUrl}/103`).flush('');
      httpMock.expectOne(`${environment.serverUrl}`).flush(expectedNewFlights);

      expectFlightsToEqual(expectedNewFlights);
    });
  });

  describe('Using Busy Service', () => {
    it('should use busy op when getting all', () => {
      target.getAll();

      expect(busyService.busyOp).toHaveBeenCalled();
    });

    it('should use busy op when getting single', () => {
      target.get(101);

      expect(busyService.busyOp).toHaveBeenCalled();
    });

    it('should use busy op when removing', () => {
      target.remove(101);

      expect(busyService.busyOp).toHaveBeenCalled();
    });

    it('should use busy op when updatings', () => {
      target.put(sampleFlights[0]);

      expect(busyService.busyOp).toHaveBeenCalled();
    });
  });

  function expectFlightsToEqual(flights: Flight[]): void {
    target.flights.subscribe(actual => {
      expect(actual).toEqual(flights);
    });
  }
});
