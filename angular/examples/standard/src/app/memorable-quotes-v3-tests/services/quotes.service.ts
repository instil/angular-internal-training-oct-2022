import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

import {Quote} from '../model/quote';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'any'
})
export class QuotesService {
  constructor(private http: HttpClient,) {
  }

  getAll(): Observable<Quote[]> {
    return this.http.get<Quote[]>('assets/data/quotes.json');
  }
}
