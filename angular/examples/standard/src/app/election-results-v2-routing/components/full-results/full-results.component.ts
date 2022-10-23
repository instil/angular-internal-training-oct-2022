import {Component, OnInit, Output} from '@angular/core';

import {Candidate} from '../../model/candidate';
import {ResultsService} from '../../services/results.service';

@Component({
  selector: 'app-full-results',
  templateUrl: './full-results.component.html',
  styleUrls: ['./full-results.component.css'],
})
export class FullResultsComponent implements OnInit{
  results: Candidate[] = [];

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

  constructor(private service: ResultsService) {
  }

  ngOnInit(): void {
    this.service.getAll().subscribe(results => this.results = results);
  }
}

