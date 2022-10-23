import {HttpClient} from '@angular/common/http';
import {Injectable, Injector} from '@angular/core';

import {Quote} from '../model/quote';
import {QuotesService} from './quotes.service';
import {Observable} from 'rxjs';
import {LoggerService} from './logger.service';

@Injectable()
export class QuotesServiceHttp implements QuotesService {
  constructor(
    private http: HttpClient,
    private logger: LoggerService,
    private injector: Injector
  ) {
    this.logger.log('Instantiating QuotesServiceHttp');
    this.logger.log(injector);
  }

  getAll(): Observable<Quote[]> {
    this.logger.log('Fetching quotes via service...');

    return this.http.get<Quote[]>('assets/data/quotes.json');
  }
}
