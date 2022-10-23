import {PageObject} from "./page-object";
import {baseUrl, driver} from "../config";
import {testElement, testElements} from "../utils/elements";
import {By, Condition, until} from "selenium-webdriver";

export class RxPage extends PageObject {
    private getComponent = () => testElement('movies-rx');
    private getSpinner = () => testElement('spinner');
    private getMovieCount = () => testElement('total-items');
    private getPreviousButton = () => testElement('previous-button');
    private getNextButton = () => testElement('next-button');
    private getPageNumber = () => testElement('page-number');
    private getMovieList = () => testElement('movie-list');
    private getMovieItems = () => testElements('movie-item');
    private getMovieBullets = () => this.getMovieList().findElements(By.css('li::marker'));

    constructor() {
        super(`${baseUrl}/rx`);
    }

    loadCondition(): Condition<any> {
        return until.elementIsVisible(this.getComponent());
    }

    async nextPage(): Promise<void> {
        await this.getNextButton().click();
    }

    async previousPage(): Promise<void> {
        await this.getPreviousButton().click();
    }

    async waitForLoad(): Promise<void> {
        await this.wait(until.stalenessOf(this.getSpinner()));
    }

    async movieCount(): Promise<number> {
        return Number(await this.getMovieCount().getText());
    }

    async pageNumber(): Promise<number> {
        return Number(await this.getPageNumber().getText());
    }

    async waitForPage(pageNumber: number) {
        await this.wait(until.elementTextIs(this.getPageNumber(), pageNumber.toString()));
    }

    async movieList(): Promise<string[]> {
        const elements = await this.getMovieItems();

        return await Promise.all(elements.map(element => element.getText()));
    }

    async pageStartNumber(): Promise<number> {
        return Number(await this.getMovieList().getAttribute('start'));
    }
}
