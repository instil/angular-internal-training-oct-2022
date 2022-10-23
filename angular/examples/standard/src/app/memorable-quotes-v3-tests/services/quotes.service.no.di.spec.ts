import {QuotesService} from './quotes.service';
import {of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import SpyObj = jasmine.SpyObj;

const sampleQuotes = [
  {text: 'Fortune favors the prepared mind', source: 'Louis Pasteur'},
  {text: 'Tether even a cooked chicken', source: 'Hagakure'}
];

describe('QuotesServiceHttp without DI', () => {
  let target: QuotesService;
  let http: SpyObj<HttpClient>;

  // INTERESTING: Doing setup in the beforeEach method
  //              Spys are created anew before each test.
  beforeEach(() => {
    http = jasmine.createSpyObj<HttpClient>(['get']);
    http.get.and.returnValue(of(sampleQuotes));

    target = new QuotesService(http);
  });

  it('Quotes can be fetched', () => {
    target.getAll()
      .subscribe(quotes => expect(quotes.length).toEqual(2));
  });

  // INTERESTING: For tests with actual async work we can be provided a done call back by Jasmine
  //              This test would work without (as above) because the spys and observables are all synchronous
  it('Quotes can be fetched - using done', (done: DoneFn) => {
    target.getAll()
      .subscribe(quotes => {
        expect(quotes.length).toEqual(2);
        // INTERESTING: If we have actual async work we can mark the end of the test with a done call
        done();
      });
  });

  it('Sources of quotes are correct', () => {
    target.getAll()
      .subscribe(quotes => {
        // INTERESTING: We can verify expectations within the subscribe
        expect(quotes).toEqual([
          {text: 'Fortune favors the prepared mind', source: 'Louis Pasteur'},
          {text: 'Tether even a cooked chicken', source: 'Hagakure'}
        ]);
      });
  });
});
