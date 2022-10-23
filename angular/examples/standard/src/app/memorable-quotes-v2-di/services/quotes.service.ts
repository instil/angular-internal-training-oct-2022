import {Quote} from '../model/quote';
import {Observable} from 'rxjs';

export interface QuotesService {
  getAll(): Observable<Quote[]>;
}
