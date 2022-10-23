import {Quote} from '../model/quote';
import * as QuotesActions from '../actions/quotes.actions';

// Note below we don't need to cast
// TypeScript is clever enough to understad the type, based on the switch

export function quotesReducer(state: Quote[] = [], action: QuotesActions.All) {
  switch (action.type) {
    case QuotesActions.QUOTES_FETCHED:
      console.log('Reducer invoked because quotes have been fetched');
      return action.quotes;

    case QuotesActions.QUOTE_ADDED:
      console.log('Reducer invoked because a new quote has been added');
      return [action.newQuote].concat(state);

    default:
      return state;
  }
}
