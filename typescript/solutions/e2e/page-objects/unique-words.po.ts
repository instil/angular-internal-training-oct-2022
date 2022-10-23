import {PageObject} from "./page-object";
import {baseUrl} from "../config";
import {testElement} from "../utils/elements";
import {Condition, Key, until} from "selenium-webdriver";

export class UniqueWordsPage extends PageObject {
    private getTitle = () => testElement('title');
    private getInputText = () =>  testElement('input-text');
    private getProcessButton = () =>  testElement('process-button');
    private getOutput = () =>  testElement('output');

    constructor() {
        super(`${baseUrl}/unique-words`);
    }

    loadCondition(): Condition<any> {
        return until.elementIsVisible(this.getTitle());
    }

    async setInputText(text: string): Promise<void> {
        await this.getInputText().clear();
        await this.getInputText().sendKeys(Key.SPACE, Key.BACK_SPACE);
        await this.getInputText().sendKeys(text.toString());
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
