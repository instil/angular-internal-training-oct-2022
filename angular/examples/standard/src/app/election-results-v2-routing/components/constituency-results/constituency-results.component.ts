import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {Candidate} from '../../model/candidate';
import {ResultsService} from '../../services/results.service';
import {map, switchMap, tap} from 'rxjs/operators';

@Component({
  // INTERESTING: No selector as used by routing
  templateUrl: './constituency-results.component.html',
  styleUrls: ['./constituency-results.component.css'],
})
export class ConstituencyResultsComponent implements OnInit {
  results: Candidate[] = [];
  constituencyName = '';

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
    function byConstituency(candidate: Candidate, constituency: string): boolean {
      return candidate.constituency.toLowerCase().includes(constituency.toLowerCase());
    }

    // INTERESTING: We don't need to unsubscribe - Angular will automatically remove the subscription
    //              when the component is destroyed
    this.route.params
      .pipe(
        map(params => params.name),
        tap(name => this.constituencyName = name),
        switchMap(name => this.resultsService.getAll()),
      )
      .subscribe(candidates => {
        this.results = candidates.filter(c => byConstituency(c, this.constituencyName));
      });
  }
}

