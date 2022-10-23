import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {Candidate} from '../model/candidate';

@Injectable()
export class ResultsService {
  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Candidate[]> {
    return this.http
      .get<Candidate[]>('assets/data/electionResults.json');
  }
}
