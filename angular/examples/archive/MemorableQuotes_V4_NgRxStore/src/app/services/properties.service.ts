import { Injectable } from '@angular/core';

@Injectable()
export class PropertiesService {
  getNewQuoteText(): string {
    return 'Get to the Chappa!!!';
  }

  getNewQuoteSource(): string {
    return 'Colonel Matrix';
  }
}
