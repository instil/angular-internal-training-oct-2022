import {MathType} from "./math-type";

describe("Math Type", () => {
    let target: MathType;

    beforeEach(() => {
        target = new MathType(34, 12);
    });

    // jest uses `test`
    test("performs addition", () => {
        expect(target.add()).toEqual(46);
    });
    // but can also use `it`
    it("performs subtraction", () => {
        expect(target.subtract()).toEqual(22);
    });

    test("performs multiplication", () => {
        expect(target.multiply()).toEqual(408);
    });
});
