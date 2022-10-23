import {By, until} from "selenium-webdriver";
import {driver} from "../config";

describe('Testing the diamond solution', () => {
    beforeAll(async () => {
        await driver.navigate().to('http://localhost:3001/diamonds');
        const title = driver.findElement(By.css('[data-testid="title"]'));

        await driver.wait(until.elementIsVisible(title));
    });

    afterAll(async () => {
        await driver.close();
    });

    it('should load diamonds page', async () => {
        const title = driver.findElement(By.css('[data-testid="title"]'));

        expect(await title.getText()).toEqual('Diamonds');
    });

    it('should render diamond of size 1', async () => {
        const sizeInput = driver.findElement(By.css('[data-testid="size-input"]'));
        const processButton = driver.findElement(By.css('[data-testid="process-button"]'));
        const output = driver.findElement(By.css('[data-testid="output"]'));
        await sizeInput.clear();
        await sizeInput.sendKeys("1");

        await processButton.click();

        expect(await output.getText()).toEqual('*');
    });

    it('should render diamond of size 5', async () => {
        const sizeInput = driver.findElement(By.css('[data-testid="size-input"]'));
        const processButton = driver.findElement(By.css('[data-testid="process-button"]'));
        const output = driver.findElement(By.css('[data-testid="output"]'));
        await sizeInput.clear();
        await sizeInput.sendKeys("5");

        await processButton.click();

        expect(await output.getText()).toEqual(
            '  *\n' +
            ' ***\n' +
            '*****\n' +
            ' ***\n' +
            '  *');
    });

    it('should render diamond of size 7', async () => {
        const sizeInput = driver.findElement(By.css('[data-testid="size-input"]'));
        const processButton = driver.findElement(By.css('[data-testid="process-button"]'));
        const output = driver.findElement(By.css('[data-testid="output"]'));
        await sizeInput.clear();
        await sizeInput.sendKeys("7");

        await processButton.click();

        expect(await output.getText()).toEqual(
            '   *\n' +
            '  ***\n' +
            ' *****\n' +
            '*******\n' +
            ' *****\n' +
            '  ***\n' +
            '   *');
    });

    it('should show error if even number', async () => {
        const sizeInput = driver.findElement(By.css('[data-testid="size-input"]'));
        const processButton = driver.findElement(By.css('[data-testid="process-button"]'));
        const output = driver.findElement(By.css('[data-testid="output"]'));

        await sizeInput.clear();
        await sizeInput.sendKeys("4");

        await processButton.click();

        expect(await output.getText()).toEqual('The input must be an odd number');
    });
});
