import {PageObject} from "./page-object";
import {baseUrl} from "../config";
import {testElement} from "../utils/elements";
import {Condition, until} from "selenium-webdriver";

export class DiamondsPage extends PageObject {
    private getTitle = () => testElement('title');
    private getSizeInput = () =>  testElement('size-input');
    private getProcessButton = () =>  testElement('process-button');
    private getOutput = () =>  testElement('output');

    constructor() {
        super(`${baseUrl}/diamonds`);
    }

    loadCondition(): Condition<any> {
        return until.elementIsVisible(this.getTitle());
    }

    async setHeight(height: number): Promise<void> {
        await this.getSizeInput().clear();
        await this.getSizeInput().sendKeys(height.toString());
    }

    async process(): Promise<void> {
        await this.getProcessButton().click();
    }

    async output(): Promise<string> {
        return await this.getOutput().getText();
    }

    async title(): Promise<string> {
        return await this.getTitle().getText();
    }
}
