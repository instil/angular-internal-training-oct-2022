// TODO  Port to TypeScript
//       Rename the file to a TS file.
//       Add types wherever possible and rename functions
//         and variables so that the code makes sense.

export function tagWrapperExercise() {
    var f1 = buildTagWrapper(wibble,"mark");
    var f2 = buildTagWrapper(wobble,"em");

    f1(bar,foo);
    util(foo);
    f2(bar,foo);
}

function buildTagWrapper(contentBuilder, tagName) {
    return function(inputBuilder, nodeFinder) {
        var output = contentBuilder(inputBuilder());
        var parentNode = nodeFinder();
        var newNode = document.createElement(tagName);
        newNode.innerText = output;
        parentNode.appendChild(newNode);
    }
}

function util(nodeFinder) {
    nodeFinder().appendChild(document.createElement("hr"));
}

function foo() {
    return document.getElementById("target");
}

function bar() {
    return "Fortune favors the prepared mind";
}

function wibble(input) {
    return input.toUpperCase();
}

function wobble(input) {
    return input.replace("Fortune","Chance");
}
