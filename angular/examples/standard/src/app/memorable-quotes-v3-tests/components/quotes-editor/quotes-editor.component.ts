import {Component, OnInit} from '@angular/core';
import {Quote} from '../../model/quote';
import {QuotesService} from '../../services/quotes.service';

@Component({
  selector: 'app-quotes-editor',
  templateUrl: './quotes-editor.component.html',
  styleUrls: ['./quotes-editor.component.scss'],
})
export class QuotesEditorComponent implements OnInit {
  quotations: Quote[] = [];
  newText = 'Get to the chappa!';
  newSource = 'Colonel Matrix';

  constructor(private quotesService: QuotesService) {
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
