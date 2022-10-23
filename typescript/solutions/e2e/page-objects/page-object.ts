import {driver} from "../config";
import {Condition, until} from "selenium-webdriver";

export abstract class PageObject {
    constructor(public url: string) {
    }

    loadCondition(): Condition<any> {
        return until.urlIs(this.url);
    }

    async navigateTo(): Promise<void> {
        await driver.navigate().to(this.url);

        await driver.wait(this.loadCondition());
    }

    async wait<T>(condition: Condition<T>): Promise<void> {
        await driver.wait(condition);
    }

    async close(): Promise<void> {
        await driver.close();
    }
}
