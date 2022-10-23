import {Component, OnInit} from '@angular/core';
import {Quote} from '../../model/quote';
import {PropertiesService} from '../../services/properties.service';
import {QuotesService} from '../../services/quotes.service';
import {QuotesState} from '../../model/quotes.state';
import {Added, Fetched} from '../../actions/quotes.actions';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-quotes-editor',
  templateUrl: './quotes-editor.component.html',
  styleUrls: ['./quotes-editor.component.css'],
  providers: [PropertiesService]
})
export class QuotesEditorComponent {
  quotations: Observable<Quote[]>;
  newText: string;
  newSource: string;

  constructor(private quotesService: QuotesService,
              private propsService: PropertiesService,
              private store: Store<QuotesState>) {
    // Use the component injected service to fetch defaults
    console.log('Consructing componnent');
    this.newText = propsService.getNewQuoteText();
    this.newSource = propsService.getNewQuoteSource();
    this.quotations = store.select('quotes');

    console.log('Fetching data');
    quotesService.fetchQuotes()
      .subscribe(quotes => this.store.dispatch(new Fetched(quotes)));
  }

  addQuotation() {
    this.store.dispatch(new Added(new Quote(this.newText, this.newSource)));
  }
}
