import {By, until} from "selenium-webdriver";
import {baseUrl, driver} from "../config";

function element(selector: string) {
    return driver.findElement(By.css(selector))
}

function testElement(name: string) {
    return element(`[data-testid="${name}"]`);
}


describe('Testing the diamond solution - refactored', () => {
    const title = () => testElement('title');
    const sizeInput = () => testElement('size-input');
    const processButton = () => testElement('process-button');
    const output = () => testElement('output');

    beforeAll(async () => {
        await driver.navigate().to(`${baseUrl}/diamonds`);

        await driver.wait(until.elementIsVisible(title()));
    });

    afterAll(async () => {
        await driver.close();
    });

    it('should load diamonds page', async () => {
        expect(await title().getText()).toEqual('Diamonds');
    });

    it('should render diamond of size 1', async () => {
        await sizeInput().clear();
        await sizeInput().sendKeys("1");

        await processButton().click();

        expect(await output().getText()).toEqual('*');
    });

    it('should render diamond of size 5', async () => {
        await sizeInput().clear();
        await sizeInput().sendKeys("5");

        await processButton().click();

        expect(await output().getText()).toEqual(
            '  *\n' +
            ' ***\n' +
            '*****\n' +
            ' ***\n' +
            '  *');
    });

    it('should render diamond of size 7', async () => {
        await sizeInput().clear();
        await sizeInput().sendKeys("7");

        await processButton().click();

        expect(await output().getText()).toEqual(
            '   *\n' +
            '  ***\n' +
            ' *****\n' +
            '*******\n' +
            ' *****\n' +
            '  ***\n' +
            '   *');
    });

    it('should show error if even number', async () => {
        await sizeInput().clear();
        await sizeInput().sendKeys("4");

        await processButton().click();

        expect(await output().getText()).toEqual('The input must be an odd number');
    });
});
