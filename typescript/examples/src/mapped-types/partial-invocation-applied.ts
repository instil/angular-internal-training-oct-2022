import {partial} from "./partial-invocation-fixed";

function findAllMatches(regex: RegExp, source: string, output: Array<string>): Array<string> {
    let match: RegExpExecArray | null = null;
    while((match = regex.exec(source)) !== null) {
        output.push(match[0]);
    }
    return output;
}

export function showPartialInvocationApplied() {
    const regex = new RegExp("[A-Z]{3}","g");
    const data1 = "abcDEFghiJKLmno";
    const data2 = "ABCdefGHIkjlMNO";

    const results1 = findAllMatches(regex, data1, []);
    const results2 = findAllMatches(regex, data2, []);

    console.log(results1);
    console.log(results2);

    const findThreeUppercase = partial(findAllMatches)(regex);
    const results3 = findThreeUppercase(data1, []);
    const results4 = findThreeUppercase(data2, []);

    console.log(results3);
    console.log(results4);
}
