import { browser, by, element } from 'protractor';

export class HomePageObject {
  async navigateTo() {
    await browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-home p')).getText();
  }
}
