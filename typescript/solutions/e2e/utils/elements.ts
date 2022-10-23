import {driver} from "../config";
import {By} from "selenium-webdriver";

export function element(selector: string) {
    return driver.findElement(By.css(selector))
}

export function elements(selector: string) {
    return driver.findElements(By.css(selector))
}

export function testElement(name: string) {
    return element(`[data-testid="${name}"]`);
}

export function testElements(name: string) {
    return elements(`[data-testid="${name}"]`);
}


