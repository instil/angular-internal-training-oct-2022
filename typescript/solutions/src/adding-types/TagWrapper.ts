
type ContentBuilder = () => string;
type ContentTransformer = (_: string) => string;
type ElementFinder = () => HTMLElement | null;
type TagWrapper = (content: ContentBuilder, finder: ElementFinder) => void;

export function tagWrapperExercise() {
    const wrapInMark = buildTagWrapper(toUpperCase, "mark");
    const wrapInEM = buildTagWrapper(replaceFortuneWithChance, "em");

    wrapInMark(getExpression, getTargetNode);
    addRule(getTargetNode);
    wrapInEM(getExpression, getTargetNode);
}

function buildTagWrapper(transformer: ContentTransformer, tagName: string): TagWrapper {
    return (inputBuilder, nodeFinder) => {
        let output = transformer(inputBuilder());
        let newNode = document.createElement(tagName);
        newNode.innerText = output;

        let parentNode = nodeFinder();
        parentNode?.appendChild(newNode);
    };
}

function addRule(nodeFinder: ElementFinder) {
    nodeFinder()?.appendChild(document.createElement("hr"));
}

function getTargetNode(): HTMLElement | null {
    return document.getElementById("target");
}

function getExpression(): string {
    return "Fortune favors the prepared mind";
}

function toUpperCase(input: string): string {
    return input.toUpperCase();
}

function replaceFortuneWithChance(input: string): string {
    return input.replace("Fortune", "Chance");
}
