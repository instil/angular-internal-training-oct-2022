export function Some(value) {
    return new Optional(value);
}

export function None() {
    return new Optional();
}

export class Optional {
    constructor(value) {
        this.value = value;
    }

    orElse(fallback) {
        if (this.value) {
            return this.value;
        }
        return fallback;
    }

    fold(someHandler, noneHandler) {
        if (this.value) {
            return someHandler(this.value);
        }
        return noneHandler();
    }
}
