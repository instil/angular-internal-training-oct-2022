import {QuotesService} from './quotes.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {TestBed} from '@angular/core/testing';

// INTERESTING: We can use very "dumb" data
//              Use patterns and don't make the reader have to think
const sampleQuotes = [
  {text: 'AAA', source: '111'},
  {text: 'BBB', source: '222'},
  {text: 'CCC', source: '333'}
];

describe('QuotesServiceHttp using TestBed', () => {
  let target: QuotesService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    // INTERESTING: We can set up a TestBed for services too
    //              There are some built in testing modules for Angular features e.g. HttpClient
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });

    httpMock = TestBed.inject(HttpTestingController);
    target = TestBed.inject(QuotesService);
  });

  // INTERESTING: We can verify all setup HTTP communication has completed
  //              within the afterEach
  afterEach(() => {
    httpMock.verify();
  });

  function setupMockQuotesAndVerify(): void {
    // INTERESTING: We can flush out data to resolve HTTP requests
    httpMock.expectOne('assets/data/quotes.json')
      .flush(sampleQuotes);
  }

  it('Quotes can be fetched', () => {
    target.getAll()
      .subscribe(quotes => expect(quotes.length).toEqual(3));

    // INTERESTING: We must do the flush after the subscribe is in place
    setupMockQuotesAndVerify();
  });

  it('Sources of quotes are correct', () => {
    target.getAll()
      .subscribe(quotes => {
        expect(quotes).toEqual([
          {text: 'AAA', source: '111'},
          {text: 'BBB', source: '222'},
          {text: 'CCC', source: '333'}
        ]);
      });

    setupMockQuotesAndVerify();
  });
});
