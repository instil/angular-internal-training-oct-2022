type ElementOrNull = HTMLElement | null;
type ListOfElement = NodeListOf<HTMLElement>;

export function showBrowserDataTypes() {
    const result1: string = document.title;
    console.log(result1);

    const result2: ElementOrNull = document.getElementById("sanity");
    if(result2 !== null) {
        console.log(result2.innerText);
    }

    const result3: ListOfElement = document.querySelectorAll("li:last-child");
    Array.from(result3)
        .map(node => node.innerText)
        .forEach(text => console.log(text));
}
