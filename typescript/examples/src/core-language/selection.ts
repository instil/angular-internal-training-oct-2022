export function showSelection() {
    let value = Math.ceil(Math.random() * 100);

    console.log("--- If Else Statement ---");
    if (value < 10) {
        console.log("value is less than 10");
    } else if (value < 50) {
        console.log("value is less than 50");
    } else {
        console.log("Not sure about value");
    }

    console.log("--- Ternary Operator ---");
    const state = value % 2 === 0 ? 'even' : 'false';
    console.log(state);

    console.log("--- Switch Statement ---");
    // Cases have breaks to avoid fallthrough
    switch (value) {
        case 0:
            console.log("value is zero");
            break;
        case 1:
            console.log("value is one");
            break;
        case 2:
        case 3:
            console.log("value is two or three");
            break;
        default:
            console.log("value is something else");
    }
}


function switchInFunction(x) {
    // Inside function we can return instead of break
    switch (x) {
        case 0:
            return "value is zero";
        case 1:
            return "value is one";
        case 2:
        case 3:
            return "value is two or three";
        default:
            return "value is something else";
    }
}
