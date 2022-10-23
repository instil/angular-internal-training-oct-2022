export interface MouseEvent {
    type: "mouse",
    button: number;
    clientX: number;
    clientY: number;
}

export interface KeyboardEvent {
    type: "keyboard",
    key: string;
    shiftKey: boolean;
    ctrlKey: boolean;
    altKey: boolean;
}

export interface TouchEvent {
    type: "touch",
    points: number;
}

type Event =
    | MouseEvent
    | KeyboardEvent
    | TouchEvent;

function assertNever(obj: never): never {
    throw new Error(`Unexpected object: ${obj}`);
}

function handleEvent(event: Event) {
    switch (event.type) {
        case "keyboard":
            console.log(`Keyboard Event - Key = ${event.key}`);
            break;
        case "touch":
            console.log(`Touch Event - Point = ${event.points}`);
            break;
        case "mouse":
            console.log(`Mouse Event - (X, Y) = ` +
                        `(${event.clientX}, ${event.clientY})`);
            break;

        // Forces exhaustive type checking
        default: assertNever(event);

        // case "something else":
        //     console.log("This is a compiler error");
        //     break;
    }
}

export function showDiscriminatedUnions() {
    const mouseEvent: MouseEvent = {
        type: "mouse",
        button: 0,
        clientX: 50,
        clientY: 100
    };
    const touchEvent: TouchEvent = {
        type: "touch",
        points: 1
    };
    const keyboardEvent: KeyboardEvent = {
        type: "keyboard",
        key: 'A',
        shiftKey: true,
        ctrlKey: false,
        altKey: false
    };

    handleEvent(mouseEvent);
    handleEvent(touchEvent);
    handleEvent(keyboardEvent);
}


// Ensure exhaustive checks when returning data
function handleEventReturn(event: Event): string {
    // Comment one of the cases as see the return type is now an error
    switch (event.type) {
        case "keyboard":
            return `Keyboard Event - Key = ${event.key}`;
        case "touch":
            return `Touch Event - Point = ${event.points}`;
        case "mouse":
            return `Mouse Event - (X, Y) = (${event.clientX}, ${event.clientY})`;
    }
}
