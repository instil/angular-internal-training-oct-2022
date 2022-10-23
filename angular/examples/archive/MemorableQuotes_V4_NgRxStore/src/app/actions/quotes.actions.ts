import {Action} from '@ngrx/store';
import {Quote} from '../model/quote';

export const QUOTES_FETCHED = '[Quotes] FETCHED';
export const QUOTE_ADDED = '[Quotes] ADDED';

export class Fetched implements Action {
  readonly type = QUOTES_FETCHED;

  constructor(public quotes: Quote[]) {
  }
}

export class Added implements Action {
  readonly type = QUOTE_ADDED;

  constructor(public newQuote: Quote) {
  }
}

export type All = Added | Fetched;
