import {MemorableQuotesV3Page} from './page-objects/memorable-quotes-v3.po';

const initialData = [
  {
    text: 'Fortune favors the prepared mind',
    source: 'Louis Pasteur'
  },
  {
    text: 'We are what we repeatedly do. Excellence, then, is not an act, but a habit.',
    source: 'Aristotle'
  },
  {
    text: 'Tether even a cooked chicken',
    source: 'Hagakure'
  },
  {
    text: 'Whereof one cannot speak, thereof one must be silent',
    source: 'Ludwig Wittgenstein'
  }
];

describe('Memorable Quotes', () => {
  let page: MemorableQuotesV3Page;

  beforeEach(() => {
    page = new MemorableQuotesV3Page();
  });

  describe('Initial tests', () => {
    // INTERESTING: We can have multiple beforeEach if we want to logically break up setup
    beforeEach(async () => {
      // INTERESTING: Both tests and setup be async
      await page.navigateTo();
    });

    it('should display correct title', async () => {
      expect(await page.getTitleText()).toEqual('Quotes App');
    });

    it('should have initial data in table', async () => {
      expect(await page.getQuotes()).toEqual(initialData);
    });

    it('should have initial new quote', async () => {
      expect(await page.getNewQuote()).toEqual({
        source: 'Colonel Matrix',
        text: 'Get to the chappa!'
      });
    });
  });

  describe('Sequential tests', () => {
    // INTERESTING: To speed up tests we might only make complete describe blocks independent.
    //              We can't run each test independently - they must run in order.
    //              The benefit is the page doesn't need to load each time.
    beforeAll(async () => {
      await page.navigateTo();
    });

    it('should be able to add new quote', async () => {
      await page.addNewQuote('AAA', 'BBB');

      expect(await page.getQuotes()).toEqual([
        ...initialData,
        {source: 'AAA', text: 'BBB'}
      ]);
    });

    it('should be able to add second new quote', async () => {
      await page.addNewQuote('CCC', 'DDD');

      expect(await page.getQuotes()).toEqual([
        ...initialData,
        {source: 'AAA', text: 'BBB'},
        {source: 'CCC', text: 'DDD'},
      ]);
    });
  });
});
