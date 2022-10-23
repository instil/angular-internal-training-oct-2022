import {Component, OnInit} from '@angular/core';
import {Quote} from '../../model/quote';
import {HttpClient} from '@angular/common/http';

// INTERESTING: Both CSS and SCSS are supported
@Component({
  selector: 'app-quotes-editor',
  templateUrl: './quotes-editor.component.html',
  styleUrls: ['./quotes-editor.component.scss']
})
export class QuotesEditorComponent implements OnInit {
  quotations: Quote[] = [];
  newText = 'Get to the chappa!';
  newSource = 'Colonel Matrix';

  constructor(private http: HttpClient) {
  }

  // INTERESTING: Better to initialise in the ngOnInit than constructor
  //              1. Sometimes you need the data that will be wired up after the constructor has ran
  //              2. Errors will not propogate in construction - constructors should be simple
  ngOnInit(): void {
    this.http.get<Quote[]>('assets/data/quotes.json')
      .subscribe(quotes => this.quotations = quotes);
  }

  addQuotation(): void {
    this.quotations.push({
      text: this.newText,
      source: this.newSource
    });
  }
}
