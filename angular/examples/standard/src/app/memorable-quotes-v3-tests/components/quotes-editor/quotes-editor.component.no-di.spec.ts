import {QuotesEditorComponent} from './quotes-editor.component';
import {QuotesService} from '../../services/quotes.service';
import SpyObj = jasmine.SpyObj;
import {of} from 'rxjs';
import {Quote} from '../../model/quote';

const sampleQuotes: Quote[] = [
  {source: 'Source 1', text: 'Text 1'},
  {source: 'Source 2', text: 'Text 2'},
];

// INTERESTING: We can test components without the TestBed
//              if we are not interested in the HTML aspect
describe('QuotesEditorComponent with no DI', () => {
  let component: QuotesEditorComponent;
  let quotesService: SpyObj<QuotesService>;

  beforeEach(() => {
    quotesService = jasmine.createSpyObj<QuotesService>(['getAll']);
    quotesService.getAll.and.returnValue(of(sampleQuotes));

    component = new QuotesEditorComponent(quotesService);

    // INTERESTING: We will need to manually call lifecycle methods
    component.ngOnInit();
  });

  it('Uses PropsService for initial input values', () => {
    expect(component.newText).toEqual('Get to the chappa!');
    expect(component.newSource).toEqual('Colonel Matrix');
  });

  it('Uses the QuotesService to initialise quotations', () => {
    expect(component.quotations).toBe(sampleQuotes);
  });

  it('Adds a quotations to the array using the new text and source', () => {
    component.newSource = 'AAA';
    component.newText = 'BBB';

    component.addQuotation();

    expect(component.quotations).toEqual([
      {source: 'Source 1', text: 'Text 1'},
      {source: 'Source 2', text: 'Text 2'},
      {source: 'AAA', text: 'BBB'},
    ]);
  });
});
