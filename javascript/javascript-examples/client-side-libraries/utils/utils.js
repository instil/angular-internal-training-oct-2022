function findOutput() {
    return document.getElementById('output');
}

function printTitle(title) {
    const output = findOutput();
    output.innerText = output.innerText + `\n--- ${title} ---\n`;
}

function printResult(text) {
    const output = findOutput();
    output.innerText = output.innerText + `${text}\n`;
}

function printObject(object) {
    printResult("Object contents:");
    for (const propName in object) {
        printResult(`\t${propName} has value ${object[propName]}`)
    }
}
