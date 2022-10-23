import {HomePageObject} from '../page-objects/home.po';
import {FlightViewerPageObject} from '../page-objects/flight-viewer.po';
import {browser} from 'protractor';

describe('Flight Booking App', () => {
  let page: FlightViewerPageObject;

  beforeEach(async () => {
    page = new FlightViewerPageObject();

    await page.navigateTo();
    // await page.refreshFlights();
  });

  it('should display table with 20 flights', async () => {
    expect(await page.getFlightsTableRows().count()).toEqual(20);
  });

  it('should display correct details for course 105', async () => {
    const flight = await page.getFlight(105);

    expect(flight.id).toEqual('105');
    expect(flight.origin).toEqual('Belfast City');
    expect(flight.destination).toEqual('London Gatwick');
  });

  it('should show details for course 201', async () => {
    await page.selectFlight(201);

    const flight = await page.getFlightDetailsObject();
    expect(flight.id).toEqual('201');
    expect(flight.origin).toEqual('Belfast City');
    expect(flight.destination).toEqual('Birmingham');
  });

  it('should show update form for course 205', async () => {
    await page.selectFlight(205);
    await page.editFlight();

    const flight = await page.getFlightFormValue();

    expect(flight.number).toEqual('205');
    expect(flight.origin).toEqual('Belfast City');
    expect(flight.destination).toEqual('Birmingham');
  });

  async function updateFlightForm(origin: string, destination: string) {
    await page.updateFlightForm(origin, destination);
    await page.saveFlightUpdate();
  }

  it('should update flight correctly', async () => {
    await page.selectFlight(301);
    await page.editFlight();

    await updateFlightForm('AAA', 'BBB');

    await page.navigateTo();
    const updatedFlight = await page.getFlight(301);
    expect(updatedFlight.id).toEqual('301');
    expect(updatedFlight.origin).toEqual('AAA');
    expect(updatedFlight.destination).toEqual('BBB');
  });
});
