
type HtmlElements = {
    "p": HTMLBodyElement,
    "label": HTMLLabelElement,
    "canvas": HTMLCanvasElement
}

type ResultElement<T extends string> =
    T extends keyof HtmlElements ? HtmlElements[T] : HTMLElement;

function createElementWithID<T extends string>(name: T, id: string): ResultElement<T> {
    return document.createElement(name) as ResultElement<T>;
}

export function showTypingHtmlElements() {
    const para = createElementWithID("p", "e1");
    const label = createElementWithID("label", "e2");
    const canvas = createElementWithID("canvas", "e3");

    para.innerText = "Paragraphs have content";
    label.htmlFor = "other";
    canvas.height = 100;

    console.log(para);
    console.log(label);
    console.log(canvas);
}
