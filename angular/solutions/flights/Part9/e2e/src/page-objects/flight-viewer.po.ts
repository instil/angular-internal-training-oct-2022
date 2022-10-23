import {browser, by, element, ElementArrayFinder, ElementFinder} from 'protractor';
import {promise} from 'selenium-webdriver';
import {testIdElement, testIdSelector} from '../helpers/element';

export class FlightViewerPageObject {
  navigateTo(): promise.Promise<any> {
    return browser.get('/flights');
  }
  getRefreshButton = () => testIdElement('refresh-button');
  getFlightsTable = () => testIdElement('flights-table');
  getFlightsTableRows = () => this.getFlightsTable().$$('tbody tr');
  getFlightRow = (id: number) => this.getFlightsTable().$(`.flight-row-${id}`);

  async getFlight(flightId: number) {
    const flightRow = this.getFlightRow(flightId);
    return await this.extractFlightObject(flightRow);
  }

  async refreshFlights() {
    await this.getRefreshButton().click();
  }

  private async extractFlightObject(flightElements: ElementFinder) {
    return {
      id: await flightElements.$(testIdSelector('id')).getText(),
      origin: await flightElements.$(testIdSelector('origin')).getText(),
      destination: await flightElements.$(testIdSelector('destination')).getText(),
      arrival: await flightElements.$(testIdSelector('arrival')).getText(),
      departure: await flightElements.$(testIdSelector('departure')).getText(),
    };
  }

  getFlightDetails = () => element(by.css('app-flight-details'));

  async getFlightDetailsObject() {
    const flightDetails = this.getFlightDetails();
    return await this.extractFlightObject(flightDetails);
  }

  getFlightUpdateForm(): ElementFinder {
    return element(by.tagName('app-flight-update-form'));
  }

  editFlight(): promise.Promise<void> {
    return this.getFlightDetails()
      .$(testIdSelector('edit-button'))
      .click();
  }

  selectFlight(flightId: number): promise.Promise<void> {
    return this.getFlightRow(flightId)
      .$(testIdSelector('select-button'))
      .click();
  }

  async getFlightFormValue() {
    const flightUpdateForm = this.getFlightUpdateForm();
    return {
      number: await flightUpdateForm.$(testIdSelector('id')).getAttribute('value'),
      origin: await flightUpdateForm.$(testIdSelector('origin')).getAttribute('value'),
      destination: await flightUpdateForm.$(testIdSelector('destination')).getAttribute('value'),
      arrival: await flightUpdateForm.$(testIdSelector('arrival')).getAttribute('value'),
      departure: await flightUpdateForm.$(testIdSelector('departure')).getAttribute('value'),
    };
  }

  async setText(elementFinder: ElementFinder, text: string): Promise<void> {
    await elementFinder.clear();
    await elementFinder.sendKeys(text);
  }

  async updateFlightForm(origin: string, destination: string) {
    const flightUpdateForm = this.getFlightUpdateForm();

    await this.setText(flightUpdateForm.$(testIdSelector('origin')), origin);
    await this.setText(flightUpdateForm.$(testIdSelector('destination')), destination);
  }

  saveFlightUpdate() {
    return this.getFlightUpdateForm().$(testIdSelector('submit-button')).click();
  }
}
