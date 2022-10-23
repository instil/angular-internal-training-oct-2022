import {MathType} from "./math-type";

describe("Math Type", () => {
    let target: MathType;

    beforeEach(() => {
        target = new MathType(34, 12);
    });

    it("performs addition", () => {
        expect(target.add()).toEqual(46);
    });

    it("performs subtraction", () => {
        expect(target.subtract()).toEqual(22);
    });

    it("performs multiplication", () => {
        expect(target.multiply()).toEqual(408);
    });
});
