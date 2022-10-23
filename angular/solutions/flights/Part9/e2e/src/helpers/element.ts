import {ElementFinder, by, element} from 'protractor';

export function testIdSelector(id: string): string {
  return `[data-testid="${id}"]`;
}

export function testIdElement(id: string): ElementFinder {
  return element(by.css(testIdSelector(id)));
}
