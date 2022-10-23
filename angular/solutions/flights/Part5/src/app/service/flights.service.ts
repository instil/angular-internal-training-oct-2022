import {BehaviorSubject, Observable} from 'rxjs';
import {Flight, remapFlight} from '../model/flight';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, switchMap, tap} from 'rxjs/operators';
import {environment} from '../../environments/environment';

const url = environment.serverUrl;

@Injectable({
  providedIn: 'root'
})
export class FlightsService {
    private flightsSubject = new BehaviorSubject<Flight[]>([]);

    constructor(private http: HttpClient) {
    }

    get flights(): Observable<Flight[]> {
        return this.flightsSubject;
    }

    getAll(): Observable<Flight[]> {
        return this.http.get<Flight[]>(url)
            .pipe(
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
        tap(() => this.refresh())
      );
  }
}
