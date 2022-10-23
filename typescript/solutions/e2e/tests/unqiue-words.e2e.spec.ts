import {UniqueWordsPage} from "../page-objects/unique-words.po";

describe('Unique Words', () => {
    let page: UniqueWordsPage;

    beforeAll(async () => {
        page = new UniqueWordsPage();

        await page.navigateTo();
    });

    afterAll(async () => {
        await page.close();
    });

    it('should load page', async () => {
        expect(await page.title()).toEqual('Unique Words');
    });

    it('should show 0 words for empty input', async () => {
        await page.setInputText('');

        await page.process();

        expect(await page.output()).toEqual('Found 0 unique words');
    });

    it('should show 0 words for whitespace empty input', async () => {
        await page.setInputText('       ');

        await page.process();

        expect(await page.output()).toEqual('Found 0 unique words');
    });

    it('should show 1 word for single word input', async () => {
        await page.setInputText('hello');

        await page.process();

        expect(await page.output()).toEqual(`Found 1 unique words
hello = 1`);
    });

    it('should show 1 word for repeated unqiue word input', async () => {
        await page.setInputText('hello hello hello');

        await page.process();

        expect(await page.output()).toEqual(`Found 1 unique words
hello = 3`);
    });

    it('should show multiple words with correct counts', async () => {
        await page.setInputText(`
        hello good evening
        it is good this evening
        good-bye 
        `);

        await page.process();

        expect(await page.output()).toEqual(`Found 7 unique words
good = 3
evening = 2
hello = 1
it = 1
is = 1
this = 1
bye = 1`);
    });
});
