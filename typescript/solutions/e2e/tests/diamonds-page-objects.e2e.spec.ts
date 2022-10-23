import {DiamondsPage} from "../page-objects/diamonds.po";

describe('Testing the diamond solution - page objects', () => {
    let page: DiamondsPage;

    beforeAll(async () => {
        page = new DiamondsPage();

        await page.navigateTo();
    });

    afterAll(async () => {
        await page.close();
    });

    it('should load diamonds page', async () => {
        expect(await page.title()).toEqual('Diamonds');
    });

    it('should render diamond of size 1', async () => {
        await page.setHeight(1);

        await page.process();

        expect(await page.output()).toEqual('*');
    });

    it('should render diamond of size 5', async () => {
        await page.setHeight(5);

        await page.process();

        expect(await page.output()).toEqual(
            '  *\n' +
            ' ***\n' +
            '*****\n' +
            ' ***\n' +
            '  *');
    });

    it('should render diamond of size 7', async () => {
        await page.setHeight(7);

        await page.process();

        expect(await page.output()).toEqual(
            '   *\n' +
            '  ***\n' +
            ' *****\n' +
            '*******\n' +
            ' *****\n' +
            '  ***\n' +
            '   *');
    });

    it('should show error if even number', async () => {
        await page.setHeight(4);

        await page.process();

        expect(await page.output()).toEqual('The input must be an odd number');
    });
});
