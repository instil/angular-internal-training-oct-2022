export function showArrowFunctions() {
    const array: unknown[] = ["abc", 123, "def", 456, "ghi", 789];

    console.log("--- Filtering for numbers ---");
    const numbers = array.filter(value => typeof(value) === "number");
    numbers.forEach(value => console.log(value));

    console.log("--- Filtering for strings ---");
    const strings = array.filter(value => typeof(value) === "string");
    strings.forEach(value => console.log(value));

    console.log("--- Transforming inputs part 1 ---");
    const doubledNumbers = array.filter((value): value is number => typeof(value) === "number")
                                .map(value => value * 2);
    doubledNumbers.forEach(value => console.log(value));

    console.log("--- Transforming inputs part 2 ---");
    const uppercaseStrings = array.filter((value): value is string => typeof(value) === "string")
                                  .map(value => value.toUpperCase());
    uppercaseStrings.forEach(value => console.log(value));
}
