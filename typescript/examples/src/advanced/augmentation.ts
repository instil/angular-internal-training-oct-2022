declare global {
    interface Array<T> {
        double(): void;
    }
}

export function showAugmentation() {
    const items = [2, 4, 6, 8];

    console.log("Before: ", items);

    if ("double" in items) {
        items.double();
        console.log("Should not happen the first time");
    }

    augment();
    items.double(); // double added AFTER object/array created
    console.log("After: ", items);
}

function augment() {
    Array.prototype.double = function <T>(this: Array<T>): void {
        for (let i = 0; i < this.length; i++) {
            const doubled = (this[i] as any) * 2 as any;
            this[i] = doubled;
        }
    };
}
