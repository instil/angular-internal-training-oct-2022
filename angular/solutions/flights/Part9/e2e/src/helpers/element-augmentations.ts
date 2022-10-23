import {browser, ElementFinder, ExpectedConditions, protractor} from 'protractor';
import './for-each-async';

declare global {
  interface ElementFinder {
    setText(value: string): Promise<ElementFinder>;

    scrollTo(): Promise<ElementFinder>;

    waitAndGetText(): Promise<string>;

    isChecked(): Promise<boolean>;
  }
}

ElementFinder.prototype.setText = async function(value: string): Promise<void> {
  this.clear();
  const lines = value.split('\n');
  await lines.forEachAsync(async (line, index) => {
    await this.sendKeys(line);
    if (index < lines.length - 1) {
      await this.sendKeys(protractor.Key.ENTER);
    }
  });
};

ElementFinder.prototype.scrollTo = async function(): Promise<void> {
  await browser.wait(ExpectedConditions.presenceOf(this), 10000);
  const location = await this.getLocation();
  await browser.driver.executeScript(`window.scrollTo(${location.x}, ${location.y});`);
};

ElementFinder.prototype.waitAndGetText = async function(): Promise<string> {
  await browser.waitForAngular();
  return await this.getText();
};

ElementFinder.prototype.isChecked = async function(): Promise<boolean> {
  await browser.waitForAngular();
  return (await this.getAttribute('checked')) === 'true';
};

export default {};

