import {Inject, Injectable, Injector} from '@angular/core';
import {INITIAL_QUOTE_TOKEN, INITIAL_SOURCE_TOKEN} from '../tokens';

@Injectable()
export class PropertiesService {
  constructor(
    @Inject(INITIAL_QUOTE_TOKEN) private initialQuote: string,
    @Inject(INITIAL_SOURCE_TOKEN) private initialSource: string,
    private injector: Injector
  ) {
    console.log('Instantiating PropertiesService');
    console.log(injector);
  }

  getNewQuoteText(): string {
    return this.initialQuote;
  }

  getNewQuoteSource(): string {
    return this.initialSource;
  }
}
