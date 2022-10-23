class Pair<T, U> {
    public first: T;
    public second: U;

    constructor(first: T, second: U) {
        this.first = first;
        this.second = second;
    }
}

function displayValues<T, U>(values: Pair<T, U>[]) {
    for (let {first, second} of values) {
        console.log(`Pair of ${first} and ${second}`);
    }
}

export function showGenerics() {
    let list1: Array<Pair<number, string>> = [];
    let list2: Array<Pair<string, number>> = [];

    list1.push(new Pair(123, "abc"));
    list1.push(new Pair(456, "def"));

    list2.push(new Pair("abc", 123));
    list2.push(new Pair("def", 456));

    displayValues(list1);
    displayValues(list2);
}
