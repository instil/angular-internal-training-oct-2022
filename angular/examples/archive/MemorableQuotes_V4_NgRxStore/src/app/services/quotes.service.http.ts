import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

import {Quote} from '../model/quote';
import {QuotesService} from './quotes.service';
import {Observable} from 'rxjs';

@Injectable()
export class QuotesServiceHttp extends QuotesService {
  constructor(private http: HttpClient) {
    super();
  }

  fetchQuotes(): Observable<Quote[]> {
    console.log('Fetching quotes via service...');

    return this.http.get<Quote[]>('assets/data/quotes.json');
  }
}
