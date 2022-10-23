import * as webdriver from "selenium-webdriver";
import * as chrome from "selenium-webdriver/chrome";
import * as chromedriver from 'chromedriver';

chrome.setDefaultService(new chrome.ServiceBuilder(chromedriver.path).build());

export const baseUrl = 'http://localhost:3001';

export const driver = new webdriver.Builder()
  .forBrowser('chrome')
  .build();

driver.manage().setTimeouts({
  pageLoad: 15_000,
  implicit: 15_000
});
