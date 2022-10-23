import {Component, Output} from '@angular/core';
import {ResultsService} from '../../services/results.service';
import {distinct, flatMap, map, mergeMap, toArray} from 'rxjs/operators';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-electoral-results',
  templateUrl: './election-results.component.html',
  styleUrls: ['./election-results.component.css'],
})
export class ElectoralResultsComponent {
  partyNames: string[] = [];

  constructor(private service: ResultsService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.service
      .getAll()
      .pipe(
        mergeMap(results => results.map(result => result.party)),
        distinct(),
        toArray()
      )
      .subscribe(parties => this.partyNames = parties);
  }

  goToFullResults(): void {
    this.router.navigate(['full-results'], {relativeTo: this.activatedRoute});
  }
}
