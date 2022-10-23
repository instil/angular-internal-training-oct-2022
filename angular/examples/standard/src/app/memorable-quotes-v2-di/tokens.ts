import {InjectionToken} from '@angular/core';
import {QuotesService} from './services/quotes.service';

export const QUOTES_SERVICE = new InjectionToken<QuotesService>('QuotesService');

export const INITIAL_QUOTE_TOKEN = new InjectionToken<string>('Initial Quote');
export const INITIAL_SOURCE_TOKEN = new InjectionToken<string>('Initial Quote');

export const INJECTION_COUNT_TOKEN = new InjectionToken<number>('Injection Count');
