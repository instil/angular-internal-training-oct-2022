export function showTemplateStrings() {
    const val1 = "abcde";
    const val2 = 1234;
    const val3 = true;

    console.log("Values are " + val1 + ", " + val2 + " and " + val3);
    console.log(`Values are ${val1}, ${val2} and ${val3}`);

    console.log("Values are " + val1.toUpperCase() + ", " + (val2 * 2) + " and " + !val3);
    console.log(`Values are ${val1.toUpperCase()}, ${val2 * 2} and ${!val3}`);
}
