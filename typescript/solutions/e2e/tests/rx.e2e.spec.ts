import {RxPage} from "../page-objects/rx.po";

describe('Rx Movies', () => {
    let page: RxPage;

    beforeAll(async () => {
        page = new RxPage();

        await page.navigateTo();
    });

    afterAll(async () => {
        await page.close();
    });

    it('should show count', async () => {
        await page.waitForLoad();

        expect(await page.movieCount()).toEqual(249);
    });

    it('should start at page 1', async () => {
        expect(await page.pageNumber()).toEqual(1);
    });

    it('should show bullets start at correct number', async () => {
        expect(await page.pageStartNumber()).toEqual(1);
    });

    it('should show correct movies on page 1', async () => {
        expect(await page.movieList()).toEqual([
            'The Shawshank Redemption',
            'The Godfather',
            'The Godfather: Part II',
            'The Dark Knight',
            '12 Angry Men',
            'Schindler',
            'Pulp Fiction',
            'The Lord of the Rings: The Return of the King',
            'The Good, the Bad and the Ugly',
            'Fight Club',
        ]);
    });

    it('should go to next page', async () => {
        await page.nextPage();
        await page.waitForPage(2);

        expect(await page.pageNumber()).toEqual(2);
    });

    it('should show bullets start at correct number for page 2', async () => {
        expect(await page.pageStartNumber()).toEqual(11);
    });

    it('should show correct movies on page 2', async () => {
        expect(await page.movieList()).toEqual([
            'The Lord of the Rings: The Fellowship of the Ring',
            'Forrest Gump',
            'Star Wars: Episode V - The Empire Strikes Back',
            'Inception',
            'The Lord of the Rings: The Two Towers',
            'One Flew Over the Cuckoo',
            'Goodfellas',
            'The Matrix',
            'Seven Samurai',
            'Star Wars: Episode IV - A New Hope',
        ]);
    });

    it('should go to another next page', async () => {
        await page.nextPage();
        await page.waitForPage(3);

        expect(await page.pageNumber()).toEqual(3);
    });

    it('should go to previous page', async () => {
        await page.previousPage();
        await page.waitForPage(2);

        expect(await page.pageNumber()).toEqual(2);
    });
});
