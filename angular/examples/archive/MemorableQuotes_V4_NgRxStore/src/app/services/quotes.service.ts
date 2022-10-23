import {Quote} from '../model/quote';
import {Observable} from 'rxjs';

export abstract class QuotesService {
  abstract fetchQuotes(): Observable<Quote[]>;
}
