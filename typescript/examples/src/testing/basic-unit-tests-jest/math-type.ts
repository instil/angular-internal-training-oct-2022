export class MathType {
    constructor(public no1: number, public no2: number) {
    }

    add(): number {
        return this.no1 + this.no2;
    }

    subtract(): number {
        return this.no1 - this.no2;
    }

    multiply(): number {
        return this.no1 * this.no2;
    }

    join(spacer: string): string {
        return `${this.no1}${spacer}${this.no2}`;
    }
}
