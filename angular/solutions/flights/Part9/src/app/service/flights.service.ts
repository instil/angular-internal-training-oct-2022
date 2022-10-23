import {BehaviorSubject, Observable} from 'rxjs';
import {Flight, remapFlight} from '../model/flight';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, tap} from 'rxjs/operators';
import {environment} from '../../environments/environment';
import {BusyService} from './busy.service';

const url = environment.serverUrl;

@Injectable({
  providedIn: 'root'
})
export class FlightsService {
  private flightsSubject = new BehaviorSubject<Flight[]>([]);

  constructor(private http: HttpClient,
              private busyService: BusyService) {
  }

  get flights(): Observable<Flight[]> {
    return this.flightsSubject;
  }

  getAll(): Observable<Flight[]> {
    return this.http.get<Flight[]>(url)
      .pipe(
        this.busyService.busyOp(),
        map(json => json.map(remapFlight))
      );
  }

  refresh() {
    return this.getAll()
      .subscribe(flights => this.flightsSubject.next(flights));
  }

  clear(): void {
    this.flightsSubject.next([]);
  }

  remove(flightNumber: number): Observable<any> {
    return this.http.delete(`${url}/${flightNumber}`)
      .pipe(
        this.busyService.busyOp(),
        tap(() => this.refresh())
      );
  }

  get(id: number) {
    return this.http.get<Flight>(`${url}/${id}`)
      .pipe(
        this.busyService.busyOp(),
        map(remapFlight)
      );
  }

  put(flight: Flight): Observable<unknown> {
    return this.http.put(`${url}/${flight.id}`, flight)
      .pipe(
        this.busyService.busyOp(),
        tap(() => this.refresh())
      );
  }
}
