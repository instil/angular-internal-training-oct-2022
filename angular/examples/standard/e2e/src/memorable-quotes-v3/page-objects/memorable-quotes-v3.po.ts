import {$, browser, by, element, ElementFinder} from 'protractor';
import {Quote} from '../../../../src/app/memorable-quotes-v3-tests/model/quote';

export class MemorableQuotesV3Page {
  async navigateTo(): Promise<unknown> {
    console.log('Navigating to', `${browser.baseUrl}/memorable-quotes-v3-tests`);
    return browser.get(`${browser.baseUrl}/memorable-quotes-v3-tests`);
  }

  async getTitleText(): Promise<string> {
    return await element(by.css('app-quotes-editor h1')).getText();
  }

  async getQuotes(): Promise<Quote[]> {
    return await this.getTableRows().map(this.getQuoteFromRow);
  }

  private getQuoteFromRow = async (row?: ElementFinder) => {
    if (!row) {
      throw new Error('Could not find row');
    }

    return {
      source: await row.$('td[data-testid="source"]').getText(),
      text: await row.$('td[data-testid="text"]').getText()
    };
  }


  async getNewQuote(): Promise<Quote> {
    // INTERESTING: For input boxes we often want to read the value using 'getAttribute'
    return {
      source: await this.getNewSourceInput().getAttribute('value'),
      text: await this.getNewTextInput().getAttribute('value'),
    };
  }

  async addNewQuote(source: string, text: string): Promise<void> {
    await this.getNewSourceInput().clear();
    await this.getNewSourceInput().sendKeys(source);

    await this.getNewTextInput().clear();
    await this.getNewTextInput().sendKeys(text);

    await this.getAddQuotationButton().click();
  }

  // INTERESTING: We can break out all selectors
  private getTitleHeader = () => element(by.css('app-quotes-editor h1'));
  private getTableRows = () => element(by.css('tbody')).all(by.css('tr'));
  private getNewSourceInput = () => testIdElement('newSource');
  private getNewTextInput = () => testIdElement('newText');
  private getAddQuotationButton = () => testIdElement('addButton');

  // INTERESTING: We can use the search shortcuts to find single or arrays of elements
  // private getTableRows = () => $('tbody').$$('tr');
}

// INTERESTING: We can create useful helpers to simplify and reduce redundancy
function testIdElement(id: string): ElementFinder {
  return element(by.css(`[data-testid="${id}"]`));
}
