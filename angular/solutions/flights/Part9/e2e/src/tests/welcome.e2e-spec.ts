import { HomePageObject } from '../page-objects/home.po';

describe('flights App', () => {
  let page: HomePageObject;

  beforeEach(() => {
    page = new HomePageObject();
  });

  it('should display welcome message', async () => {
    await page.navigateTo();

    expect(await page.getParagraphText()).toEqual('Welcome to the flights app');
  });
});
