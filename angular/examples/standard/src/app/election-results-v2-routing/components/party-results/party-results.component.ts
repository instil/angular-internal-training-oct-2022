import {Component, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

import {Candidate} from '../../model/candidate';
import {ResultsService} from '../../services/results.service';
import {map, switchMap, tap} from 'rxjs/operators';

@Component({
  // INTERESTING: No selector as accessed only via route
  templateUrl: './party-results.component.html',
  styleUrls: ['./party-results.component.css'],
})
export class PartyResultsComponent implements OnInit {
  results: Candidate[] = [];
  partyName = '';

  partyNamesMap = {
    APNI: 'Alliance Party Of Northern Ireland',
    Con: 'Conservative',
    DUP: 'Democratic Unionist Party',
    Ind: 'Independent',
    SDLP: 'Social Democratic and Labour Party',
    SF: 'Sinn Fein',
    UU: 'Ulster Unionist Party',
    Vote: 'Vote',
    WP: 'Workers Party',
    SEA: 'SEA'
  };

  constructor(
    private route: ActivatedRoute,
    private resultsService: ResultsService
  ) {
  }

  ngOnInit(): void {
    // INTERESTING: Reading the path parameters from the URL
    this.route.params
      .pipe(
        map(params => params.name),
        tap(name => this.partyName = name),
        switchMap(name => this.resultsService.getAll())
      )
      .subscribe(people => this.results = people.filter(item => item.party === this.partyName));
  }
}

