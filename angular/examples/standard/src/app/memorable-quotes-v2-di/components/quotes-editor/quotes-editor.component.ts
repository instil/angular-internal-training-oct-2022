import {Component, Inject, OnInit} from '@angular/core';
import {Quote} from '../../model/quote';
import {HttpClient} from '@angular/common/http';
import {QuotesService} from '../../services/quotes.service';
import {INJECTION_COUNT_TOKEN, QUOTES_SERVICE} from '../../tokens';
import {PropertiesService} from '../../services/properties.service';

@Component({
  selector: 'app-quotes-editor',
  templateUrl: './quotes-editor.component.html',
  styleUrls: ['./quotes-editor.component.scss'],

  // INTERESTING: We can also supply providers in the component config
  providers: [PropertiesService]
})
export class QuotesEditorComponent implements OnInit {
  quotations: Quote[] = [];
  newText: string;
  newSource: string;

  constructor(
    // INTERESTING: For interfaces or primitives we will need to qualify the injection
    @Inject(QUOTES_SERVICE) private quotesService: QuotesService,
    private propsService: PropertiesService
  ) {
    this.newText = propsService.getNewQuoteText();
    this.newSource = propsService.getNewQuoteSource();
  }

  ngOnInit(): void {
    // Use the module injected service to fetch the quotations
    this.quotesService.getAll()
      .subscribe(quotes => this.quotations = quotes);
  }

  addQuotation(): void {
    this.quotations.push({
      text: this.newText,
      source: this.newSource
    });
  }
}
